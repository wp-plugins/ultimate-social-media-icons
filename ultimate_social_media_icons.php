<?php
/*
Plugin Name: Ultimate Social Media and Share Icons
Plugin URI: http://ultimatelysocial.com
Description: The FREE plugin allows you to add social media & share icons to your blog (esp. Facebook, Twitter, Email, RSS, Pinterest, Instagram, Google+, LinkedIn, Share-button). It offers a wide range of design options and other features. 
Author: UltimatelySocial
Author URI: http://ultimatelysocial.com
Version: 1.2.1
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
		/* Display the widget title */
		if ( $title ) $return .= $before_title . $title . $after_title;
		$return .= '<div class="sfsi_widget">';
			$return .= '<div id="sfsi_wDiv"></div>';
			/* Link the main icons function */
			$return .= sfsi_check_visiblity(0);
	   		$return .= '<div style="clear: both;"></div>';
	    $return .= '</div>';
	$return .= $after_widget;
	return $return;
}

//adding some meta tags for facebook news feed {Monad}
function sfsi_checkmetas()
{
	if ( ! function_exists( 'get_plugins' ) )
	{
		require_once ABSPATH . 'wp-admin/includes/plugin.php';
	}
	$all_plugins = get_plugins();
	foreach($all_plugins as $key => $plugin)
	{
		if(is_plugin_active($key))
		{
			if(preg_match("/(seo|search engine optimization|meta tag|open graph|opengraph|og tag|ogtag)/im", $plugin['Name']) || preg_match("/(seo|search engine optimization|meta tag|open graph|opengraph|og tag|ogtag)/im", $plugin['Description']))
			{
				update_option("adding_tags", "no");
				break;
			}
			else
			{
				update_option("adding_tags", "yes");
			}
		}
	}	
}
if ( ! is_admin() )
{
	sfsi_checkmetas();
}

add_action('wp_head', 'ultimatefbmetatags');
function ultimatefbmetatags()
{
	$metarequest = get_option("adding_tags");
	$post_id = get_the_ID();
	if($metarequest == 'yes' && !empty($post_id))
	{
		$post = get_post( $post_id );
		$attachment_id = get_post_thumbnail_id($post_id);
		$title = str_replace('"', "", strip_tags(get_the_title($post_id)));
		$url = get_permalink($post_id);
		$description = $post->post_content;
		$description = str_replace('"', "", strip_tags($description));
		
		echo '<meta name="viewport" content="width=device-width, initial-scale=1">';
		
		if($attachment_id)
		{
		   $feat_image = wp_get_attachment_url( $attachment_id );
		   if (preg_match('/https/',$feat_image))
		   {
				echo '<meta property="og:image:secure_url" content="'.$feat_image.'" data-id="sfsi">';
		   }
		   else
		   {
				echo '<meta property="og:image" content="'.$feat_image.'" data-id="sfsi">';
		   }
		   $metadata = wp_get_attachment_metadata( $attachment_id );
		   if(isset($metadata) && !empty($metadata))
		   {
			   if(isset($metadata['sizes']['post-thumbnail']))
			   {
					$image_type = $metadata['sizes']['post-thumbnail']['mime-type'];
			   }
			   else
			   {
					$image_type = '';  
			   }
			   if(isset($metadata['width']))
			   {
					$width = $metadata['width'];
			   }
			   else
			   {
					$width = '';  
			   }
			   if(isset($metadata['height']))
			   {
					$height = $metadata['height'];
			   }
			   else
			   {
					$height = '';  
			   }
		   }
		   else
		   {
				$image_type = '';
				$width = '';
				$height = '';  
		   }  
		   echo '<meta property="og:image:type" content="'.$image_type.'" data-id="sfsi" />';
		   echo '<meta property="og:image:width" content="'.$width.'" data-id="sfsi" />';
		   echo '<meta property="og:image:height" content="'.$height.'" data-id="sfsi" />';
		   echo '<meta property="og:url" content="'.$url.'" data-id="sfsi" />'; 
		   echo '<meta property="og:description" content="'.$description.'" data-id="sfsi" />';
		   echo '<meta property="og:title" content="'.$title.'" data-id="sfsi" />';
		}
	}
}

//checking for the youtube username and channel id option
add_action('admin_init', 'check_sfsfiupdatedoptions');
function check_sfsfiupdatedoptions()
{
	$option4=  unserialize(get_option('sfsi_section4_options',false));
	 if(isset($option4['sfsi_youtubeusernameorid']) && !empty($option4['sfsi_youtubeusernameorid']))
	 {
	  //
	 }
	 else
	 {
	  $option4['sfsi_youtubeusernameorid'] = 'name';
		 update_option('sfsi_section4_options',serialize($option4));
	 }
}

//sanitizing values
function string_sanitize($s) {
    $result = preg_replace("/[^a-zA-Z0-9]+/", " ", html_entity_decode($s, ENT_QUOTES));
    return $result;
}
?>