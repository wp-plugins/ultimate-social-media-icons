/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* check for the the initial javascript errors */
window.onerror = function(msg, url, line, col, error) {
 if(msg!='')
 {
  
   //document.getElementById('sfsi_onload_errors').style.display="block";
   //document.getElementById('sfsi_jerrors').innerHTML+=msg+"<br/>";
  
 }
}

/* make a noConflicct object to avoid confliction with other js */
SFSI = jQuery.noConflict();
SFSI(window).load(function() {
SFSI("#sfpageLoad").fadeOut(2000);
});
var global_error=0;
SFSI( document ).ready(function( $ ) {
  
    /* stop making cache for third party icons (twitter )*/
    SFSI("head").append('<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />');
    SFSI("head").append('<meta http-equiv="Pragma" content="no-cache" />');
    SFSI("head").append('<meta http-equiv="Expires" content="0" />');
    
     /* load accordion section 1 */
    SFSI( "#accordion" ).accordion({
        collapsible: true,
        active:false,
        heightStyle:"content",
        event: 'click',
        beforeActivate: function(event, ui) {
         // The accordion believes a panel is being opened
        if (ui.newHeader[0]) {
            var currHeader  = ui.newHeader;
            var currContent = currHeader.next('.ui-accordion-content');
         // The accordion believes a panel is being closed
        } else {
            var currHeader  = ui.oldHeader;
            var currContent = currHeader.next('.ui-accordion-content');
        }
         // Since we've changed the default behavior, this detects the actual status
        var isPanelSelected = currHeader.attr('aria-selected') == 'true';

         // Toggle the panel's header
        currHeader.toggleClass('ui-corner-all',isPanelSelected).toggleClass('accordion-header-active ui-state-active ui-corner-top',!isPanelSelected).attr('aria-selected',((!isPanelSelected).toString()));

        // Toggle the panel's icon
        currHeader.children('.ui-icon').toggleClass('ui-icon-triangle-1-e',isPanelSelected).toggleClass('ui-icon-triangle-1-s',!isPanelSelected);

         // Toggle the panel's content
        currContent.toggleClass('accordion-content-active',!isPanelSelected)    
        if (isPanelSelected) { currContent.slideUp(); }  else { currContent.slideDown(); }

        return false; // Cancels the default action
    }
        
    });
      /* load accordion section 2 */   
    SFSI( "#accordion1" ).accordion({
    collapsible: true,
    active:false,
    heightStyle:"content",
    event: 'click',
    beforeActivate: function(event, ui) {
     // The accordion believes a panel is being opened
    if (ui.newHeader[0]) {
	var currHeader  = ui.newHeader;
	var currContent = currHeader.next('.ui-accordion-content');
     // The accordion believes a panel is being closed
    } else {
	var currHeader  = ui.oldHeader;
	var currContent = currHeader.next('.ui-accordion-content');
    }
     // Since we've changed the default behavior, this detects the actual status
    var isPanelSelected = currHeader.attr('aria-selected') == 'true';

     // Toggle the panel's header
    currHeader.toggleClass('ui-corner-all',isPanelSelected).toggleClass('accordion-header-active ui-state-active ui-corner-top',!isPanelSelected).attr('aria-selected',((!isPanelSelected).toString()));

    // Toggle the panel's icon
    currHeader.children('.ui-icon').toggleClass('ui-icon-triangle-1-e',isPanelSelected).toggleClass('ui-icon-triangle-1-s',!isPanelSelected);

     // Toggle the panel's content
    currContent.toggleClass('accordion-content-active',!isPanelSelected)    
    if (isPanelSelected) { currContent.slideUp(); }  else { currContent.slideDown(); }

    return false; // Cancels the default action
}
        
    });
	 SFSI('.closeSec').on('click',function(){
		//SFSI(this).parent().slideUp();
		
		var isPanelSelected=true;
		var currentArea=SFSI(this).closest('div.ui-accordion-content').prev('h3.ui-accordion-header').first();
		var currContent=SFSI(this).closest('div.ui-accordion-content').first();
		currentArea.toggleClass('ui-corner-all',isPanelSelected).toggleClass('accordion-header-active ui-state-active ui-corner-top',!isPanelSelected).attr('aria-selected',((!isPanelSelected).toString()));;
		currentArea.children('.ui-icon').toggleClass('ui-icon-triangle-1-e',isPanelSelected).toggleClass('ui-icon-triangle-1-s',!isPanelSelected);
		currContent.toggleClass('accordion-content-active',!isPanelSelected)    
               if (isPanelSelected) { currContent.slideUp(); }  else { currContent.slideDown(); }
		
		
		
         });	 
	
	
    SFSI(document).click(function(e)
    {
        var container = SFSI(".sfsi_outr_div");
	var sf_shuffle=SFSI('.sfsi_wDiv');
	var sf_adthis= SFSI('#at15s');
	
        if ((!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) &&   (!sf_shuffle.is(e.target) // if the target of the click isn't the container...
            && sf_shuffle.has(e.target).length === 0) &&   (!sf_adthis.is(e.target) // if the target of the click isn't the container...
            && sf_adthis.has(e.target).length === 0)) // ... nor a descendant of the container
        {
           
	    container.fadeOut();
	    
        }
    });
  
    
    SFSI('.sfsi_outr_div').find('.addthis_button').mousemove(function(e){
	var top =SFSI('.sfsi_outr_div').find('.addthis_button').offset().top+10;
	
	SFSI('#at15s').css({
	    'top': top+"px" ,
	    'left':SFSI('.sfsi_outr_div').find('.addthis_button').offset().left+"px"
	});
	    
	});
	
   
    
    SFSI('#sfsifontCloroPicker').ColorPicker({
	color: '#f80000',
        onBeforeShow: function () {
		$(this).ColorPickerSetColor(SFSI('#sfsi_popup_fontColor').val());
	},
	onShow: function (colpkr) {
		SFSI(colpkr).fadeIn(500);
		return false;
	},
	onHide: function (colpkr) {
		SFSI(colpkr).fadeOut(500);
                 sfsi_make_popBox();/* update pop-example div */
		return false;
	},
	onChange: function (hsb, hex, rgb) {
		SFSI('#sfsi_popup_fontColor').val('#'+hex);
                SFSI('#sfsifontCloroPicker').css('background','#'+hex);
                
                sfsi_make_popBox();/* update pop-example div */
	},
	onClick: function (hsb, hex, rgb) {
		SFSI('#sfsi_popup_fontColor').val('#'+hex);
                SFSI('#sfsifontCloroPicker').css('background','#'+hex);
                
                sfsi_make_popBox();/* update pop-example div */
	}
    });
    
     SFSI('#sfsiBackgroundColorPicker').ColorPicker({
	color: '#f80000',
         onBeforeShow: function () {
		$(this).ColorPickerSetColor(SFSI('#sfsi_popup_background_color').val());
	},
	onShow: function (colpkr) {
		SFSI(colpkr).fadeIn(500);
		return false;
	},
	onHide: function (colpkr) {
		SFSI(colpkr).fadeOut(500);
		return false;
	},
	onChange: function (hsb, hex, rgb) {
		SFSI('#sfsi_popup_background_color').val('#'+hex);
                SFSI('#sfsiBackgroundColorPicker').css('background','#'+hex);
                 sfsi_make_popBox();/* update pop-example div */
	},
	onClick: function (hsb, hex, rgb) {
		SFSI('#sfsi_popup_background_color').val('#'+hex);
                SFSI('#sfsiBackgroundColorPicker').css('background','#'+hex);
                 sfsi_make_popBox();/* update pop-example div */
	}
    });
    
     SFSI('#sfsiBorderColorPicker').ColorPicker({
	color: '#f80000',
         onBeforeShow: function () {
		$(this).ColorPickerSetColor(SFSI('#sfsi_popup_border_color').val());
	},
	onShow: function (colpkr) {
		SFSI(colpkr).fadeIn(500);
		return false;
	},
	onHide: function (colpkr) {
		SFSI(colpkr).fadeOut(500);
		return false;
	},
	onChange: function (hsb, hex, rgb) {
		SFSI('#sfsi_popup_border_color').val('#'+hex);
                SFSI('#sfsiBorderColorPicker').css('background','#'+hex);
                 sfsi_make_popBox();/* update pop-example div */
	},
	onClick: function (hsb, hex, rgb) {
		SFSI('#sfsi_popup_border_color').val('#'+hex);
                SFSI('#sfsiBorderColorPicker').css('background','#'+hex);
                 sfsi_make_popBox();/* update pop-example div */
	}
    });
    
   
    
    
    /* step 1 */
         SFSI('#sfsi_save1').on('click',function(){
             if(sfsi_update_step1())
	     {
		  sfsicollapse(this);
	     }
              
	      
         });
    
      /* step 2 */
         SFSI('#sfsi_save2').on('click',function(){
             if(sfsi_update_step2())
	     {
		 sfsicollapse(this);
	     }
            
         });
      /* step 3 */
         SFSI('#sfsi_save3').on('click',function(){
            if(sfsi_update_step3())
	     {
		  sfsicollapse(this);
	     }
              
         });    
    
      /* step 4 validation */
    
    /* make show display active  */
    SFSI('#sfsi_save4').on('click',function(){
              if(sfsi_update_step4())
	     {
		  sfsicollapse(this);
	     }                
        
    });
    
    /* */
    
     /* make size and shaping icons   */
    SFSI('#sfsi_save5').on('click',function(){
              if(sfsi_update_step5())
	     {
		  sfsicollapse(this);
	     }                 
        
    });
    
    /* make show icons on post pages active  */
    SFSI('#sfsi_save6').on('click',function(){
               if(sfsi_update_step6())
	     {
		  sfsicollapse(this);
	     }                
        
    });
    
     /* make show icons on post pages active  */
    SFSI('#sfsi_save7').on('click',function(){
               if(sfsi_update_step7())
	     {
		  sfsicollapse(this);
	     }                 
        
    });
   
    /* save all options */
    SFSI('#save_all_settings').on('click',function(){
	 //SFSI('.loader-img').show();
	 SFSI('#save_all_settings').text('Saving..');
         SFSI('.save_button >a').css('pointer-events', 'none'); 
              var error_flag=0;
	      sfsi_update_step1();
	      if(global_error==1)
	      {
		 showErrorSuc('error','Some Selection error in "Which icons do you want to show on your site?" tab.',8);
		 global_error=0;
		 return false;
	      }
	       sfsi_update_step2();
	      if(global_error==1)
	      {
		showErrorSuc('error','Some Selection error in "What do you want the icons to do?" tab.',8);
		global_error=0;
		return false;
	      }
	      sfsi_update_step3();
              if(global_error==1)
	      {
		
		showErrorSuc('error','Some Selection error in "What design & animation do you want to give your icons?" tab.',8);
		global_error=0;
		return false;
	      }
	     
	      sfsi_update_step4()
	      if(global_error==1)
	      {
		
		showErrorSuc('error','Some Selection error in "Do you want to display "counts" next to your icons?" tab.',8);
		global_error=0;
		return false;
	      }
	     sfsi_update_step5();
	     if(global_error==1)
	      {
		
		showErrorSuc('error','Some Selection error in "Any other wishes for your main icons?" tab.',8);
		global_error=0;
		return false;
	      }
	      sfsi_update_step6()
	      if(global_error==1)
	      {
		
		showErrorSuc('error','Some Selection error in "Do you want to display icons at the end of every post?" tab.',8);
		global_error=0;
		return false;
	      }
	      sfsi_update_step7()
	      if(global_error==1)
	      {
		showErrorSuc('error','Some Selection error in "Do you want to display a pop-up, asking people to subscribe?" tab.',8);
		global_error=0;
		return false;
	      }
	      if (global_error==0) {
		showErrorSuc('success','Saved! Now go to the <a href="widgets.php">widget</a> area and place the widget into your sidebar (if not done already)',8);
	      }
              
    
    });
    
    
    
    
     /* upload custom icons */
  
   SFSI('.fileUPInput').live('change', function() {
        
          beForeLoad(); 
        
       if(beforeIconSubmit(this))
	{
		
	 SFSI(".upload-overlay").css('pointer-events','none');
	SFSI("#customIconFrm").ajaxForm({
	    dataType: 'json',
	    success: afterIconSuccess,  // post-submit callback 
	    resetForm: true  
	}).submit();
	}
	
         
	        
     });
   
    
    /* SFSI popup */
    SFSI('.pop-up').on('click',function(){
        
         if(SFSI(this).attr('data-id')=="fbex-s2" || SFSI(this).attr('data-id')=="googlex-s2" || SFSI(this).attr('data-id')=="linkex-s2")
         {
         SFSI("."+SFSI(this).attr('data-id')).hide();
         SFSI("."+SFSI(this).attr('data-id')).css('opacity','1');
         SFSI("."+SFSI(this).attr('data-id')).css('z-index','1000');
         
         }
         SFSI("."+SFSI(this).attr('data-id')).show('slow');
    });
    
     SFSI('#close_popup').live('click',function(){
        
         SFSI('.read-overlay').hide('slow');

    });
   var flag=0;
    
    SFSI( '.icn_listing' ).on( "click",'.checkbox',function(){
       if (flag==1) {
	return false;
       }
       if (SFSI(this).attr('dynamic_ele')=="yes") {
	  checked=SFSI(this).parent().find('input:checkbox:first');
	  if (checked.is(":checked")) {
		  SFSI(checked).attr('checked',false);
	  }
	  else
	  {
		 SFSI(checked).attr('checked',true);
	  }
       }
      // console.log(SFSI(checked).attr('checked'));
        /* check for the dynamic custom icons */
        var span_ele=this;
        checked=SFSI(this).parent().find('input:checkbox:first');
        if(SFSI(checked).attr('isNew')=='yes')
        {
            if(SFSI(this).css('background-position')=='0px 0px')
            {
                    SFSI(checked).attr('checked',true);
                    SFSI(this).css('background-position','0px -36px'); 
            }
            else
            {
                
                    SFSI(checked).removeAttr('checked',true);
                    SFSI(this).css('background-position','0px 0px');
            }    
        }   
    /* check for the custom icons */
    var checked=SFSI(this).parent().find('input:checkbox:first');
       
         if(checked.is(":checked") && checked.attr('element-type')=='cusotm-icon')
         {
            
                SFSI('.fileUPInput').attr('name',"custom_icons[]"); 
                SFSI('.upload-overlay').show( "slow",function(){ flag=0;});
               SFSI('#upload_id').val(checked.attr('name'));
             
         }
         else if(!checked.is(":checked") && checked.attr('element-type')=='cusotm-icon')
         {
            if(!checked.attr('ele-type'))
            {    
            if(confirm('Are you sure want to delete this Icon..?? '))
             {
                 if(sfsi_delete_CusIcon(this,checked)=="suc")
		 {
                
                 checked.attr('checked',false);
                 SFSI(this).css('background-position','0px 0px');
		 flag=0;
 		  return false;
		  }
		   flag=0;
		  return false;
                 
             }
             else
             {
                checked.attr('checked',true);
                 SFSI(this).css('background-position','0px -36px');
		  flag=0;
                return false;
             }    
            }
            else
            {
                 SFSI(this).attr('checked',true);
                 SFSI(this).css('background-position','0px -36px');
		  flag=0;
                return false;
            }    
         } 
        //custom_iconUpload(this);
      
    });
    
    /* email deactivate actions */
    
    SFSI( '.icn_listing' ).on( "click",'.checkbox',function(){
        var span_ele=this;
        checked=SFSI(this).parent().find('input:checkbox:first');
         if(checked.attr('name')=='sfsi_email_display' && !checked.is(":checked"))
         {
            SFSI('.demail-1').show( "slow" );
         }
        
    });
    SFSI('#deac_email2').on('click',function(){
        SFSI('.demail-1').hide( "slow" );
        SFSI('.demail-2').show( "slow" );
        
    });
    SFSI('#deac_email3').on('click',function(){
        SFSI('.demail-2').hide("slow");
        SFSI('.demail-3').show("slow");
        
    });
     SFSI('.hideemailpop').on('click',function(){
        
        SFSI('input[name="sfsi_email_display"]').attr('checked',true);
        SFSI('input[name="sfsi_email_display"]').parent().find('span:first').css('background-position','0px -36px'); 
        SFSI('.demail-1').hide( "slow" ); 
        SFSI('.demail-2').hide("slow");
        SFSI('.demail-3').hide("slow");
        
    });
    SFSI('.hidePop').on('click',function(){
        SFSI('.demail-1').hide( "slow" ); 
        SFSI('.demail-2').hide("slow");
        SFSI('.demail-3').hide("slow");
        
    });
     SFSI('.activate_footer').on('click',function(){
	    SFSI(this).text('activating....');
         var data = { action:'activateFooter',
                
               }
         SFSI.ajax({
                url: ajax_object.ajax_url,
                type:'post',
                data: data,
                dataType:'json',
                success:function (res)
                {
                  
                    if(res.res=='success')
                    {
                       SFSI('.demail-1').hide( "slow"); 
                       SFSI('.demail-2').hide("slow");
                       SFSI('.demail-3').hide("slow");
			SFSI('.activate_footer').text('Ok, activate link');
                    }
                     
                    
                }
        
        });
        
    });
     SFSI('.sfsi_removeFooter').on('click',function(){
	SFSI(this).text('working....');
         var data = { action:'removeFooter',
                
               }
         SFSI.ajax({
                url: ajax_object.ajax_url,
                type:'post',
                data: data,
                dataType:'json',
                success:function (res)
                {
                  
                    if(res.res=='success')
                    {
                       SFSI('.sfsi_removeFooter').fadeOut( "slow"); 
		       SFSI('.sfsi_footerLnk').fadeOut( "slow"); 
                      
                    
                    }
                     
                    
                }
        
        });
        
    });
    /* change count section */
    
    SFSI('.radio').live('click',function(){
         var checked=SFSI(this).parent().find('input:radio:first');
         if(checked.attr('name')=='sfsi_display_counts')
         {
               sfsi_show_counts();
             
         }
        
    });
    
  
    
    
    SFSI('#close_Uploadpopup').on('click',closeUpload);
   function closeUpload (){
		SFSI('.uperror').html('');
		 afterLoad(); 
                var checked= SFSI('input[name="'+SFSI('#upload_id').val()+'"]');
                checked.removeAttr('checked');
                var span_ele=SFSI(checked).parent().find('span:first');
                SFSI(span_ele).css('background-position','0px 0px'); 
                SFSI('.upload-overlay').hide( "slow" ); return false;
            }
    /* change show on post section */
   
    
    SFSI('.radio').live('click',function(){
         var checked=SFSI(this).parent().find('input:radio:first');
         if(checked.attr('name')=='sfsi_show_Onposts')
         {
               sfsi_show_OnpostsDisplay();
             
         }
        
    });
    sfsi_show_OnpostsDisplay();
    
    /* load the saved depended sections */    
    sfsi_depened_sections();
    /* check count section display */
    sfsi_show_counts();
    sfsi_showPreviewCounts();
    
    
    
    /* make icons dragable */
    
     SFSI( ".share_icon_order" ).sortable({
          update: function(event, ui) {
                    SFSI(".share_icon_order li").each(function(n){
                    SFSI(this).attr("data-index",SFSI(this).index()+1);
                    });
                   
                },         
       revert: true,
       
       
});
  
    
/* show hide option  for counts screen */
 SFSI('.radio').live('click',function(){
         var checked=SFSI(this).parent().find('input:radio:first');
        
         if(checked.attr('name')=='sfsi_email_countsFrom')
         {
            SFSI('input[name="sfsi_email_countsDisplay"]').prop('checked',true);
            SFSI('input[name="sfsi_email_countsDisplay"]').parent().find('span.checkbox').attr('style','background-position:0px -36px;');
	    (SFSI("input[name='sfsi_email_countsFrom']:checked").val()=='manual') ? SFSI("input[name='sfsi_email_manualCounts']").slideDown() : SFSI("input[name='sfsi_email_manualCounts']").slideUp();
             
         }
         if(checked.attr('name')=='sfsi_facebook_countsFrom')
         {
            SFSI('input[name="sfsi_facebook_countsDisplay"]').prop('checked',true);
            SFSI('input[name="sfsi_facebook_countsDisplay"]').parent().find('span.checkbox').attr('style','background-position:0px -36px;');
	    if(SFSI("input[name='sfsi_facebook_countsFrom']:checked").val()=='manual') {  SFSI("input[name='sfsi_facebook_manualCounts']").slideDown(); /*SFSI("input[name='sfsi_facebook_PageLink']").slideUp(); */ } else {SFSI("input[name='sfsi_facebook_manualCounts']").slideUp(); /*SFSI("input[name='sfsi_facebook_PageLink']").slideDown(); */ }
             
         }
         if(checked.attr('name')=='sfsi_twitter_countsFrom')
         {
            SFSI('input[name="sfsi_twitter_countsDisplay"]').prop('checked',true);
            SFSI('input[name="sfsi_twitter_countsDisplay"]').parent().find('span.checkbox').attr('style','background-position:0px -36px;');
	    if(SFSI("input[name='sfsi_twitter_countsFrom']:checked").val()=='manual') {  SFSI("input[name='sfsi_twitter_manualCounts']").slideDown(); SFSI(".tw_follow_options").slideUp(); } else {SFSI("input[name='sfsi_twitter_manualCounts']").slideUp(); SFSI(".tw_follow_options").slideDown(); }
             
         }
         if(checked.attr('name')=='sfsi_google_countsFrom')
         {
            SFSI('input[name="sfsi_google_countsDisplay"]').prop('checked',true);
            SFSI('input[name="sfsi_google_countsDisplay"]').parent().find('span.checkbox').attr('style','background-position:0px -36px;');
	    if(SFSI("input[name='sfsi_google_countsFrom']:checked").val()=='manual')
	    {
		SFSI("input[name='sfsi_google_manualCounts']").slideDown(); SFSI(".google_option").slideUp();
	    }
	    if(SFSI("input[name='sfsi_google_countsFrom']:checked").val()=='likes')
	    {
		SFSI("input[name='sfsi_google_manualCounts']").slideUp(); SFSI(".google_option").slideUp();
	    }
	    if(SFSI("input[name='sfsi_google_countsFrom']:checked").val()=='follower') {
		SFSI(".google_option").slideDown(); SFSI("input[name='sfsi_google_manualCounts']").slideUp();
	   }
             
         }
          if(checked.attr('name')=='sfsi_linkedIn_countsFrom')
         {
            SFSI('input[name="sfsi_linkedIn_countsDisplay"]').prop('checked',true);
            SFSI('input[name="sfsi_linkedIn_countsDisplay"]').parent().find('span.checkbox').attr('style','background-position:0px -36px;');
	    if(SFSI("input[name='sfsi_linkedIn_countsFrom']:checked").val()=='manual') {  SFSI("input[name='sfsi_linkedIn_manualCounts']").slideDown(); SFSI(".linkedIn_options").slideUp(); } else {SFSI("input[name='sfsi_linkedIn_manualCounts']").slideUp(); SFSI(".linkedIn_options").slideDown(); }
             
         }
          if(checked.attr('name')=='sfsi_youtube_countsFrom')
         {
            SFSI('input[name="sfsi_youtube_countsDisplay"]').prop('checked',true);
            SFSI('input[name="sfsi_youtube_countsDisplay"]').parent().find('span.checkbox').attr('style','background-position:0px -36px;');
	    if(SFSI("input[name='sfsi_youtube_countsFrom']:checked").val()=='manual') {  SFSI("input[name='sfsi_youtube_manualCounts']").slideDown(); SFSI(".youtube_options").slideUp(); } else {SFSI("input[name='sfsi_youtube_manualCounts']").slideUp(); SFSI(".youtube_options").slideDown(); }
             
         }
          if(checked.attr('name')=='sfsi_pinterest_countsFrom')
         {
            SFSI('input[name="sfsi_pinterest_countsDisplay"]').prop('checked',true);
            SFSI('input[name="sfsi_pinterest_countsDisplay"]').parent().find('span.checkbox').attr('style','background-position:0px -36px;');
	    if(SFSI("input[name='sfsi_pinterest_countsFrom']:checked").val()=='manual') {  SFSI("input[name='sfsi_pinterest_manualCounts']").slideDown(); SFSI(".pin_options").slideUp(); } else {SFSI("input[name='sfsi_pinterest_manualCounts']").slideUp(); }
             
         }
	 if(checked.attr('name')=='sfsi_instagram_countsFrom')
         {
            SFSI('input[name="sfsi_instagram_countsDisplay"]').prop('checked',true);
            SFSI('input[name="sfsi_instagram_countsDisplay"]').parent().find('span.checkbox').attr('style','background-position:0px -36px;');
	    if(SFSI("input[name='sfsi_instagram_countsFrom']:checked").val()=='manual') {  SFSI("input[name='sfsi_instagram_manualCounts']").slideDown(); SFSI('.instagram_userLi').slideUp();  } else {SFSI("input[name='sfsi_instagram_manualCounts']").slideUp(); SFSI('.instagram_userLi').slideDown(); }
             
         }
         if(checked.attr('name')=='sfsi_shares_countsFrom')
         {
            SFSI('input[name="sfsi_shares_countsDisplay"]').prop('checked',true);
            SFSI('input[name="sfsi_shares_countsDisplay"]').parent().find('span.checkbox').attr('style','background-position:0px -36px;');
	    if(SFSI("input[name='sfsi_shares_countsFrom']:checked").val()=='manual') {  SFSI("input[name='sfsi_shares_manualCounts']").slideDown();  } else {SFSI("input[name='sfsi_shares_manualCounts']").slideUp();  }
             
         }
         
        
    });

    /* section 7 pop up div changes */
    sfsi_make_popBox();
    SFSI('input[name="sfsi_popup_text"] ,input[name="sfsi_popup_background_color"],input[name="sfsi_popup_border_color"],input[name="sfsi_popup_border_thickness"],input[name="sfsi_popup_fontSize"],input[name="sfsi_popup_fontColor"]').on('keyup',sfsi_make_popBox);
    SFSI('input[name="sfsi_popup_text"] ,input[name="sfsi_popup_background_color"],input[name="sfsi_popup_border_color"],input[name="sfsi_popup_border_thickness"],input[name="sfsi_popup_fontSize"],input[name="sfsi_popup_fontColor"]').on('focus',sfsi_make_popBox);
    SFSI('#sfsi_popup_font ,#sfsi_popup_fontStyle').on('change',sfsi_make_popBox);
    SFSI('.radio').live('click',function(){
         var checked=SFSI(this).parent().find('input:radio:first');
         if(checked.attr('name')=='sfsi_popup_border_shadow')
         {
                sfsi_make_popBox();
             
         }
        
    });
   
    /* show bubble div on widget hover */
    SFSI('img.sfsi_wicon').on('hover',function (event){
        //event.stopPropagation();
	var top_height=SFSI(this).offset().top;
	SFSI('div.sfsi_wicons').css('z-index','0');
		
	SFSI(this).parent().parent().parent().siblings('div.sfsi_wicons').find('.inerCnt').find('div.sfsi_tool_tip_2').hide();
	if (SFSI(this).parent().parent().parent().parent().siblings('li').length>0) {
		SFSI(this).parent().parent().parent().parent().siblings('li').find('div.sfsi_tool_tip_2').css('z-index','0');
		SFSI(this).parent().parent().parent().parent().siblings('li').find('div.sfsi_wicons').find('.inerCnt').find('div.sfsi_tool_tip_2').hide();
	}
	SFSI(this).parent().parent().parent().css('z-index','1000000');
	SFSI(this).parent().parent().css({'z-index':'999'});
	if(SFSI(this).attr('effect') && SFSI(this).attr('effect')=="fade_in")
	{
	    //SFSI(this).parent().parent('div.sfsi_wicons').css('opacity','1');
	    SFSI(this).parentsUntil('div').siblings('div.sfsi_tool_tip_2').css({opacity:1,'z-index' : 10});
	    SFSI(this).parent().css('opacity','1');  
	   
	}
	if(SFSI(this).attr('effect') && SFSI(this).attr('effect')=="scale")
	{
	    SFSI(this).parent().addClass('scale');
	    SFSI(this).parentsUntil('div').siblings('div.sfsi_tool_tip_2').css({opacity:1,'z-index' : 10}); 
	    SFSI(this).parent().css('opacity','1');  
	    //SFSI(this).parent().parent().find('.sfsi_tool_tip_2').addClass('scale-div');
	}
	if(SFSI(this).attr('effect') && SFSI(this).attr('effect')=="combo")
	{
	    SFSI(this).parent().addClass('scale');
	    SFSI(this).parent().css('opacity','1');  
	    SFSI(this).parentsUntil('div').siblings('div.sfsi_tool_tip_2').css({opacity:1,'z-index' : 10});  
	}
	if(top_height<250)
	{
	    SFSI(this).parentsUntil('div').siblings('div.sfsi_tool_tip_2').addClass('sfsi_plc_btm');	
	    SFSI(this).parentsUntil('div').siblings('div.sfsi_tool_tip_2').find('span.bot_arow').addClass('top_big_arow');
	    SFSI(this).parentsUntil('div').siblings('div.sfsi_tool_tip_2').css({opacity:1,'z-index' : 10});   
	    SFSI(this).parentsUntil('div').siblings('div.sfsi_tool_tip_2').show();
	}	
	else
	{
	    SFSI(this).parentsUntil('div').siblings('div.sfsi_tool_tip_2').find('span.bot_arow').removeClass('top_big_arow');
	    SFSI(this).parentsUntil('div').siblings('div.sfsi_tool_tip_2').removeClass('sfsi_plc_btm');
	    SFSI(this).parentsUntil('div').siblings('div.sfsi_tool_tip_2').css({opacity:1,'z-index' : 10});  
	    SFSI(this).parentsUntil('div').siblings('div.sfsi_tool_tip_2').show();
	}
    });
    SFSI('div.sfsi_wicons').on('mouseleave',function (){
	
        if(SFSI(this).children('div.inerCnt').children('a.sficn').attr('effect') && SFSI(this).children('div.inerCnt').children('a.sficn').attr('effect')=="fade_in")
        {
             SFSI(this).children('div.inerCnt').find('a.sficn').css('opacity','0.6');   
        }
        
        if(SFSI(this).children('div.inerCnt').children('a.sficn').attr('effect') && SFSI(this).children('div.inerCnt').children('a.sficn').attr('effect')=="scale")
        {
            SFSI(this).children('div.inerCnt').find('a.sficn').removeClass('scale');
        } 
        if(SFSI(this).children('div.inerCnt').children('a.sficn').attr('effect') && SFSI(this).children('div.inerCnt').children('a.sficn').attr('effect')=="combo")
        {
            SFSI(this).children('div.inerCnt').find('a.sficn').css('opacity','0.6'); 
            SFSI(this).children('div.inerCnt').find('a.sficn').removeClass('scale');
        }
	if ( SFSI(this).children('div.inerCnt').find('a.sficn').attr('id')=="google") {
		SFSI('body').on('click',function (){ SFSI(this).children('.inerCnt').find('div.sfsi_tool_tip_2').hide();});
	}
	else
	{
	 SFSI(this).css({'z-index':'0'});   
         SFSI(this).children('.inerCnt').find('div.sfsi_tool_tip_2').hide();
	}
    });
    //SFSI('div.sfsi_wDiv ').on('mouseleave',function(){ SFSI('.inerCnt').find('div.sfsi_tool_tip_2').hide();  });
  SFSI('body').on('click',function (){ SFSI('.inerCnt').find('div.sfsi_tool_tip_2').hide();});
  /* admin hover icons */
  
  SFSI('.adminTooltip >a').on('hover',function (event){
        //event.stopPropagation();
        var top_height=SFSI(this).offset().top;
		
		 SFSI(this).parent('div').find('div.sfsi_tool_tip_2_inr').css('opacity','1');
                 SFSI(this).parent('div').find('div.sfsi_tool_tip_2_inr').show();
		 
    });
  SFSI('.adminTooltip').on('mouseleave',function (event){
        //event.stopPropagation();
        	if(SFSI('.gpls_tool_bdr').css('display') != 'none' && SFSI('.gpls_tool_bdr').css('opacity') != 0)
		{
			 SFSI('.pop_up_box ').on('click',function (event){
				SFSI(this).parent('div').find('div.sfsi_tool_tip_2_inr').css('opacity','0');
			      SFSI(this).parent('div').find('div.sfsi_tool_tip_2_inr').hide();
				
				}); 
		}
		else
		{
		 SFSI(this).parent('div').find('div.sfsi_tool_tip_2_inr').css('opacity','0');
                 SFSI(this).parent('div').find('div.sfsi_tool_tip_2_inr').hide();
		}
    });
   
   /* shows read more text */
   SFSI('.expand-area').on('click',function(){
    
      if(SFSI(this).text()=="Read more")
      {    
         
      SFSI(this).siblings("p").children('label').fadeIn('slow');
       SFSI(this).text('Collapse');
      }
      else
      {
          SFSI(this).siblings("p").children('label').fadeOut('slow');
          SFSI(this).text('Read more');
      }    
  });
  
  /* change floating and stick sections */
   SFSI('.radio').live('click',function(){
         var checked=SFSI(this).parent().find('input:radio:first');

   if(checked.attr('name')=="sfsi_icons_float" && checked.val()=="yes")
   {    
     
    SFSI('.float_options').slideDown('slow');       
    SFSI('input[name="sfsi_icons_stick"][value="no"]').attr('checked',true);
    SFSI('input[name="sfsi_icons_stick"][value="yes"]').removeAttr('checked');
    SFSI('input[name="sfsi_icons_stick"][value="no"]').parent().find('span').attr('style','background-position:0px -41px;');
    SFSI('input[name="sfsi_icons_stick"][value="yes"]').parent().find('span').attr('style','background-position:0px -0px;');
   }
   
   if((checked.attr('name')=="sfsi_icons_stick" && checked.val()=="yes") || (checked.attr('name')=="sfsi_icons_float" && checked.val()=="no"))
   {
     SFSI('.float_options').slideUp('slow');    
    SFSI('input[name="sfsi_icons_float"][value="no"]').prop('checked',true);
    SFSI('input[name="sfsi_icons_float"][value="yes"]').prop('checked',false);
    SFSI('input[name="sfsi_icons_float"][value="no"]').parent().find('span.radio').attr('style','background-position:0px -41px;');
    SFSI('input[name="sfsi_icons_float"][value="yes"]').parent().find('span.radio').attr('style','background-position:0px -0px;');
       
   }
   
  });
    if(SFSI('.sfsi_wDiv').length > 0)
    {
	
	setTimeout(function(){
	
		var height= parseInt(SFSI('.sfsi_wDiv').height())+15+"px";
		SFSI('.sfsi_holders').each(function(n) {	
	    SFSI(this).css('height', height);
	});
       },200);
    }
  /* chnage shuffle icons */
 
  SFSI('.checkbox').live('click',function(){
         var checked=SFSI(this).parent().find('input:checkbox:first');
	
   if((checked.attr('name')=="sfsi_shuffle_Firstload" && checked.attr('checked')=="checked") || (checked.attr('name')=="sfsi_shuffle_interval" && checked.attr('checked')=="checked")  )
   {    
   
     SFSI('input[name="sfsi_shuffle_icons"]').parent().find('span').css('background-position','0px -36px');
    SFSI('input[name="sfsi_shuffle_icons"]').attr('checked','checked');       
   
   }
   if((checked.attr('name')=="sfsi_shuffle_icons" && checked.attr('checked')!="checked"))
   {    
     SFSI('input[name="sfsi_shuffle_Firstload"]').removeAttr('checked'); 
     SFSI('input[name="sfsi_shuffle_Firstload"]').parent().find('span').css('background-position','0px 0px');
     SFSI('input[name="sfsi_shuffle_interval"]').removeAttr('checked');        
     SFSI('input[name="sfsi_shuffle_interval"]').parent().find('span').css('background-position','0px 0px');
   }     
   
    });
  
   

}); // end of ready function 


