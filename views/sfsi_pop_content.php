<?php 

$rss_readmore_text='Note: Also if you already offer a newsletter it makes sense to offer this option too, because it will get you more readers, as expained here.';
$ress_readmore_button='Ok, keep it active for the time being,I want to see how it works';
$rss_readmore_text2='Deactivate it';

define('rss_readmore', $rss_readmore_text);
define('ress_readmore_button', $ress_readmore_button);
define('rss_readmore_text2', $rss_readmore_text2);

?>

<div class="pop-overlay read-overlay" >
    <div class="pop_up_box sfsi_pop_up"  >
        <img src="<?php echo SFSI_PLUGURL; ?>images/close.jpg" id="close_popup" class="sfsicloseBtn" />
        <h4 id="readmore_text">Note: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
</div>
</div>
<!-- Custom icon upload  Pop-up-->
<div class="pop-overlay upload-overlay" >
     
    <form id="customIconFrm" method="post" action="<?php echo admin_url( 'admin-ajax.php?action=UploadIcons' ); ?>" enctype="multipart/form-data" >
        <div class="pop_up_box upload_pop_up" id="tab1" style="min-height: 100px;">
            <img src="<?php echo SFSI_PLUGURL; ?>images/close.jpg" id="close_Uploadpopup" class="sfsicloseBtn" />
	<h4>Please upload your icon</h4>
	<!--<p>Link this icon in second step</p>-->
        <div class="sfsi_uploader">
            <div class="upload upload-another"><label>Custom Icon:</label><input name="" type="text" readonly="readonly"  /> <input name="" type="file" class="fileUPInput" /><input name=""  type="button" value="Upload" class="upload_butt" /></div>
        </div>
      
        <input type="hidden" name="total_cusotm_icons" value="<?php echo $count;?>" id="total_cusotm_icons" class="mediam_txt" />
        <!--<a href="javascript:;" id="close_Uploadpopup" title="Done">Done</a>-->
	<label style="color:red" class="uperror"></label>
	</div>
	
   </form>
   
</div><!-- Custom icon upload  Pop-up-->


<?php  $active_theme=$option3['sfsi_actvite_theme'];
       $icons_baseUrl=SFSI_PLUGURL."/images/icons_theme/".$active_theme."/";
      $visit_iconsUrl= SFSI_PLUGURL."/images/visit_icons/";
       $soicalObj=new sfsi_SocialHelper();
       $twitetr_share=($option2['sfsi_twitter_followUserName']!='') ?  "https://twitter.com/".$option2['sfsi_twitter_followUserName'] : 'http://specificfeeds.com';
       $twitter_text=($option2['sfsi_twitter_followUserName']!='') ?  $option2['sfsi_twitter_aboutPageText'] : 'Create Your Perfect Newspaper for free';
       ?>
<!-- Facebook  example pop up -->
<div class="fb-overlay read-overlay fbex-s2" >
    <div class="pop_up_box sfsi_pop_up adPopWidth" >
        <img src="<?php echo SFSI_PLUGURL; ?>images/close.jpg" id="close_popup" class="sfsicloseBtn" />
     
    <h4 id="readmore_text">Move over the Facebook-icon… </h4>
    
        <div class="adminTooltip" ><a alt="facebook"  href="<?php echo ($option2['sfsi_facebookPage_url']!='') ?  $option2['sfsi_facebookPage_url'] : 'https://www.facebook.com/SpecificFeeds'; ?>"  effect="" class=" " target="_new"><img width="51" class="sfsi_wicon" src="<?php echo SFSI_PLUGURL; ?>images/facebook.png" title="facebook" alt="facebook" /></a>
       <div class="sfsi_tool_tip_2 sfsi_tool_tip_2_inr fb_tool_bdr" style="width: 59px;margin-left: -48.5px;">
           <span class="bot_arow bot_fb_arow "></span>
           <div class="inside fbb">
               <div class="fb_1"><a  href='<?php echo ($option2['sfsi_facebookPage_url']!='') ?  $option2['sfsi_facebookPage_url'] : 'https://www.facebook.com/SpecificFeeds'; ?>' target="_new" ><img src="<?php echo $visit_iconsUrl."facebook.png"; ?>" /></a></div>    
           <div class="fb_2"><?php echo $soicalObj->sfsi_FBlike(($option2['sfsi_facebookPage_url']!='') ?  $option2['sfsi_facebookPage_url'] : 'https://www.facebook.com/SpecificFeeds'); ?></div>
           <div class="fb_3"><?php echo $soicalObj->sfsiFB_Share(($option2['sfsi_facebookPage_url']!='') ?  $option2['sfsi_facebookPage_url'] : 'https://www.facebook.com/SpecificFeeds'); ?></div>
           </div>    
           </div>
   
    </div>
    </div>
