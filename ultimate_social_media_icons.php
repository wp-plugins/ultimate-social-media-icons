<?php
/*
Plugin Name: Ultimate Social Media Icons and Share Plugin (Facebook, Twitter, Google Plus, Instagram, Pinterest etc.)
Plugin URI: http://ultimatelysocial.com
Description: The FREE plugin allows you to add social media & share icons to your blog (esp. Facebook, Twitter, Email, RSS, Pinterest, Instagram, Google+, LinkedIn, Share-button). It offers a wide range of design options and other features. 
Author: UltimatelySocial
Author URI: http://ultimatelysocial.com
Version: 1.1.1.3
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

//shortcode for the ultimate social icons
add_shortcode("DISPLAY_ULTIMATE_SOCIAL_ICONS", "DISPLAY_ULTIMATE_SOCIAL_ICONS");
function DISPLAY_ULTIMATE_SOCIAL_ICONS($args, $content = null)
{
	$args = array("name" => "",
    "id" => "",
    "description" => "",
	"class" => "",
    "before_widget" => "<aside class='widget sfsi' id='sfsi-widget-2'>",
    "after_widget" => "</aside>",
    "before_title" => "<h3 class='widget-title'>",
    "after_title" => "</h3>",
    "widget_id" => "sfsi-widget-2",
    "widget_name" => "Ultimate Social Media Icons"
	);
	if(isset($args['title']))
	{
		$title = $args['title'];
	}
	else
	{
		$title = "Please follow & like us :)";
	}
	$instance = array("showf" => 1, "title" => $title);

	$return = '';
	//return $sfsi_obj->widget($args, $instance);
	extract( $args );
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
?>