/* update custom icons index in section 1 */

function sfsi_update_index()
{
   
    var cnt=1; 
     
    SFSI("ul.icn_listing li.custom").each(function(n){      
        /* check for valid li element */      
                    SFSI(this).children("span.custom-txt").html("Custom "+cnt);
                    
                    cnt++;
            
    });
    cntt=1;
    SFSI("div.cm_lnk").each(function(n){      
        /* check for valid li element */ 
                 
                    SFSI(this).find('h2.custom').find('span.sfsiCtxt').html("Custom "+cntt+":");
                    cntt++;
            
    });
     cntt=1;
    SFSI("div.custom_m").find('div.custom_section').each(function(n){      
        /* check for valid li element */ 
                 
                    SFSI(this).find('label').html("Custom "+cntt+":");
                    cntt++;
            
    });
    
   
   
     
    
}

function sfsicollapse (ele)
	{
		var isPanelSelected=true;
		var currentArea=SFSI(ele).closest('div.ui-accordion-content').prev('h3.ui-accordion-header');
		var currContent=SFSI(ele).closest('div.ui-accordion-content').first();
		currentArea.toggleClass('ui-corner-all',isPanelSelected).toggleClass('accordion-header-active ui-state-active ui-corner-top',!isPanelSelected).attr('aria-selected',((!isPanelSelected).toString()));;
		currentArea.children('.ui-icon').toggleClass('ui-icon-triangle-1-e',isPanelSelected).toggleClass('ui-icon-triangle-1-s',!isPanelSelected);
		currContent.toggleClass('accordion-content-active',!isPanelSelected)    
               if (isPanelSelected) { currContent.slideUp(); }  else { currContent.slideDown(); }
	}