</div><!-- END Facebook  example pop up -->

<!-- adthis example pop up -->
<div class="pop-overlay read-overlay athis-s1" >
    <div class="pop_up_box sfsi_pop_up adPopWidth"  >
        <img src="<?php echo SFSI_PLUGURL; ?>images/close.jpg" id="close_popup" class="sfsicloseBtn" />
     
    <h4 id="readmore_text">Move over the “+ icon” to see the sharing options</h4>
    <div style="margin: 0px auto;">
	<script type="text/javascript">
var addthis_config = {
     pubid: "YOUR-PROFILE-ID"
}
</script>
	<a href="http://www.addthis.com/bookmark.php?v=250" class="addthis_button"><img width="51" class="sfsi_wicon" src="<?php echo $icons_baseUrl."/".$active_theme; ?>_share.png" title="share" alt="share" /></a>
    <?php //echo sfsi_Addthis(1); ?>
    
    
    </div>
    </div>
</div><!-- END adthis example pop up -->
<?php

	  $twit_tolCls="100";
	  $twt_margin="63";  
	  $icons_space=$option5['sfsi_icons_spacing'];  
	  $twitter_user=$option2['sfsi_twitter_followUserName'];
	  $twit_tolCls=round(strlen($twitter_user)*4+100+20); 
          $main_margin=round($icons_space)/2;
          $twt_margin=round($twit_tolCls/2+$main_margin+6);
	  
    ?>
<!-- twiiter example pop-up -->
<div class="pop-overlay read-overlay twex-s2" >
    <div class="pop_up_box sfsi_pop_up adPopWidth" >
        <img src="<?php echo SFSI_PLUGURL; ?>images/close.jpg" id="close_popup" class="sfsicloseBtn" />
     
    <h4 id="readmore_text">Move over the Twiiter-icon… </h4>
    
        <div class="adminTooltip" ><a alt="twitter"  href="https://twitter.com/<?php echo $option2['sfsi_twitter_followUserName'];?>"  effect="" class=" " target="_new"><img width="51" class="sfsi_wicon" src="<?php echo SFSI_PLUGURL; ?>images/twitter.png" title="Twitter" alt="facebook" /></a>
       <div class="sfsi_tool_tip_2 sfsi_tool_tip_2_inr twt_tool_bdr" style="width: 59px;margin-left: -48.5px;">
           <span class="bot_arow bot_twt_arow"></span>
           <div class="inside" >
           <div class="twt_1"><?php echo $soicalObj->sfsi_twitterFollow(($option2['sfsi_twitter_followUserName']!='') ?  $option2['sfsi_twitter_followUserName'] : 'SpecificFeeds'); ?></div>
           <div class="twt_2"><?php echo $soicalObj->sfsi_twitterShare($twitetr_share,$twitter_text); ?></div>
           </div>    
           </div>
   
    </div>
    </div>
</div><!-- END twiiter example pop-up -->
<?php 
$google_url=($option2['sfsi_google_pageURL']!='') ?  $option2['sfsi_google_pageURL'] : 'https://plus.google.com/117732335852724933053' ;
?>
<!-- Goolge+  example pop up -->
<div class="pop-overlay read-overlay googlex-s2"  style="display: block;z-index: -1;opacity: 0;">
    <div class="pop_up_box sfsi_pop_up adPopWidth" style="display: block;" >
        <img src="<?php echo SFSI_PLUGURL; ?>images/close.jpg" id="close_popup" class="sfsicloseBtn" />
     
    <h4 id="readmore_text">Move over the Google+ icon… </h4>
    
        <div class="adminTooltip" ><a alt="google+"  href="<?php echo $google_url; ?>"  effect="" class=" " target="_new"><img width="51" class="sfsi_wicon" src="<?php echo SFSI_PLUGURL; ?>images/google_plus.png" title="google+" alt="google" /></a>
       <div class="sfsi_tool_tip_2 sfsi_tool_tip_2_inr gpls_tool_bdr" style="display: block;  margin-left: -76.5px; margin-left: -55.5px;">
           <span class="bot_arow bot_gpls_arow"></span>
           <div class="inside">
           <div class="gpls_visit"><a href='<?php echo $google_url; ?>' target="_new"><img src="<?php echo $visit_iconsUrl."google.png"; ?>" /></a></div>    
           <div class="gtalk_2"><?php echo $soicalObj->sfsi_Googlelike($google_url); ?></div>
           <div class="gtalk_3"><?php echo $soicalObj->sfsi_GoogleShare($google_url); ?></div>
           </div>    
           </div>
   
    </div>
    </div>
