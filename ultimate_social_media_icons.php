<?php
/*
Plugin Name: Ultimate Social Media Icons and Share Plugin (Facebook, Twitter, Google Plus, Instagram, Pinterest etc.)
Plugin URI: http://ultimatelysocial.com
Description: The FREE plugin allows you to add social media & share icons to your blog (esp. Facebook, Twitter, Email, RSS, Pinterest, Instagram, Google+, LinkedIn, Share-button). It offers a wide range of design options and other features. 
Author: UltimatelySocial
Author URI: http://ultimatelysocial.com
Version: 1.1.1.8
License: GPLv2 or later

*/

global $wpdb;
/* define the Root for URL and Document */

define('SFSI_DOCROOT',    dirname(__FILE__));
define('SFSI_PLUGURL',    plugin_dir_url(__FILE__));
define('SFSI_WEBROOT',    str_replace(getcwd(), home_url(), dirname(__FILE__)));

/* load all files  */
include(SFSI_DOCROOT.'/libs/controllers/sfsi_socialhelper.php');
include(SFSI_DOCROOT.'/libs/sfsi_install_uninstall.php');
include(SFSI_DOCROOT.'/libs/controllers/sfsi_buttons_controller.php');
include(SFSI_DOCROOT.'/libs/controllers/sfsi_iconsUpload_contoller.php');
include(SFSI_DOCROOT.'/libs/sfsi_Init_JqueryCss.php');
include(SFSI_DOCROOT.'/libs/controllers/sfsi_floater_icons.php');
include(SFSI_DOCROOT.'/libs/controllers/sfsi_frontpopUp.php');
include(SFSI_DOCROOT.'/libs/controllers/sfsiocns_OnPosts.php');
include(SFSI_DOCROOT.'/libs/sfsi_widget.php');

/* plugin install and uninstall hooks */ 
register_activation_hook(__FILE__, 'sfsi_activate_plugin' );
register_deactivation_hook(__FILE__, 'sfsi_deactivate_plugin');
register_uninstall_hook(__FILE__, 'sfsi_Unistall_plugin');

//shortcode for the ultimate social icons {Monad}
add_shortcode("DISPLAY_ULTIMATE_SOCIAL_ICONS", "DISPLAY_ULTIMATE_SOCIAL_ICONS");
function DISPLAY_ULTIMATE_SOCIAL_ICONS($args = null, $content = null)
{
	$instance = array("showf" => 1, "title" => '');
	$return = '';
	if(!isset($before_widget)): $before_widget =''; endif;
	if(!isset($after_widget)): $after_widget =''; endif;
	
	/*Our variables from the widget settings. */
	$title = apply_filters('widget_title', $instance['title'] );
	$show_info = isset( $instance['show_info'] ) ? $instance['show_info'] : false;
	global $is_floter;	      
	$return.= $before_widget;
		$return .= '<div class="sfsi_widget"><div id="sfsi_wDiv"></div>';
		/* Display the widget title */
		if ( $title ) $return .= $before_title . $title . $after_title;
			/* Link the main icons function */
			$return .= sfsi_check_visiblity(0);
	   $return .= '<div style="clear: both;"></div></div>';
	$return .= $after_widget;
	return $return;
}
//adding some meta tags for facebook news feed {Monad}
add_action('wp_head', 'ultimatefbmetatags');
function ultimatefbmetatags()
{
   $post_id = get_the_ID();
   $attachment_id = get_post_thumbnail_id($post_id);
   echo ' <meta name="viewport" content="width=device-width, initial-scale=1">';
   if($attachment_id)
   {
	   $feat_image = wp_get_attachment_url( $attachment_id );
	   if (preg_match('/https/',$feat_image))
	   {
			   echo '<meta property="og:image:secure_url" content="'.$feat_image.'">';
	   }
	   else
	   {
			   echo '<meta property="og:image" content="'.$feat_image.'">';
	   }
	   $metadata = wp_get_attachment_metadata( $attachment_id );
	   $image_type = $metadata['sizes']['post-thumbnail']['mime-type'];
	   $width = $metadata['width'];
	   $height = $metadata['height'];
	   echo '<meta property="og:image:type" content="'.$image_type.'">';
	   echo '<meta property="og:image:width" content="'.$width.'">';
	   echo '<meta property="og:image:height" content="'.$height.'">';
   }
}

//checking for the youtube username and channel id option
add_action('admin_init', 'check_sfsfiupdatedoptions');
function check_sfsfiupdatedoptions()
{
	$option4=  unserialize(get_option('sfsi_section4_options',false));
	if(!isset($option4['sfsi_youtubeusernameorid']) || $option4['sfsi_youtubeusernameorid'] == '')
	{
		$option4['sfsi_youtubeusernameorid']= 'name';
    	update_option('sfsi_section4_options',serialize($option4));
	}
}
?>