/* delete custom uploaded icons */
function sfsi_delete_CusIcon(ele,ele_check)
{
    
    
   
     beForeLoad(); // hide click button to prevent double click and show loader image
    var data = { action:'deleteIcons',
                 icon_name       : ele_check.attr('name')
               }
    
    SFSI.ajax({
                url: ajax_object.ajax_url,
                type:'post',
                data: data,
                dataType:'json',
                success:function (res)
                {
                  
                    if(res.res=='success')
                    {
                       //sfsi_update_step1();// update all options 
                       showErrorSuc('success','Saved !',1);
                       var new_ele=res.last_index+1;
                        SFSI('#total_cusotm_icons').val(res.total_up);
                        SFSI(ele).closest('.custom').remove();
                        SFSI('li.custom:last').addClass('bdr_btm_non');
                        //alert(ele_check.attr('name'));
                        SFSI('.custom-links').find('div.'+ele_check.attr('name')).remove();
                        SFSI('.custom_m').find('div.'+ele_check.attr('name')).remove();
                         SFSI('.share_icon_order').children('li.'+ele_check.attr('name')).remove();
                         SFSI('ul.sfsi_sample_icons').children('li.'+ele_check.attr('name')).remove();
                        var new_total=res.total_up+1;
                        if(res.total_up==4)
                        {
                            SFSI('.icn_listing').append('<li id="c'+new_ele+'" class="custom bdr_btm_non"><div class="radio_section tb_4_ck"><span class="checkbox" dynamic_ele="yes" style="background-position: 0px 0px;"></span><input name="sfsiICON_'+new_ele+'_display"  type="checkbox" value="yes" class="styled" style="display:none;" element-type="cusotm-icon" isNew="yes" /></div> <span class="custom-img"><img src="'+SFSI('#plugin_url').val()+'images/custom.png" id="CImg_'+new_ele+'"  /> </span> <span class="custom custom-txt">Custom'+new_total+' </span> <div class="right_info"> <p><span>It depends:</span> Upload a custom icon if you have other accounts/websites you want to link to.</p><div class="inputWrapper"></div></li>');
                        }    
                    
                    }
                    else
                    {
                        showErrorSuc('error','Unkown error , please try again',1);
                    }    
                      sfsi_update_index();
		      update_Sec5Iconorder();   
		      sfsi_update_step1();
		      sfsi_update_step5();
		      afterLoad();
		      return "suc";
                }
        
        });
    
  
    
}
/* update all icons order on screen 5 */
function update_Sec5Iconorder()
{
             SFSI("ul.share_icon_order").children('li').each(function(n){
                        SFSI(this).attr("data-index",SFSI(this).index()+1);
                        });
}
/* depened sections function */

