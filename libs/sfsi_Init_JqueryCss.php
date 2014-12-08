<?php 
/*  instalation of javascript and css  */
function sfsi_admin_JS_CS()
{
    /* include JS */
     $path=pathinfo($_SERVER['REQUEST_URI']);
     
   if((is_admin() && $path['basename']=="admin.php?page=sfsi-options") || !is_admin())
   {
		wp_register_script('SFSIJquery', 'http://code.jquery.com/jquery-1.9.1.js', array('jquery'));
		wp_enqueue_script("SFSIJquery");
	 
		wp_register_script('SFSIMigrate', 'http://code.jquery.com/jquery-migrate-1.1.0.min.js', array('jquery'),'',true);
		wp_enqueue_script("SFSIMigrate");
		
		wp_register_script('SFSIjquery.ui.min', SFSI_PLUGURL . 'js/jquery-ui-min.js', array('jquery'),'',true);
		wp_enqueue_script("SFSIjquery.ui.min");	
		
		wp_register_script('SFSIjqueryModernizr', SFSI_PLUGURL . 'js/shuffle/modernizr.custom.min.js', array('jquery'),'',true);
		wp_enqueue_script("SFSIjqueryModernizr");
		
		wp_register_script('SFSIjqueryShuffle', SFSI_PLUGURL . 'js/shuffle/jquery.shuffle.min.js', array('jquery'),'',true);
		wp_enqueue_script("SFSIjqueryShuffle");
		
		wp_register_script('SFSIjqueryrandom-shuffle', SFSI_PLUGURL . 'js/shuffle/random-shuffle-min.js', array('jquery'),'',true);
		wp_enqueue_script("SFSIjqueryrandom-shuffle");
		
		wp_enqueue_style('thickbox');
	
		wp_enqueue_script('jquery');
		wp_enqueue_script('media-upload');
		wp_enqueue_script('thickbox');
		
		if(is_admin())
		{
			/* ajax image upload js */
			wp_register_script('SFSIJqueryFRM', SFSI_PLUGURL . 'js/jquery.form-min.js', array('jquery'),'',true);
			wp_enqueue_script("SFSIJqueryFRM");
			/* END ajax image upload js */
		}
		/* color picker JS */
		wp_register_script('SFSIJqueryColorPicker', SFSI_PLUGURL . 'js/color-picker/colorpicker-min.js', array('jquery'),'',true);
		wp_enqueue_script("SFSIJqueryColorPicker");
		
		wp_register_script('SFSIJqueryEye', SFSI_PLUGURL . 'js/color-picker/eye-min.js', array('jquery'),'',true);
		wp_enqueue_script("SFSIJqueryEye");
		
		wp_register_script('SFSIJqueryLayout', SFSI_PLUGURL . 'js/color-picker/layout-min.js', array('jquery'),'',true);
		wp_enqueue_script("SFSIJqueryLayout");
		
		wp_register_script('SFSIJqueryutils', SFSI_PLUGURL . 'js/color-picker/utils-min.js', array('jquery'),'',true);
		wp_enqueue_script("SFSIJqueryutils");
			
		/* end color picker js */
	   
		/* custom javascripts for front-end and backend */
		wp_register_script('SFSICustomFormJs', SFSI_PLUGURL . 'js/custom-form-min.js', array('jquery'),'',true);
		wp_enqueue_script("SFSICustomFormJs");
		
		wp_register_script('SFSICustomJs', SFSI_PLUGURL . 'js/custom-min.js', array('jquery'));
		wp_enqueue_script("SFSICustomJs");
		
		wp_register_script('SFSICustomValidateJs', SFSI_PLUGURL . 'js/customValidate-min.js', array('jquery'),'',true);
		wp_enqueue_script("SFSICustomValidateJs");
		/* end cusotm js */
		
		/* initilaize the ajax url in javascript */
		wp_localize_script( 'SFSICustomJs', 'ajax_object', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );
		wp_localize_script( 'SFSICustomValidateJs', 'ajax_object', array( 'ajax_url' => admin_url( 'admin-ajax.php' ),'plugin_url'=> SFSI_PLUGURL) );
	}    
    /* include CSS for front-end and backend  */
    wp_enqueue_style("SFSImainCss", SFSI_PLUGURL . 'css/sfsi-style-min.css' );		
    wp_enqueue_style("SFSIJqueryCSS", SFSI_PLUGURL . 'css/jquery-ui-1.10.4/jquery-ui-min.css' );
    wp_enqueue_style("SFSIColorCss", SFSI_PLUGURL . 'css/colorpicker/css/colorpicker-min.css' );
    wp_enqueue_style("SFSILayoutCss", SFSI_PLUGURL . 'css/colorpicker/css/layout-min.css' );
    
}



add_action('admin_init', 'sfsi_admin_JS_CS');
add_action('init', 'sfsi_admin_JS_CS');
    	
		
?>