</div><!-- END Goolge+  example pop up -->
<?php 
$youtube_url=($option2['sfsi_youtube_pageUrl']!='') ?  $option2['sfsi_youtube_pageUrl'] : 'http://www.youtube.com/user/SpecificFeeds' ;
$youtube_user=($option4['sfsi_youtube_user']!='' && isset($option4['sfsi_youtube_user']))?  $option4['sfsi_youtube_user'] : 'SpecificFeeds' ;
?>
<!-- You tube  example pop up -->
<div class="pop-overlay read-overlay ytex-s2" >
    <div class="pop_up_box sfsi_pop_up adPopWidth" >
        <img src="<?php echo SFSI_PLUGURL; ?>images/close.jpg" id="close_popup" class="sfsicloseBtn" />
     
    <h4 id="readmore_text">Move over the YouTube-icon… </h4>
    
     <div class="adminTooltip" ><a alt="youtube"  href="<?php echo $youtube_url; ?>"  effect="" class=" " target="_new"><img width="51" class="sfsi_wicon" src="<?php echo SFSI_PLUGURL; ?>images/youtube.png" title="youtube" alt="youtube" /></a>
        <div class="sfsi_tool_tip_2 sfsi_tool_tip_2_inr utube_tool_bdr"  style=" margin-left: -67px; width: 96px;" >
           <span class="bot_arow bot_utube_arow"></span>
           <div class="inside">
               <div class="utub_visit"><a href='<?php echo $youtube_url; ?>' target="_new"><img src="<?php echo $visit_iconsUrl."youtube.png"; ?>" /></a></div>    
           <div class="utub_2"><?php echo $soicalObj->sfsi_YouTubeSub($youtube_user); ?></div>
           
           </div>    
        </div>
   
    </div>
  </div>
</div><!-- END You tube  example pop up -->
<?php 
$pin_url=($option2['sfsi_pinterest_pageUrl']!='') ?  $option2['sfsi_pinterest_pageUrl'] : 'http://pinterest.com/specificfeeds' ;
?>
<!-- Pinterest  example pop up -->
<div class="pop-overlay read-overlay pinex-s2" >
    <div class="pop_up_box sfsi_pop_up adPopWidth" >
        <img src="<?php echo SFSI_PLUGURL; ?>images/close.jpg" id="close_popup" class="sfsicloseBtn" />
     
    <h4 id="readmore_text">Move over the Pinterest-icon… </h4>
    
     <div class="adminTooltip" ><a alt="pinterest"  href="<?php echo $pin_url; ?>"  effect="" class=" " target="_new"><img width="51" class="sfsi_wicon" src="<?php echo SFSI_PLUGURL; ?>images/pinterest.png" title="pinterest" alt="pinterest" /></a>
        <div class="sfsi_tool_tip_2 sfsi_tool_tip_2_inr printst_tool_bdr"  style=" width: 73px; margin-left: -55.5px;" >
           <span class="bot_arow bot_pintst_arow"></span>
           <div class="inside">
               <div class="prints_visit"><a href='<?php echo $pin_url; ?>' target="_new"><img src="<?php echo $visit_iconsUrl."pinterest.png"; ?>" /></a></div>    
           <div class="prints_visit_1"><?php echo $soicalObj->sfsi_PinIt($pin_url); ?></div>
           
           </div>    
        </div>
   
    </div>
  </div>