function sfsi_section_Display(section_class,action)
{
    if(action=='hide')
        {
            SFSI("."+section_class+" :input").prop("disabled", true);
            SFSI("."+section_class+" :button").prop("disabled", true);
            SFSI("."+section_class).hide();
        }
        else
        {
            SFSI("."+section_class+" :input").removeAttr("disabled", true);
            SFSI("."+section_class+" :button").removeAttr("disabled", true);
            SFSI("."+section_class).show();
        }
    
}
/* check depended  sections */

function sfsi_depened_sections()
{
    /* switch icons */
    if(SFSI("input[name='sfsi_rss_icons']:checked").val()=="sfsi")
    {
         for(i=0;i<16;i++) {
	 var cn=i+1;
	 var height=i*74;
	 SFSI('.row_'+cn+'_2').css('background-position',"-588px -"+height+"px") ;	//code
	 
	 }
	
	 var src=SFSI('.icon_img').attr('src');
         var new_src=src.replace('email.png','sf_arow_icn.png');
         SFSI('.icon_img').attr('src',new_src);
    }
    else
    {
         SFSI('.row_1_2').css('background-position',"-58px 0");
	 for(i=0;i<16;i++) {
	 var cn=i+1;
	 var height=i*74;
	 SFSI('.row_'+cn+'_2').css('background-position',"-58px -"+height+"px") ;	//code
	 
	 }
         var src=SFSI('.icon_img').attr('src');
         if(src)
         {     
         var new_src=src.replace('sf_arow_icn.png','email.png');
         SFSI('.icon_img').attr('src',new_src);
        }
    }    
        
    (!SFSI("input[name='sfsi_rss_display']").prop('checked')) ? sfsi_section_Display('rss_section','hide'): sfsi_section_Display('rss_section','show');       
    (!SFSI("input[name='sfsi_email_display']").prop('checked')) ? sfsi_section_Display('email_section','hide'): sfsi_section_Display('email_section','show');       
    (!SFSI("input[name='sfsi_facebook_display']").prop('checked')) ? sfsi_section_Display('facebook_section','hide'): sfsi_section_Display('facebook_section','show'); 
    (!SFSI("input[name='sfsi_twitter_display']").prop('checked')) ? sfsi_section_Display('twitter_section','hide'): sfsi_section_Display('twitter_section','show'); 
    (!SFSI("input[name='sfsi_google_display']").prop('checked')) ? sfsi_section_Display('google_section','hide'): sfsi_section_Display('google_section','show'); 
    (!SFSI("input[name='sfsi_share_display']").prop('checked')) ? sfsi_section_Display('share_section','hide'): sfsi_section_Display('share_section','show'); 
    (!SFSI("input[name='sfsi_youtube_display']").prop('checked')) ? sfsi_section_Display('youtube_section','hide'): sfsi_section_Display('youtube_section','show'); 
    (!SFSI("input[name='sfsi_pinterest_display']").prop('checked')) ? sfsi_section_Display('pinterest_section','hide'): sfsi_section_Display('pinterest_section','show');
    (!SFSI("input[name='sfsi_instagram_display']").prop('checked')) ? sfsi_section_Display('instagram_section','hide'): sfsi_section_Display('instagram_section','show'); 
    (!SFSI("input[name='sfsi_linkedin_display']").prop('checked')) ? sfsi_section_Display('linkedin_section','hide'): sfsi_section_Display('linkedin_section','show'); 
    (!SFSI("input[element-type='cusotm-icon']").prop('checked')) ? sfsi_section_Display('custom_section','hide'): sfsi_section_Display('custom_section','show'); 
}

function CustomIConSectionsUpdate(ele)
{
    /* section 2 updates */
    
    sfsi_section_Display('counter'.ele,show);
    
}


function sfsi_update_step1()
 {  global_error=0;
    
   beForeLoad();  // hide click button to prevent double click and show loader image
    sfsi_depened_sections()// prepair remaining section 
   var return_value=false;
    
    var sfsi_rss_display        =SFSI("input[name='sfsi_rss_display']:checked").val();
    var sfsi_email_display      =SFSI("input[name='sfsi_email_display']:checked").val();
    var sfsi_facebook_display   =SFSI("input[name='sfsi_facebook_display']:checked").val();
    var sfsi_twitter_display    =SFSI("input[name='sfsi_twitter_display']:checked").val();
    var sfsi_google_display     =SFSI("input[name='sfsi_google_display']:checked").val();
    var sfsi_share_display      =SFSI("input[name='sfsi_share_display']:checked").val();
    var sfsi_youtube_display    =SFSI("input[name='sfsi_youtube_display']:checked").val();
    var sfsi_pinterest_display  =SFSI("input[name='sfsi_pinterest_display']:checked").val();
    var sfsi_linkedin_display   =SFSI("input[name='sfsi_linkedin_display']:checked").val();
    var sfsi_instagram_display   =SFSI("input[name='sfsi_instagram_display']:checked").val();
      
    var sfsi_custom1_display    =SFSI("input[name='sfsi_custom1_display']:checked").val();
    var sfsi_custom2_display    =SFSI("input[name='sfsi_custom2_display']:checked").val();
    var sfsi_custom3_display    =SFSI("input[name='sfsi_custom3_display']:checked").val();
    var sfsi_custom4_display    =SFSI("input[name='sfsi_custom4_display']:checked").val();
    var sfsi_custom5_display    =SFSI("input[name='sfsi_custom5_display']:checked").val();
   
   /* validate RSS and Email Icons
    if(!sfsi_rss_display)
    {
         showErrorSuc('error','Error: RSS icon is mandatory',1);
       
        return false;
    } */
    
    var data = { action:'updateSrcn1',
                 sfsi_rss_display       : sfsi_rss_display,
                 sfsi_email_display     : sfsi_email_display,
                 sfsi_facebook_display  : sfsi_facebook_display,
                 sfsi_twitter_display   : sfsi_twitter_display,
                 sfsi_google_display    : sfsi_google_display,
                 sfsi_share_display     : sfsi_share_display,
                 sfsi_youtube_display   : sfsi_youtube_display,
                 sfsi_pinterest_display : sfsi_pinterest_display,
                 sfsi_linkedin_display  : sfsi_linkedin_display,
		 sfsi_instagram_display : sfsi_instagram_display,
                 sfsi_custom1_display   : sfsi_custom1_display,
                 sfsi_custom2_display   : sfsi_custom2_display,
                 sfsi_custom3_display   : sfsi_custom3_display,
                 sfsi_custom4_display   : sfsi_custom4_display,
                 sfsi_custom5_display   : sfsi_custom5_display,
               }
      
    SFSI.ajax({
                url: ajax_object.ajax_url,
                type:'post',
                data: data,
		async: true,
                dataType:'json',
                success:function (res)
                {
                    if(res=='success')
                    {
                       showErrorSuc('success','Saved !',1);
		       sfsicollapse('#sfsi_save1');
		       sfsi_make_popBox();
		    
                    }
                    else
                    {
                        global_error=1;
			showErrorSuc('error','Unkown error , please try again',1);
			return_value= false;
                    }    
		    afterLoad();
		   
                }
		
        
        });


}

