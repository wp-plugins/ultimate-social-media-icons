<?php
/* add fb like add this and google share to end of every post */

function sfsi_social_buttons_below($content) {
	global $post;
         $sfsi_section6=  unserialize(get_option('sfsi_section6_options',false));
        
  /* check if option activated in admin or not */ 
  if($sfsi_section6['sfsi_show_Onposts']=="yes")
  {
	$permalink = get_permalink($post->ID);
        $title = get_the_title();
	$sfsiLikeWith="45px;";
        /* check for counter display */
        if($sfsi_section6['sfsi_icons_DisplayCounts']=="yes")
        {
            $show_count=1;
	    $sfsiLikeWith="75px;";
	   
        }   
        else
        {
            $show_count=0;
        } 
        $txt=(isset($sfsi_section6['sfsi_textBefor_icons']))? $sfsi_section6['sfsi_textBefor_icons'] : "Share this Post with :" ;
        $float= $sfsi_section6['sfsi_icons_alignment'];
        $icons="<div class='sfsi_Sicons' style='float:".$float."'><div style='float:left;margin:5px;'><span>".$txt."</span></div>";
        
        $icons.="<div class='sf_fb' style='float:left;margin:5px;width:".$sfsiLikeWith."'>".sfsi_FBlike($permalink,$show_count)."</div>";
	$icons.="<div class='sf_google'  style='float:left;margin:5px;max-width:62px;min-width:35px;'>".sfsi_googlePlus($permalink,$show_count)."</div>";
        $icons.="<div class='sf_addthis'  style='float:left;margin:8px 5px 5px 5px;'>".sfsi_Addthis($show_count)."</div>";
      
	$icons.="</div>";
    if(!is_feed() && !is_home() && !is_page()) {
		$content =   $content .$icons;
	}
  }   
	return $content;
}

/* create google+ button */
function sfsi_googlePlus($permalink,$show_count) {
        $google_html = '<div class="g-plusone" data-href="' . $permalink . '" ';
        if($show_count) {
                $google_html .= 'data-size="large" ';
        } else {
                $google_html .= 'data-size="large" data-annotation="none" ';
        }
        $google_html .= '></div>';
        return $google_html;
}

/* create fb like button */
function sfsi_FBlike($permalink,$show_count) {
      
                $send = 'false';
                $width = 180;

        $fb_like_html = '<fb:like href="'.$permalink.'" width="'.$width.'" send="'.$send.'" showfaces="false" ';
        if($show_count==1) { 
                $fb_like_html .= 'layout="button_count"';
        } else {
                $fb_like_html .= 'layout="button"';
        }
        $fb_like_html .= ' action="like"></fb:like>';
        return $fb_like_html;
}
/* create add this  button */
function sfsi_Addthis($show_count)
{
   
   $atiocn=' <script type="text/javascript">
var addthis_config = {
     pubid: "YOUR-PROFILE-ID"
}
</script>';

if($show_count==1)
   {
       $atiocn.=' <div class="addthis_toolbox">
              <a class="addthis_counter addthis_pill_style share_showhide"></a>
	   </div>';
	    return $atiocn;
	
   }
   else
   {
	$atiocn.='<div class="addthis_toolbox addthis_default_style addthis_20x20_style"><a class="addthis_button_compact " href="#">  <img src="'.SFSI_PLUGURL.'images/sharebtn.png"  border="0" alt="Share" /></a></div>';
      return $atiocn; 
    }
}
	
/* add all external javascript to wp_footer */        
 function sfsi_footer_script() {
	  $sfsi_section1=  unserialize(get_option('sfsi_section1_options',false));
	  $sfsi_section6=  unserialize(get_option('sfsi_section6_options',false));
	if($sfsi_section1['sfsi_facebook_display']=="yes")
	{
	?>
	<!--facebook like and share js -->                   
	<div id="fb-root"></div>
	<script>(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=1425108201100352&version=v2.0";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>
 <?php } if($sfsi_section1['sfsi_google_display']=="yes" || $sfsi_section1['sfsi_youtube_display']=="yes") { ?>
 <!--google share and  like and e js -->
	<script type="text/javascript">
		window.___gcfg = {
		  lang: 'en-US'
		};
		(function() {
			var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
			po.src = 'https://apis.google.com/js/plusone.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
		})();
	</script>
	
	<script type='text/javascript' src='https://apis.google.com/js/plusone.js'></script>
	<script type='text/javascript' src='https://apis.google.com/js/platform.js'></script>
	<!-- google share -->
	<script type="text/javascript">
	  (function() {
	    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	    po.src = 'https://apis.google.com/js/platform.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
	  })();
	</script>
<?php } if($sfsi_section1['sfsi_linkedin_display']=="yes") { ?>	
       <!-- linkedIn share and  follow js -->
        <script src="//platform.linkedin.com/in.js" type="text/javascript">lang: en_US</script>
	
<?php } if($sfsi_section1['sfsi_share_display']=="yes" || $sfsi_section6['sfsi_show_Onposts']=="yes") { ?>		
	 <!-- Addthis js -->
        <script type="text/javascript" src="http://s7.addthis.com/js/300/addthis_widget.js"></script>
        <script type="text/javascript">
       var addthis_config = {  ui_click: true  };
       </script>
<?php } if($sfsi_section1['sfsi_pinterest_display']=="yes") {?>
	
	<!--pinit js -->
	<script type="text/javascript" src="//assets.pinterest.com/js/pinit.js"></script>
	
	<?php } if($sfsi_section1['sfsi_twitter_display']=="yes") {?>
<!-- twitter JS End -->
	<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="http://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>	
	<?php }
	/* activate footer credit link */
        if(get_option('sfsi_footer_sec')=="yes")
        {
	    if(!is_admin())
	    {
            $footer_link='<div class="sfsi_footerLnk" style="margin: 0 auto;z-index:1000; absolute; text-align: center;">Social media & sharing icons powered by  <a href="https://wordpress.org/plugins/ultimate-social-media-icons/" target="_new">UltimatelySocial</a> ';
	    
	    $footer_link.="</div>";
	    echo $footer_link;
	    }
	}    
        
}
/* filter the content of post */
add_filter('the_content', 'sfsi_social_buttons_below');

/* update footer for frontend and admin both */ 
if(!is_admin())
{   global $post;
   add_action( 'wp_footer', 'sfsi_footer_script' );	
   add_action('wp_footer','sfsi_check_PopUp');
   add_action('wp_footer','sfsi_frontFloter');	 	     
}
			 				    
if(is_admin())
{
	add_action('in_admin_footer', 'sfsi_footer_script');	
}

/* ping to vendor site on updation of new post */


  

  
?>