</div> <!-- END Pinterest  example pop up -->
<?php 
$linnked_share=($option2['sfsi_linkedin_pageURL']!='') ?  $option2['sfsi_linkedin_pageURL'] : 'https://www.linkedin.com/' ;
$linkedIncom=($option2['sfsi_linkedin_followCompany']!='') ?  $option2['sfsi_linkedin_followCompany'] : '904740' ;
$ln_product=($option2['sfsi_linkedin_recommendProductId']!='') ?  $option2['sfsi_linkedin_recommendProductId'] : '201714' ;
?>
<!-- LinkedIn  example pop up -->
<div class="pop-overlay read-overlay linkex-s2" style="display: block;z-index: -1;opacity: 0;" >
    <div class="pop_up_box sfsi_pop_up adPopWidth" >
        <img src="<?php echo SFSI_PLUGURL; ?>images/close.jpg" id="close_popup" class="sfsicloseBtn" />
     
    <h4 id="readmore_text">Move over the LinkedIn-icon… </h4>
    
     <div class="adminTooltip" ><a alt="linkedIn"  href="<?php echo $linnked_share;?>"  effect="" class=" " target="_new"><img width="51" class="sfsi_wicon" src="<?php echo SFSI_PLUGURL; ?>images/linked_in.png" title="LinkedIn" alt="LinkedIn" /></a>
        <div class="sfsi_tool_tip_2 sfsi_tool_tip_2_inr linkedin_tool_bdr"  style=" width: 99px; margin-left: -68.5px;">
           <span class="bot_arow bot_linkedin_arow"></span>
           <div class="inside">
           <div style="margin:1px 5px;" class="linkin_1"><a href='<?php echo $linnked_share; ?>' target="_new"><img src="<?php echo $visit_iconsUrl."linkedIn.png"; ?>" /></a></div>    
           <div class="linkin_2"><?php echo $soicalObj->sfsi_LinkedInFollow($linkedIncom); ?></div>
           <div class="linkin_3"><?php echo $soicalObj->sfsi_LinkedInShare($linnked_share); ?></div>
           <div class="linkin_4"><?php echo $soicalObj->sfsi_LinkedInRecommend($linkedIncom,$ln_product); ?></div>
           </div>    
        </div>
   
    </div>
  </div>
</div> <!-- END LinkedIn  example pop up -->

<!-- ADDTHIS ICON POP-UP -->
<div class="pop-overlay read-overlay share-s2" >
    <div class="pop_up_box sfsi_pop_up adPopWidth" >
        <img src="<?php echo SFSI_PLUGURL; ?>images/close.jpg" id="close_popup" class="sfsicloseBtn" />
     
    <h4 id="readmore_text">Move over the “+ icon” to see the sharing options</h4>
    
     <div style="float: right;opacity: 1;position: relative;right: 215px;top: 10px;width: 52px; text-align: center;" ><a alt="share"  href="http://www.addthis.com/bookmark.php?v=250"  effect="" class="addthis_button"><img width="51" class="sfsi_wicon" src="<?php echo SFSI_PLUGURL; ?>images/share.png" title="share" alt="share" /></a>
    </div>
  </div>
</div><!-- END ADDTHIS ICON POP-UP -->



<!-- email deactivate pop-ups -->

<div class="pop-overlay read-overlay demail-1" >
    <div class="pop_up_box sfsi_pop_up" >
       <h4>Note: Also if you already offer a newsletter it makes sense to offer this option too, because it will get you <span class="mediam_txt">more readers</span>, as explained <a href="http://www.specificfeeds.com/rss" target="_new" style="color:#5A6570;display: inline;text-decoration:underline">here</a>. </h4>
       <div class="button"><a href="javascript:;" class="hideemailpop" title="Ok, keep it active for the time being,I want to see how it works">Ok, keep it active for the time being, <br />
I want to see how it works</a></div>
       <a href="javascript:;" id="deac_email2" title="Deactivate it">Deactivate it</a>
  </div>
</div>

<div class="pop-overlay read-overlay demail-2" >
    <div class="pop_up_box sfsi_pop_up" >
       <h4 class="activate">Ok, fine, however for using this plugin for FREE, please support us by activating a link back to our site:</h4>
	<div class="button"><a href="javascript:;" class="activate_footer" title="Ok, activate link" class="activate">Ok, activate link</a></div>
<a href="javascript:;" id="deac_email3" title="Don’t activate link">Don’t activate link</a>
  </div>
</div>

<div class="pop-overlay read-overlay demail-3" >
    <div class="pop_up_box sfsi_pop_up" >
       <h4>You’re a toughie. Last try: As a minimum, could you please review this plugin (with 5 stars)? It only takes a minute. Thank you! </h4>
	<div class="button"><a href="https://wordpress.org/support/view/plugin-reviews/ultimate-social-media-icons" target="_new" class="hidePop" title="Ok, Review it"  class="activate">Ok, Review it</a></div>
        <a href="javascript:;" class="hidePop" title="Don’t review and exit">Don’t review and exit</a>
  </div>
</div> <!-- END email deactivate pop-ups -->