function sfsi_update_step2()
 {
        /* validate values */
   
     var isValid= sfsi_validationStep2();
     if(!isValid)
     {
         global_error=1;
	 return false;
     }
      
     beForeLoad(); // hide click button to prevent double click and show loader image    
    var sfsi_rss_url= (SFSI("input[name='sfsi_rss_url']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_rss_url']").val();
    var sfsi_rss_icons= (SFSI("input[name='sfsi_rss_icons']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_rss_icons']:checked").val();
    var sfsi_facebookPage_option=(SFSI("input[name='sfsi_facebookPage_option']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_facebookPage_option']:checked").val();
    var sfsi_facebookLike_option=(SFSI("input[name='sfsi_facebookLike_option']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_facebookLike_option']:checked").val();
    var sfsi_facebookShare_option=(SFSI("input[name='sfsi_facebookShare_option']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_facebookShare_option']:checked").val();
    var sfsi_facebookPage_url= SFSI("input[name='sfsi_facebookPage_url']").val();
   
    var sfsi_twitter_followme=(SFSI("input[name='sfsi_twitter_followme']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_twitter_followme']:checked").val();
    var sfsi_twitter_followUserName=(SFSI("input[name='sfsi_twitter_followUserName']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_twitter_followUserName']").val();
    var sfsi_twitter_aboutPage=(SFSI("input[name='sfsi_twitter_aboutPage']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_twitter_aboutPage']:checked").val();
    var sfsi_twitter_aboutPageText= SFSI("textarea[name='sfsi_twitter_aboutPageText']").val();
    
    var sfsi_google_page=(SFSI("input[name='sfsi_google_page']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_google_page']:checked").val();
    var sfsi_googleLike_option=(SFSI("input[name='sfsi_googleLike_option']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_googleLike_option']:checked").val();
    var sfsi_google_pageURL= SFSI("input[name='sfsi_google_pageURL']").val();
    var sfsi_googleShare_option=(SFSI("input[name='sfsi_googleShare_option']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_googleShare_option']:checked").val();
   
    var sfsi_youtube_page=(SFSI("input[name='sfsi_youtube_page']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_youtube_page']:checked").val();
    var sfsi_youtube_pageUrl=(SFSI("input[name='sfsi_youtube_pageUrl']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_youtube_pageUrl']").val();
    var sfsi_youtube_follow=(SFSI("input[name='sfsi_youtube_follow']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_youtube_follow']:checked").val();
    var sfsi_ytube_user= SFSI("input[name='sfsi_ytube_user']").val();
   
    var sfsi_pinterest_page=(SFSI("input[name='sfsi_pinterest_page']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_pinterest_page']:checked").val();
    var sfsi_pinterest_pageUrl=(SFSI("input[name='sfsi_pinterest_pageUrl']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_pinterest_pageUrl']").val();
    var sfsi_pinterest_pingBlog=(SFSI("input[name='sfsi_pinterest_pingBlog']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_pinterest_pingBlog']:checked").val();
    
    var sfsi_instagram_pageUrl=(SFSI("input[name='sfsi_instagram_pageUrl']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_instagram_pageUrl']").val();
    
    var sfsi_linkedin_page=(SFSI("input[name='sfsi_linkedin_page']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_linkedin_page']:checked").val();
    var sfsi_linkedin_pageURL=(SFSI("input[name='sfsi_linkedin_pageURL']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_linkedin_pageURL']").val();
    var sfsi_linkedin_follow=(SFSI("input[name='sfsi_linkedin_follow']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_linkedin_follow']:checked").val();
    var sfsi_linkedin_followCompany= SFSI("input[name='sfsi_linkedin_followCompany']").val();
    
    var sfsi_linkedin_SharePage=(SFSI("input[name='sfsi_linkedin_SharePage']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_linkedin_SharePage']:checked").val();
    var sfsi_linkedin_recommendBusines= SFSI("input[name='sfsi_linkedin_recommendBusines']:checked").val();
    var sfsi_linkedin_recommendProductId= SFSI("input[name='sfsi_linkedin_recommendProductId']").val();
    var sfsi_linkedin_recommendCompany= SFSI("input[name='sfsi_linkedin_recommendCompany']").val();
    /* get custom links data */
    
    var sfsi_custom_links={};
    SFSI("input[name='sfsi_CustomIcon_links[]']").each(function(){ sfsi_custom_links[SFSI(this).attr('file-id')] =  this.value;});
    
    var data = { action:'updateSrcn2',
                 sfsi_rss_url                   : sfsi_rss_url,
                 sfsi_rss_icons                 : sfsi_rss_icons,
                 sfsi_facebookPage_option       : sfsi_facebookPage_option,
                 sfsi_facebookLike_option       : sfsi_facebookLike_option,
                 sfsi_facebookShare_option      : sfsi_facebookShare_option,
                 sfsi_facebookPage_url          : sfsi_facebookPage_url,
                 sfsi_twitter_followme          : sfsi_twitter_followme,
                 sfsi_twitter_followUserName    : sfsi_twitter_followUserName,
                 sfsi_twitter_aboutPage         : sfsi_twitter_aboutPage,
                 sfsi_twitter_aboutPageText     : sfsi_twitter_aboutPageText,
                 sfsi_google_page               : sfsi_google_page,
                 sfsi_googleLike_option         : sfsi_googleLike_option,
                 sfsi_google_pageURL            : sfsi_google_pageURL,
                 sfsi_googleShare_option        : sfsi_googleShare_option,
                 sfsi_youtube_page              : sfsi_youtube_page,
                 sfsi_youtube_pageUrl           : sfsi_youtube_pageUrl,
                 sfsi_youtube_follow            : sfsi_youtube_follow,
                 sfsi_ytube_user                : sfsi_ytube_user,
                 sfsi_pinterest_page            : sfsi_pinterest_page,
                 sfsi_pinterest_pageUrl         : sfsi_pinterest_pageUrl,
		 sfsi_instagram_pageUrl		: sfsi_instagram_pageUrl,
                 sfsi_pinterest_pingBlog        : sfsi_pinterest_pingBlog,
                 sfsi_linkedin_page             : sfsi_linkedin_page,  
                 sfsi_linkedin_pageURL          : sfsi_linkedin_pageURL,
                 sfsi_linkedin_follow           : sfsi_linkedin_follow,
                 sfsi_linkedin_followCompany    : sfsi_linkedin_followCompany,
                 sfsi_linkedin_SharePage        : sfsi_linkedin_SharePage,
                 sfsi_linkedin_recommendBusines : sfsi_linkedin_recommendBusines,
		 sfsi_linkedin_recommendCompany : sfsi_linkedin_recommendCompany,
                 sfsi_linkedin_recommendProductId: sfsi_linkedin_recommendProductId,
                 sfsi_custom_links               : sfsi_custom_links
                
               }
        
    SFSI.ajax({
                url: ajax_object.ajax_url,
                type:'post',
                data: data,
		async: true,
                dataType:'json',
                success:function (res)
                {
                    if(res=='success')
                    {
                        //SFSI("input[name='sfsi_facebook_PageLink']").val(sfsi_facebookPage_url);
                      showErrorSuc('success','Saved !',2);
		        sfsicollapse('#sfsi_save2');
		   
                        sfsi_depened_sections();
                    }else
                    {
                        global_error=1;
			showErrorSuc('error','Unkown error , please try again',2);
			return_value=false;
                    }    
                     
                      afterLoad();
                }
        
        });
       
         
}

function sfsi_update_step3()
 {
    /* validate the required  options */
    
    var isValid= sfsi_validationStep3();
     if(!isValid)
     {
         global_error=1;
	 return false;
     } 
    beForeLoad(); // hide click button to prevent double click and show loader image
    var sfsi_actvite_theme                  =SFSI("input[name='sfsi_actvite_theme']:checked").val();
    var sfsi_mouseOver                      =SFSI("input[name='sfsi_mouseOver']:checked").val();
    var sfsi_shuffle_icons                  =SFSI("input[name='sfsi_shuffle_icons']:checked").val();
    var sfsi_shuffle_Firstload              =SFSI("input[name='sfsi_shuffle_Firstload']:checked").val();
    var sfsi_mouseOver_effect               =SFSI("#sfsi_mouseOver_effect option:selected").val();
  
    var sfsi_shuffle_interval               =SFSI("input[name='sfsi_shuffle_interval']:checked").val();
    var sfsi_shuffle_intervalTime           =SFSI("input[name='sfsi_shuffle_intervalTime']").val();
    var sfsi_specialIcon_animation          =SFSI("input[name='sfsi_specialIcon_animation']:checked").val(); 
    var sfsi_specialIcon_MouseOver          =SFSI("input[name='sfsi_specialIcon_MouseOver']:checked").val();
    var sfsi_specialIcon_Firstload          =SFSI("input[name='sfsi_specialIcon_Firstload']:checked").val();
    var sfsi_specialIcon_Firstload_Icons    =SFSI("#sfsi_specialIcon_Firstload_Icons option:selected").val();
    var sfsi_specialIcon_interval           =SFSI("input[name='sfsi_specialIcon_interval']:checked").val();
    var sfsi_specialIcon_intervalTime       =SFSI("input[name='sfsi_specialIcon_intervalTime']").val();
    var sfsi_specialIcon_intervalIcons      =SFSI("#sfsi_specialIcon_intervalIcons option:selected").val();
    
    var data = { action:'updateSrcn3',
                 sfsi_actvite_theme                 : sfsi_actvite_theme,
                 sfsi_mouseOver                     : sfsi_mouseOver,
                 sfsi_shuffle_icons                 : sfsi_shuffle_icons,
                 sfsi_shuffle_Firstload             : sfsi_shuffle_Firstload,
                 sfsi_mouseOver_effect              : sfsi_mouseOver_effect,
                 sfsi_shuffle_interval              : sfsi_shuffle_interval,
                 sfsi_shuffle_intervalTime          : sfsi_shuffle_intervalTime,
                 sfsi_specialIcon_animation         :sfsi_specialIcon_animation,
                 sfsi_specialIcon_MouseOver         : sfsi_specialIcon_MouseOver,
                 sfsi_specialIcon_Firstload         : sfsi_specialIcon_Firstload,
                 sfsi_specialIcon_Firstload_Icons   : sfsi_specialIcon_Firstload_Icons,
                 sfsi_specialIcon_interval          : sfsi_specialIcon_interval,
                 sfsi_specialIcon_intervalTime      :sfsi_specialIcon_intervalTime,
                 sfsi_specialIcon_intervalIcons     :sfsi_specialIcon_intervalIcons
               }
    
    SFSI.ajax({
                url: ajax_object.ajax_url,
                type:'post',
                data: data,
		async: true,
                dataType:'json',
                success:function (res)
                {
                    if(res=='success')
                    {
                       showErrorSuc('success','Saved !',3);
		       sfsicollapse('#sfsi_save3');
		    
                    }
                    else
                    {
                        showErrorSuc('error','Unkown error , please try again',3);
			return_value=false;
                    }    
                    afterLoad();
                }
        
        });

}

/* show hide counts section */
function sfsi_show_counts()
{
    if(SFSI("input[name='sfsi_display_counts']:checked").val()=='yes')
    {
    SFSI('.count_sections').slideDown();
    
    //SFSI('.sfsi_Cdisplay').show();
    sfsi_showPreviewCounts();
    }
    else
    {
    SFSI('.count_sections').slideUp();
    // SFSI('.sfsi_Cdisplay').hide();
     sfsi_showPreviewCounts();
    }	
}

function sfsi_showPreviewCounts()
{
	
	var all_show=0;
	if(SFSI("input[name='sfsi_rss_countsDisplay']").prop('checked')==true) { SFSI('#sfsi_rss_countsDisplay').css('opacity',1); all_show=1 } else { SFSI('#sfsi_rss_countsDisplay').css('opacity',0); }
	if(SFSI("input[name='sfsi_email_countsDisplay']").prop('checked')==true){ 	SFSI('#sfsi_email_countsDisplay').css('opacity',1); all_show=1 ;	}else {	SFSI('#sfsi_email_countsDisplay').css('opacity',0); }
	if(SFSI("input[name='sfsi_facebook_countsDisplay']").prop('checked')==true){ 	SFSI('#sfsi_facebook_countsDisplay').css('opacity',1); all_show=1 }else {SFSI('#sfsi_facebook_countsDisplay').css('opacity',0);}
	if(SFSI("input[name='sfsi_twitter_countsDisplay']").prop('checked')==true){ 	SFSI('#sfsi_twitter_countsDisplay').css('opacity',1); all_show=1 }else { SFSI('#sfsi_twitter_countsDisplay').css('opacity',0);}
	if(SFSI("input[name='sfsi_google_countsDisplay']").prop('checked')==true){ 	SFSI('#sfsi_google_countsDisplay').css('opacity',1); all_show=1; }else { SFSI('#sfsi_google_countsDisplay').css('opacity',0);}
	if(SFSI("input[name='sfsi_linkedIn_countsDisplay']").prop('checked')==true){ 	SFSI('#sfsi_linkedIn_countsDisplay').css('opacity',1); all_show=1}else { SFSI('#sfsi_linkedIn_countsDisplay').css('opacity',0);}
	if(SFSI("input[name='sfsi_youtube_countsDisplay']").prop('checked')==true){ 	SFSI('#sfsi_youtube_countsDisplay').css('opacity',1); all_show=1 }else { SFSI('#sfsi_youtube_countsDisplay').css('opacity',0);}
	if(SFSI("input[name='sfsi_pinterest_countsDisplay']").prop('checked')==true){ 	SFSI('#sfsi_pinterest_countsDisplay').css('opacity',1); all_show=1}else {SFSI('#sfsi_pinterest_countsDisplay').css('opacity',0);}
	if(SFSI("input[name='sfsi_shares_countsDisplay']").prop('checked')==true){ 	SFSI('#sfsi_shares_countsDisplay').css('opacity',1); all_show=1 	}else { SFSI('#sfsi_shares_countsDisplay').css('opacity',0);}
	if(SFSI("input[name='sfsi_instagram_countsDisplay']").prop('checked')==true){ 	SFSI('#sfsi_instagram_countsDisplay').css('opacity',1); all_show=1 	}else { SFSI('#sfsi_instagram_countsDisplay').css('opacity',0);}
	if (all_show==0 || SFSI("input[name='sfsi_display_counts']:checked").val()=='no') {
		 SFSI('.sfsi_Cdisplay').hide();
		  
	}
	else {
		 SFSI('.sfsi_Cdisplay').show();
		  
	}
	
}

/* show hide on post settings section */
function sfsi_show_OnpostsDisplay()
{
    (SFSI("input[name='sfsi_show_Onposts']:checked").val()=='yes') ? SFSI('.PostsSettings_section').slideDown() : SFSI('.PostsSettings_section').slideUp();
}


function sfsi_update_step4()
 {
    /* validate the required  options */
     var return_value=false;
    var isValid= sfsi_validationStep4();
     if(!isValid)
     {
         global_error=1;
	 return false;
     } 
    beForeLoad(); // hide click button to prevent double click and show loader image
    var sfsi_display_counts                 =SFSI("input[name='sfsi_display_counts']:checked").val();
    
    var sfsi_email_countsDisplay            =(SFSI("input[name='sfsi_email_countsDisplay']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_email_countsDisplay']:checked").val();
    var sfsi_email_countsFrom               =(SFSI("input[name='sfsi_email_countsFrom']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_email_countsFrom']:checked").val();
    var sfsi_email_manualCounts             = SFSI("input[name='sfsi_email_manualCounts']").val();
    var sfsi_google_api_key                 = SFSI("input[name='sfsi_google_api_key']").val();
    var sfsi_rss_countsDisplay              =(SFSI("input[name='sfsi_rss_countsDisplay']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_rss_countsDisplay']:checked").val();
    var sfsi_rss_manualCounts               = SFSI("input[name='sfsi_rss_manualCounts']").val();
    
    var sfsi_facebook_countsDisplay         =(SFSI("input[name='sfsi_facebook_countsDisplay']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_facebook_countsDisplay']:checked").val();
    var sfsi_facebook_countsFrom            =(SFSI("input[name='sfsi_facebook_countsFrom']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_facebook_countsFrom']:checked").val();
    var sfsi_facebook_manualCounts          =SFSI("input[name='sfsi_facebook_manualCounts']").val();
    //var sfsi_facebook_PageLink              =SFSI("input[name='sfsi_facebook_PageLink']").val();
    //var sfsi_facebook_PageLink               =(SFSI("input[name='sfsi_facebookPage_url']").prop('disabled')==true)? '' :     SFSI("input[name='sfsi_facebookPage_url']").val();
    var sfsi_twitter_countsDisplay          =(SFSI("input[name='sfsi_twitter_countsDisplay']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_twitter_countsDisplay']:checked").val();
    var sfsi_twitter_countsFrom             =(SFSI("input[name='sfsi_twitter_countsFrom']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_twitter_countsFrom']:checked").val();
    var sfsi_twitter_manualCounts           = SFSI("input[name='sfsi_twitter_manualCounts']").val();
    
    var tw_consumer_key                     = SFSI("input[name='tw_consumer_key']").val();
    var tw_consumer_secret                  = SFSI("input[name='tw_consumer_secret']").val();
    var tw_oauth_access_token               = SFSI("input[name='tw_oauth_access_token']").val();
    var tw_oauth_access_token_secret        = SFSI("input[name='tw_oauth_access_token_secret']").val();
    
    var sfsi_google_countsDisplay           =(SFSI("input[name='sfsi_google_countsDisplay']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_google_countsDisplay']:checked").val();
    var sfsi_google_countsFrom              =(SFSI("input[name='sfsi_google_countsFrom']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_google_countsFrom']:checked").val();
    var sfsi_google_manualCounts            = SFSI("input[name='sfsi_google_manualCounts']").val();
    
    var sfsi_linkedIn_countsFrom            =(SFSI("input[name='sfsi_linkedIn_countsFrom']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_linkedIn_countsFrom']:checked").val();
    var sfsi_linkedIn_manualCounts          = SFSI("input[name='sfsi_linkedIn_manualCounts']").val();
    
    var ln_company                          =SFSI("input[name='ln_company']").val();
    var ln_api_key                          =SFSI("input[name='ln_api_key']").val();
    var ln_secret_key                       =SFSI("input[name='ln_secret_key']").val();
    var ln_oAuth_user_token                 =SFSI("input[name='ln_oAuth_user_token']").val();
    
    var sfsi_linkedIn_countsDisplay         =(SFSI("input[name='sfsi_linkedIn_countsDisplay']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_linkedIn_countsDisplay']:checked").val();
    var sfsi_linkedIn_countsFrom            =(SFSI("input[name='sfsi_linkedIn_countsFrom']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_linkedIn_countsFrom']:checked").val();
    var sfsi_linkedIn_manualCounts          = SFSI("input[name='sfsi_linkedIn_manualCounts']").val();
    
    var sfsi_youtube_countsDisplay          =(SFSI("input[name='sfsi_youtube_countsDisplay']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_youtube_countsDisplay']:checked").val();
    var sfsi_youtube_countsFrom             =(SFSI("input[name='sfsi_youtube_countsFrom']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_youtube_countsFrom']:checked").val();
    var sfsi_youtube_manualCounts           = SFSI("input[name='sfsi_youtube_manualCounts']").val();
    var sfsi_youtube_user                   = SFSI("input[name='sfsi_youtube_user']").val();
    var sfsi_pinterest_countsDisplay        =(SFSI("input[name='sfsi_pinterest_countsDisplay']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_pinterest_countsDisplay']:checked").val();
    var sfsi_pinterest_countsFrom           =(SFSI("input[name='sfsi_pinterest_countsFrom']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_pinterest_countsFrom']:checked").val();
    var sfsi_pinterest_manualCounts         = SFSI("input[name='sfsi_pinterest_manualCounts']").val();
    var sfsi_pinterest_user                 = SFSI("input[name='sfsi_pinterest_user']").val();
    var sfsi_pinterest_board                =SFSI("input[name='sfsi_pinterest_board']").val();
    
    var sfsi_instagram_countsDisplay        =(SFSI("input[name='sfsi_instagram_countsDisplay']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_instagram_countsDisplay']:checked").val();
    var sfsi_instagram_countsFrom           =(SFSI("input[name='sfsi_instagram_countsFrom']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_instagram_countsFrom']:checked").val();
    var sfsi_instagram_manualCounts         = SFSI("input[name='sfsi_instagram_manualCounts']").val();
    var sfsi_instagram_User		    = SFSI("input[name='sfsi_instagram_User']").val();	
    
    var sfsi_shares_countsDisplay          =(SFSI("input[name='sfsi_shares_countsDisplay']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_shares_countsDisplay']:checked").val();
    var sfsi_shares_countsFrom             =(SFSI("input[name='sfsi_shares_countsFrom']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_shares_countsFrom']:checked").val();
    var sfsi_shares_manualCounts           = SFSI("input[name='sfsi_shares_manualCounts']").val();
    
       
    var data = { action:'updateSrcn4',
                 sfsi_display_counts              : sfsi_display_counts,
                 
                 sfsi_email_countsDisplay         : sfsi_email_countsDisplay,
                 sfsi_email_countsFrom            : sfsi_email_countsFrom,
                 sfsi_email_manualCounts          : sfsi_email_manualCounts,
                 
                 sfsi_rss_countsDisplay           : sfsi_rss_countsDisplay,
                 sfsi_rss_manualCounts            : sfsi_rss_manualCounts,
                 
                 sfsi_facebook_countsDisplay      : sfsi_facebook_countsDisplay,
                 sfsi_facebook_countsFrom         : sfsi_facebook_countsFrom,
                 sfsi_facebook_manualCounts       : sfsi_facebook_manualCounts,
                 //sfsi_facebook_PageLink           : sfsi_facebook_PageLink,
                 
                 sfsi_twitter_countsDisplay       : sfsi_twitter_countsDisplay,
                 sfsi_twitter_countsFrom          : sfsi_twitter_countsFrom,
                 sfsi_twitter_manualCounts        : sfsi_twitter_manualCounts,
                 tw_consumer_key                  : tw_consumer_key,  
                 tw_consumer_secret               : tw_consumer_secret, 
                 tw_oauth_access_token            : tw_oauth_access_token, 
                 tw_oauth_access_token_secret     : tw_oauth_access_token_secret, 
                 
                 sfsi_google_countsDisplay        : sfsi_google_countsDisplay,
                 sfsi_google_countsFrom           : sfsi_google_countsFrom,
                 sfsi_google_manualCounts         : sfsi_google_manualCounts,
                 sfsi_google_api_key              : sfsi_google_api_key,
                 
                 sfsi_linkedIn_countsDisplay      : sfsi_linkedIn_countsDisplay,
                 sfsi_linkedIn_countsFrom         : sfsi_linkedIn_countsFrom,
                 sfsi_linkedIn_manualCounts       : sfsi_linkedIn_manualCounts,
                 ln_company                       : ln_company,
                 ln_api_key                       : ln_api_key,
                 ln_secret_key                    : ln_secret_key,
                 ln_oAuth_user_token              : ln_oAuth_user_token,
                 sfsi_youtube_countsDisplay       : sfsi_youtube_countsDisplay,
                 sfsi_youtube_countsFrom          : sfsi_youtube_countsFrom,
                 sfsi_youtube_manualCounts        : sfsi_youtube_manualCounts,
                 sfsi_youtube_user                : sfsi_youtube_user,  
                 sfsi_pinterest_countsDisplay     : sfsi_pinterest_countsDisplay,
                 sfsi_pinterest_countsFrom        : sfsi_pinterest_countsFrom,
                 sfsi_pinterest_manualCounts      : sfsi_pinterest_manualCounts,
                 sfsi_pinterest_user              : sfsi_pinterest_user,
                 sfsi_pinterest_board             : sfsi_pinterest_board,
		 
		 sfsi_instagram_countsDisplay	  : sfsi_instagram_countsDisplay,
		 sfsi_instagram_countsFrom	  : sfsi_instagram_countsFrom,
		 sfsi_instagram_manualCounts	  : sfsi_instagram_manualCounts,
                 sfsi_instagram_User		  : sfsi_instagram_User,	
		 
		 sfsi_shares_countsDisplay        : sfsi_shares_countsDisplay,
                 sfsi_shares_countsFrom           : sfsi_shares_countsFrom,
                 sfsi_shares_manualCounts         : sfsi_shares_manualCounts
                
               }
    
    SFSI.ajax({
                url: ajax_object.ajax_url,
                type:'post',
                data: data,
                dataType:'json',
		async: true,
                success:function (res)
                {
                    if(res.res=='success')
                    {
                      //SFSI("input[name='sfsi_facebookPage_url']").val(sfsi_facebook_PageLink);
                        showErrorSuc('success','Saved !',4);
			sfsicollapse('#sfsi_save4');
			sfsi_showPreviewCounts();
			
                        
                    }
                    else
                    {
                        showErrorSuc('error','Unkown error , please try again',4);
			 global_error=1;
			
                    }    
                    afterLoad(); //Ahow click button  hide show loader image
                }
        
        });
     return return_value;

}

function sfsi_update_step5()
{
    
     var isValid= sfsi_validationStep5();
     if(!isValid)
     {
         global_error=1;
	 return false;
     } 
    
    beForeLoad(); // hide click button to prevent double click and show loader image
    var sfsi_icons_size                     =SFSI("input[name='sfsi_icons_size']").val();
    var sfsi_icons_perRow                   =SFSI("input[name='sfsi_icons_perRow']").val();
    var sfsi_icons_spacing                  =SFSI("input[name='sfsi_icons_spacing']").val();
    var sfsi_icons_Alignment                =SFSI("#sfsi_icons_Alignment").val();
    var sfsi_icons_ClickPageOpen            =SFSI("input[name='sfsi_icons_ClickPageOpen']:checked").val();
   
    var sfsi_icons_float                    =SFSI("input[name='sfsi_icons_float']:checked").val();
    var sfsi_icons_floatPosition            =SFSI("#sfsi_icons_floatPosition").val();
    var sfsi_icons_stick                    =SFSI("input[name='sfsi_icons_stick']:checked").val();
    var sfsi_rssIcon_order                  =SFSI("#sfsi_rssIcon_order").attr('data-index');
    var sfsi_emailIcon_order                =SFSI("#sfsi_emailIcon_order").attr('data-index');
    var sfsi_googleIcon_order               =SFSI("#sfsi_googleIcon_order").attr('data-index');
    var sfsi_facebookIcon_order             =SFSI("#sfsi_facebookIcon_order").attr('data-index');
    var sfsi_twitterIcon_order              =SFSI("#sfsi_twitterIcon_order").attr('data-index');
    var sfsi_youtubeIcon_order              =SFSI("#sfsi_youtubeIcon_order").attr('data-index');
    var sfsi_pinterestIcon_order            =SFSI("#sfsi_pinterestIcon_order").attr('data-index');
    var sfsi_instagramIcon_order            =SFSI("#sfsi_instagramIcon_order").attr('data-index');
    var sfsi_shareIcon_order                =SFSI("#sfsi_shareIcon_order").attr('data-index');
    var sfsi_linkedinIcon_order             =SFSI("#sfsi_linkedinIcon_order").attr('data-index');
    var sfsi_custom_orders=new Array();
    SFSI(".custom_iconOrder").each(function(index,cnt){ sfsi_custom_orders.push({'order' :SFSI(this).attr('data-index'),'ele' :SFSI(this).attr('element-id')}); });
  
    var sfsi_rss_MouseOverText              =(SFSI("input[name='sfsi_rss_MouseOverText']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_rss_MouseOverText']").val();
    var sfsi_email_MouseOverText            =(SFSI("input[name='sfsi_email_MouseOverText']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_email_MouseOverText']").val();
    var sfsi_twitter_MouseOverText          =(SFSI("input[name='sfsi_twitter_MouseOverText']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_twitter_MouseOverText']").val();
    var sfsi_facebook_MouseOverText         =(SFSI("input[name='sfsi_facebook_MouseOverText']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_facebook_MouseOverText']").val();
    var sfsi_google_MouseOverText           =(SFSI("input[name='sfsi_google_MouseOverText']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_google_MouseOverText']").val();
    var sfsi_linkedIn_MouseOverText         =(SFSI("input[name='sfsi_linkedIn_MouseOverText']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_linkedIn_MouseOverText']").val();
    var sfsi_youtube_MouseOverText          =(SFSI("input[name='sfsi_youtube_MouseOverText']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_youtube_MouseOverText']").val();
    var sfsi_pinterest_MouseOverText        =(SFSI("input[name='sfsi_pinterest_MouseOverText']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_pinterest_MouseOverText']").val();
    var sfsi_instagram_MouseOverText        =(SFSI("input[name='sfsi_instagram_MouseOverText']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_instagram_MouseOverText']").val();
    var sfsi_share_MouseOverText            =(SFSI("input[name='sfsi_share_MouseOverText']").prop('disabled')==true)? '' : SFSI("input[name='sfsi_share_MouseOverText']").val();
    var sfsi_custom_MouseOverTexts={};
    SFSI("input[name='sfsi_custom_MouseOverTexts[]']").each(function(){ sfsi_custom_MouseOverTexts[SFSI(this).attr('file-id')] =  this.value;});
    
    
       
    var data = { action:'updateSrcn5',
                 sfsi_icons_size              : sfsi_icons_size, 
                 sfsi_icons_Alignment         : sfsi_icons_Alignment,
                 sfsi_icons_perRow            : sfsi_icons_perRow,
                 sfsi_icons_spacing           : sfsi_icons_spacing,  
                 sfsi_icons_ClickPageOpen     : sfsi_icons_ClickPageOpen,
                 sfsi_icons_float             : sfsi_icons_float,                    
                 sfsi_icons_floatPosition     : sfsi_icons_floatPosition,
                 sfsi_icons_stick             : sfsi_icons_stick,  
                 sfsi_rss_MouseOverText       :sfsi_rss_MouseOverText,  
                 sfsi_email_MouseOverText     : sfsi_email_MouseOverText,                 
                 sfsi_twitter_MouseOverText   : sfsi_twitter_MouseOverText,
                 sfsi_facebook_MouseOverText  : sfsi_facebook_MouseOverText,
                 sfsi_google_MouseOverText    : sfsi_google_MouseOverText,
                 sfsi_youtube_MouseOverText   : sfsi_youtube_MouseOverText,  
                 sfsi_linkedIn_MouseOverText  : sfsi_linkedIn_MouseOverText,                 
                 sfsi_pinterest_MouseOverText : sfsi_pinterest_MouseOverText,
                 sfsi_share_MouseOverText     : sfsi_share_MouseOverText,
		 sfsi_instagram_MouseOverText : sfsi_instagram_MouseOverText,
                 sfsi_custom_MouseOverTexts   : sfsi_custom_MouseOverTexts,  
                 sfsi_rssIcon_order           : sfsi_rssIcon_order,
                 sfsi_emailIcon_order         : sfsi_emailIcon_order,
                 sfsi_facebookIcon_order      : sfsi_facebookIcon_order,
                 sfsi_twitterIcon_order       : sfsi_twitterIcon_order,  
                 sfsi_googleIcon_order        :sfsi_googleIcon_order,  
                 sfsi_youtubeIcon_order       : sfsi_youtubeIcon_order,  
                 sfsi_pinterestIcon_order     : sfsi_pinterestIcon_order,  
                 sfsi_shareIcon_order         : sfsi_shareIcon_order,
		 sfsi_instagramIcon_order     : sfsi_instagramIcon_order,	 
                 sfsi_linkedinIcon_order      : sfsi_linkedinIcon_order,  
                 sfsi_custom_orders           : sfsi_custom_orders          
                                 
               }
    
    SFSI.ajax({
                url: ajax_object.ajax_url,
                type:'post',
                data: data,
                dataType:'json',
		async: true,
                success:function (res)
                {
                    if(res=='success')
                    {
                       showErrorSuc('success','Saved !',5);
			sfsicollapse('#sfsi_save5');
                        
                    }
                    else
                    {
                        global_error=1;
			showErrorSuc('error','Unkown error , please try again',5);
			
                    }    
                    afterLoad(); //Ahow click button  hide show loader image
                }
        
        });
    
}

function sfsi_update_step6()
 {
      var return_value=false;
     beForeLoad(); // hide click button to prevent double click and show loader image
    var sfsi_show_Onposts           =SFSI("input[name='sfsi_show_Onposts']:checked").val();
    var sfsi_textBefor_icons        =SFSI("input[name='sfsi_textBefor_icons']").val();
    var sfsi_icons_alignment        =SFSI("#sfsi_icons_alignment").val();
    var sfsi_icons_DisplayCounts    =SFSI("#sfsi_icons_DisplayCounts").val();
            
    
       
    var data = { action:'updateSrcn6',
                 sfsi_show_Onposts          : sfsi_show_Onposts, 
                 sfsi_icons_DisplayCounts   : sfsi_icons_DisplayCounts,
                 sfsi_icons_alignment       : sfsi_icons_alignment,
                 sfsi_textBefor_icons       : sfsi_textBefor_icons                                                   
               }
    
    SFSI.ajax({
                url: ajax_object.ajax_url,
                type:'post',
                data: data,
                dataType:'json',
		async: true,
                success:function (res)
                {
                    if(res=='success')
                    {
                       showErrorSuc('success','Saved !',6);
		       sfsicollapse('#sfsi_save6');
                                      
                    }
                    else
                    {
                        global_error=1;
			showErrorSuc('error','Unkown error , please try again',6);
			
                    }    
                     afterLoad(); //Ahow click button  hide show loader image
                }
        
        });
 

}

function sfsi_update_step7()
 {
     var isValid= sfsi_validationStep7();
     if(!isValid)
     {
         global_error=1;
	 return false;
     } 
    
    beForeLoad(); // hide click button to prevent double click and show loader image
    var sfsi_popup_text             =SFSI("input[name='sfsi_popup_text']").val();
    var sfsi_popup_font             =SFSI("#sfsi_popup_font option:selected").val();
    var sfsi_popup_fontStyle        =SFSI("#sfsi_popup_fontStyle option:selected").val();
    var sfsi_popup_fontColor        =SFSI("input[name='sfsi_popup_fontColor']").val();        
    var sfsi_popup_fontSize         =SFSI("input[name='sfsi_popup_fontSize']").val();
    var sfsi_popup_background_color =SFSI("input[name='sfsi_popup_background_color']").val();
    var sfsi_popup_border_color     =SFSI("input[name='sfsi_popup_border_color']").val();   
    var sfsi_popup_border_thickness =SFSI("input[name='sfsi_popup_border_thickness']").val();   
    var sfsi_popup_border_shadow    =SFSI("input[name='sfsi_popup_border_shadow']:checked").val();   
    var sfsi_Show_popupOn           =SFSI("input[name='sfsi_Show_popupOn']:checked").val();   
    var sfsi_Show_popupOn_PageIDs=[];
    SFSI('#sfsi_Show_popupOn_PageIDs :selected').each(function(i, selected){ 
        sfsi_Show_popupOn_PageIDs[i] = SFSI(selected).val(); 
      });
     
    var sfsi_Shown_pop              =SFSI("input[name='sfsi_Shown_pop']:checked").val();   
    var sfsi_Shown_popupOnceTime     =SFSI("input[name='sfsi_Shown_popupOnceTime']").val();   
    var sfsi_Shown_popuplimitPerUserTime =SFSI("#sfsi_Shown_popuplimitPerUserTime").val();
    
    var data = { action:'updateSrcn7',
                 sfsi_popup_text            : sfsi_popup_text, 
                 sfsi_popup_font            : sfsi_popup_font,
                 sfsi_popup_fontColor       : sfsi_popup_fontColor,
                 sfsi_popup_fontSize        : sfsi_popup_fontSize,
                 sfsi_popup_background_color: sfsi_popup_background_color,
                 sfsi_popup_border_color    : sfsi_popup_border_color,
                 sfsi_popup_border_thickness: sfsi_popup_border_thickness,
                 sfsi_popup_border_shadow   : sfsi_popup_border_shadow,
                 sfsi_Show_popupOn          : sfsi_Show_popupOn,
                 sfsi_Show_popupOn_PageIDs  : sfsi_Show_popupOn_PageIDs,
                 sfsi_Shown_pop             : sfsi_Shown_pop,
                 sfsi_Shown_popupOnceTime   : sfsi_Shown_popupOnceTime,
                 sfsi_Shown_popuplimitPerUserTime: sfsi_Shown_popuplimitPerUserTime
               }
    
    SFSI.ajax({
                url: ajax_object.ajax_url,
                type:'post',
                data: data,
                dataType:'json',
		async: true,
                success:function (res)
                {
                    if(res=='success')
                    {
                       showErrorSuc('success','Saved !',7);
		        sfsicollapse('#sfsi_save7');
                                  
                    }
                    else
                    {
                        showErrorSuc('error','Unkown error , please try again',7);
			
                    }    
                    afterLoad(); //Ahow click button  hide show loader image 
                }
        
        });
 
}
function afterIconSuccess(res)
{
    
    if(res.res='success')
    {
       
        var new_ele=res.key+1;
        var total=res.element;
        var new_total=total+1;
        SFSI('#total_cusotm_icons').val(res.element);
        SFSI('.upload-overlay').hide( "slow" );
	SFSI('.uperror').html('');
        showErrorSuc('success','Custom Icon updated successfully',1);
        d = new Date();
       
        //CustomIConSectionsUpdate(res.element-1);
       SFSI('input[name=sfsiICON_'+res.key+']').removeAttr('ele-type');
       SFSI('input[name=sfsiICON_'+res.key+']').removeAttr('isnew');
        SFSI('li.custom:last').removeClass('bdr_btm_non');
       SFSI('li.custom:last').children('span.custom-img').children('img').attr('src',res.img_path+'?'+d.getTime());
        icons_name=SFSI('li.custom:last').find('input.styled').attr('name');
	    //alert(icons_name);
	    var icn_array = icons_name.split('_');
	res.key=icn_array[1];
	res.img_path+='?'+d.getTime();
	if(total<5)
        {    
         SFSI('.icn_listing').append('<li id="c'+new_ele+'" class="custom bdr_btm_non"><div class="radio_section tb_4_ck"><span class="checkbox" dynamic_ele="yes" style="background-position: 0px 0px;"></span><input name="sfsiICON_'+new_ele+'"  type="checkbox" value="yes" class="styled" style="display:none;" element-type="cusotm-icon" isNew="yes" /></div> <span class="custom-img"><img src="'+SFSI('#plugin_url').val()+'images/custom.png" id="CImg_'+new_ele+'"  /> </span> <span class="custom custom-txt">Custom'+new_total+' </span> <div class="right_info"> <p><span>It depends:</span> Upload a custom icon if you have other accounts/websites you want to link to.</p><div class="inputWrapper"></div></li>');
         
        
        }
	
         SFSI('.custom_section').show();
         SFSI('.custom-links').append(' <div class="row  sfsiICON_'+res.key+' cm_lnk"> <h2 class="custom"> <span class="customstep2-img"> <img   src="'+res.img_path+'?'+d.getTime()+'" style="border-radius:48%" /> </span> <span class="sfsiCtxt">Custom '+total+'</span> </h2> <div class="inr_cont "><p>Where do you want this icon to link to?</p> <p class="radio_section fb_url custom_section  sfsiICON_'+res.key+'" ><label>Link :</label><input file-id="'+res.key+'" name="sfsi_CustomIcon_links[]" type="text" value="" placeholder="http://" class="add" /></p></div></div>');
          var hover_len=SFSI('div.custom_m').find('div.mouseover_field').length;
       
          if(hover_len%2==0)
          {
              SFSI('div.custom_m').append('<div class="clear"> </div> <div class="mouseover_field custom_section sfsiICON_'+res.key+'"><label>Custom '+total+':</label><input name="sfsi_custom_MouseOverTexts[]" value="" type="text" file-id="'+res.key+'" /></div>');
          }
          else
          {
               SFSI('div.custom_m').append('<div class="cHover " ><div class="mouseover_field custom_section sfsiICON_'+res.key+'"><label>Custom '+total+':</label><input name="sfsi_custom_MouseOverTexts[]" value="" type="text" file-id="'+res.key+'" /></div>');
          }    
         /* add custom icon to setp 5 */
	 SFSI('ul.share_icon_order').append('<li class="custom_iconOrder sfsiICON_'+res.key+'" data-index="" element-id="'+res.key+'" id=""><a href="#" title="Custom Icon" ><img src="'+res.img_path+'" alt="Linked In" class="sfcm"/></a></li>');
	 /* add custom icon to setp 7 */
	 SFSI('ul.sfsi_sample_icons').append('<li class="sfsiICON_'+res.key+'" element-id="'+res.key+'" ><div><img src="'+res.img_path+'" alt="Linked In" class="sfcm"/><span class="sfsi_Cdisplay">12k</span></div></li>');  
         
	 sfsi_update_index();
        update_Sec5Iconorder();   
        sfsi_update_step1();
	sfsi_update_step2();
        sfsi_update_step5();
	SFSI(".upload-overlay").css('pointer-events','auto');
	sfsi_showPreviewCounts();
	afterLoad();     
    }
}



//function to check file size before uploading.
function beforeIconSubmit(thisObj){
    //check whether browser fully supports all File API
    SFSI('.uperror').html('Uploading.....');
   if (window.File && window.FileReader && window.FileList && window.Blob)
	{
		
		if( !SFSI(thisObj).val()) //check empty input filed
		{
                        SFSI('.uperror').html('File is empty');
                        
                    
		}
		
		var fsize = thisObj.files[0].size; //get file size
		var ftype =thisObj.files[0].type; // get file type
		
		//allow only valid image file types 
		switch(ftype)
                {
                    case 'image/png': case 'image/gif': case 'image/jpeg': case 'image/pjpeg':
                        break;
                    default:
                        SFSI('.uperror').html('Unsupported file');
                        return false;
                }
		
		//Allowed file size is less than 1 MB (1048576)
		if(fsize>1048576) 
		{
			 SFSI('.uperror').html('Image should be less than 1 MB');
			return false;
		}
		else
                {
                    return true;
                }
		
		
	}
	else
	{
		//Output error to older unsupported browsers that doesn't support HTML5 File API
		 //SFSI('.uperror').html('Please upgrade your browser, because your current browser lacks some new features we need!');
                   
		return true;
	}
}

//function to format bites bit.ly/19yoIPO
function bytesToSize(bytes) {
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
   if (bytes == 0) return '0 Bytes';
   var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
   return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

function showErrorSuc(type,msg,sec)
{
    if(type=='error')
    {
        var Msgclass='errorMsg';
        
    }
    else
    {
         var Msgclass='sucMsg'
    }
     
    /*SFSI('html,body').animate({ scrollTop: 0 },'slow', 
                        function () 
                        {
                          SFSI('.'+Msgclass).html(msg)   
                          SFSI('.'+Msgclass).slideDown('slow');   
                         }); */
                            
                          SFSI('.tab'+sec+'>.'+Msgclass).html(msg); 
                          SFSI('.tab'+sec+'>.'+Msgclass).show();
                          SFSI('.tab'+sec+'>.'+Msgclass).effect("highlight", {}, 5000);   
                        
    setTimeout(function(){   SFSI('.'+Msgclass).slideUp('slow');},5000);
    return false
    
}

function beForeLoad()
{
     SFSI('.loader-img').show();
     SFSI('.save_button >a').html("Saving...");
     SFSI('.save_button >a').css('pointer-events', 'none');
     
    
}
function afterLoad(sec)
{
      
      SFSI('input').removeClass('inputError');  
      SFSI('.save_button >a').html("Save");
      SFSI('.tab8>div.save_button >a').html("Save All Settings");
      SFSI('.save_button >a').css('pointer-events', 'auto');
      SFSI('.save_button >a').removeAttr("onclick");
      SFSI('.loader-img').hide();
    
}
/* make run time pop box of section 7 */
function sfsi_make_popBox()
{
    var showed_icon=0
    SFSI('.sfsi_sample_icons >li').each(function(){
	
	if (SFSI(this).css('display')!='none') {
		showed_icon=1;
	}
	
	})
    if (showed_icon==0) {
	SFSI('.sfsi_Popinner').hide();
    }
    else
    {
	SFSI('.sfsi_Popinner').show();
    }
    if (SFSI('input[name="sfsi_popup_text"]').val()!='') {
	SFSI('.sfsi_Popinner >h2').html(SFSI('input[name="sfsi_popup_text"]').val()); /* set text */ 
	SFSI('.sfsi_Popinner >h2').show();
    }
    else
    {
	SFSI('.sfsi_Popinner >h2').hide();
    }
    
    SFSI('.sfsi_Popinner').css({"border-color": SFSI('input[name="sfsi_popup_border_color"]').val(), 
             "border-width":SFSI('input[name="sfsi_popup_border_thickness"]').val(), 
             "border-style":"solid"}); 
    SFSI('.sfsi_Popinner').css('background-color',SFSI('input[name="sfsi_popup_background_color"]').val()); /* set background */
    SFSI('.sfsi_Popinner h2').css('font-family',SFSI('#sfsi_popup_font').val()); /* set font */ 
   
    SFSI('.sfsi_Popinner h2').css('font-style',SFSI('#sfsi_popup_fontStyle').val()); /* set font style */
   
    SFSI('.sfsi_Popinner >h2').css('font-size',parseInt(SFSI('input[name="sfsi_popup_fontSize"]').val())); /* set font style */
    SFSI('.sfsi_Popinner >h2').css('color',SFSI('input[name="sfsi_popup_fontColor"]').val()+" !important"); /* set font style */
    if(SFSI('input[name="sfsi_popup_border_shadow"]:checked').val()=='yes')
    {
         SFSI('.sfsi_Popinner').css('box-shadow','12px 30px 18px #CCCCCC');
    }
    else
    {
         SFSI('.sfsi_Popinner').css('box-shadow','none');
    }    
}
var initTop	= new Array();

function sfsi_stick_widget(top)
{
	if (initTop.length == 0)
	{
		SFSI('.sfsi_widget').each(function(n)
		{
			initTop[n]	= SFSI(this).position().top;
		});
		console.log(initTop);
	}
	var windowpos 	= SFSI(window).scrollTop();
	var sfEle_pos	= [];
	var sfle_ref	= [];
	
	SFSI('.sfsi_widget').each(function(n)
	{
		sfEle_pos[n]	= SFSI(this).position().top;
		sfle_ref[n]	= SFSI(this);
	});
	var isFound	= false;
	for(var i in sfEle_pos)
	{
		var nextPosition	= parseInt(i)+1;
		if (sfEle_pos[i] < windowpos && sfEle_pos[nextPosition] > windowpos && nextPosition < sfEle_pos.length)
		{
			SFSI(sfle_ref[i]).css({position:"fixed", top:top});
			SFSI(sfle_ref[nextPosition]).css({position:"", top:initTop[nextPosition]});
			isFound	= true;
			
		}
		else
		{
			SFSI(sfle_ref[i]).css({position:"", top:initTop[i]});
		}
	}
	if (!isFound)
	{
		var lastElement	= sfEle_pos.length - 1;
		var preElement	= -1;
		if (sfEle_pos.length > 1)
		{
			preElement	= sfEle_pos.length - 2;
		}
		
		if (initTop[lastElement] < windowpos)
		{
			SFSI(sfle_ref[lastElement]).css({position:"fixed", top:top});
			if (preElement >= 0)
			{
				SFSI(sfle_ref[preElement]).css({position:"", top:initTop[preElement]});
				
			}
		}
		else
		{
			SFSI(sfle_ref[lastElement]).css({position:"", top:initTop[lastElement]});
			
			if (preElement >= 0 && sfEle_pos[preElement] < windowpos)
			{
				//SFSI(sfle_ref[preElement]).css({position:"fixed", top:top});
			}
		}
	}
}
function sfsi_float_widget(top)
{ 
    
    if(top=="center")
    {    
        //var offsetFromTop = window.innerHeight/2-(SFSI('#sfsi_floater').height()/2); // number of pixels of the widget should be from top of the window
	var offsetFromTop = window.innerHeight/2;
    }
    else if (top=="bottom") {
	var offsetFromTop=window.innerHeight-SFSI('#sfsi_floater').height();
    }
    else
    {
        var offsetFromTop=parseInt(top);
    }    
    var updateFrequency= 50; //milisecond. The smaller the value, smooth the animation.
    var chaseFactor = .1; // the closing-in factor. Smaller makes it smoother.

    var yMoveTo = 0;
    var yDiff   = 0;

    var movingWidget = SFSI('#sfsi_floater');
       function ff(){
        // compute the distance user has scrolled the window
        yDiff = (navigator.appName === "Microsoft Internet Explorer") ? (yMoveTo - document.documentElement.scrollTop) : (yMoveTo - window.pageYOffset) ;
        if ( Math.abs(yDiff) > 0) {

            // turn off now, prevent the event repeatedly fired when user scroll repeatedly
            window.removeEventListener("scroll", ff);
            yMoveTo -= yDiff*chaseFactor;
            
           SFSI('#sfsi_floater').css({top: (yMoveTo+offsetFromTop).toString() + "px" }); 
            setTimeout(ff, updateFrequency); // calls itself again
        } else {
            window.addEventListener("scroll", ff , false); // turn back on
        }
    }

    window.addEventListener("scroll", ff , false);
    
}

function sfsi_shuffle()
{
    var val=[];
    SFSI('.sfsi_wicons ').each(function (index) {
    if (!SFSI(this).text().match(/^\s*$/)) {
        val[index]="<div class='"+SFSI(this).attr('class')+"'>"+SFSI(this).html()+"</div>";
        SFSI(this).fadeOut('slow');
        SFSI(this).insertBefore(SFSI(this).prev('.sfsi_wicons'));
        SFSI(this).fadeIn('slow');
    }
    
});

 val=Shuffle(val);
 
  $("#sfsi_wDiv").html('');
 for (var i=0;i<testArray.length;i++) {
      $("#sfsi_wDiv").append(val[i]);
   }
}
function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};
function sfsi_setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
} 

function sfsfi_getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
} 


/* hide footer link function */

function sfsi_hideFooter()
{
	
	
}
