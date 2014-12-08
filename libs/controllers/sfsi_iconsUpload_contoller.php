<?php
/* upload delete custom icons */

/* add ajax action for custom icons upload */
add_action('wp_ajax_UploadIcons','sfsi_UploadIcons');

/* uplaod custom icon */
function sfsi_UploadIcons()
{
	require(ABSPATH.'/wp-load.php');
	extract($_POST);
	$upload_dir = wp_upload_dir();
	
	$ThumbSquareSize 		= 51; //Thumbnail will be 57X57
	$Quality 			= 90; //jpeg quality
	$DestinationDirectory   = $upload_dir['path'].'/'; //specify upload directory ends with / (slash)
	$AcceessUrl             = $upload_dir['url'].'/';
	$ThumbPrefix			= "cmicon_";
	
   if(!empty($custom_imgurl))
	{
		$sfsi_custom_files[] = $custom_imgurl;
		
		list($CurWidth, $CurHeight) = getimagesize($custom_imgurl);
	
		$info = explode("/", $custom_imgurl);
		$iconName = array_pop($info);
		$ImageExt = substr($iconName, strrpos($iconName, '.'));
		$ImageExt = str_replace('.','',$ImageExt);
		
		$iconName = str_replace(' ','-',strtolower($iconName)); // get image name
		$ImageType = 'image/'.$ImageExt;
		
		 switch(strtolower($ImageType))
		 {
			 	case 'image/png':
						// Create a new image from file 
						$CreatedImage =  imagecreatefrompng($custom_imgurl);
						break;
				case 'image/gif':
						$CreatedImage =  imagecreatefromgif($custom_imgurl);
						break;
				case 'image/jpg':
						$CreatedImage = imagecreatefromjpeg($custom_imgurl);
						break;					
				case 'image/jpeg':
				case 'image/pjpeg':
						$CreatedImage = imagecreatefromjpeg($custom_imgurl);
						break;
				default:
						 die(json_encode(array('res'=>'type_error'))); //output error and exit
		}

		
		$ImageName = preg_replace("/\\.[^.\\s]{3,4}$/", "", $iconName);
		$cnt=$i+1;
		
		$sec_options= (get_option('sfsi_section1_options',false)) ? unserialize(get_option('sfsi_section1_options',false)) : '' ;        
		$icons = (is_array(unserialize($sec_options['sfsi_custom_files']))) ? unserialize($sec_options['sfsi_custom_files']) : array();
		if(empty($icons))
		{   
			end($icons);
			$new=0;
		}    
		else {
			end($icons);
			$cnt=key($icons);
			$new=$cnt+1;
		}
		$NewIconName = "/custom_icon".$new.'.'.$ImageExt;
        $iconPath 	= $DestinationDirectory.$NewIconName; //Thumbnail name with destination directory
		
		//Create a square Thumbnail right after, this time we are using cropImage() function
		if(cropImage($CurWidth,$CurHeight,$ThumbSquareSize,$iconPath,$CreatedImage,$Quality,$ImageType))
		{
			 //update database information 
				$AccressImagePath=$AcceessUrl.$NewIconName;                                        
					$sec_options= (get_option('sfsi_section1_options',false)) ? unserialize(get_option('sfsi_section1_options',false)) : '' ;
					$icons = (is_array(unserialize($sec_options['sfsi_custom_files']))) ? unserialize($sec_options['sfsi_custom_files']) : array();
					$icons[] = $AccressImagePath;
					
					$sec_options['sfsi_custom_files'] = serialize($icons);
					$total_uploads =  count($icons);
					end($icons);
					$key = key($icons);
					update_option('sfsi_section1_options',serialize($sec_options));
					die(json_encode(array('res'=>'success','img_path'=>$AccressImagePath,'element'=>$total_uploads,'key'=>$key)));
	   }
	   else
	   {        
		   die(json_encode(array('res'=>'thumb_error')));
	   }
		
	}
}
/* delete uploaded icons */
add_action('wp_ajax_deleteIcons','sfsi_deleteIcons'); 

function sfsi_deleteIcons()
{
   if(isset($_POST['icon_name']) && !empty($_POST['icon_name']))
   {
       /* get icons details to delete it from plugin folder */ 
       $custom_icon=explode('_',$_POST['icon_name']);  
       $sec_options1= (get_option('sfsi_section1_options',false)) ? unserialize(get_option('sfsi_section1_options',false)) : array() ;
       $sec_options2= (get_option('sfsi_section2_options',false)) ? unserialize(get_option('sfsi_section2_options',false)) : array() ;
       $up_icons= (is_array(unserialize($sec_options1['sfsi_custom_files']))) ? unserialize($sec_options1['sfsi_custom_files']) : array();
       $icons_links= (is_array(unserialize($sec_options2['sfsi_CustomIcon_links']))) ? unserialize($sec_options2['sfsi_CustomIcon_links']) : array();
       $icon_path=$up_icons[$custom_icon[1]];  
        $path=  pathinfo($icon_path);      
       /*if(is_file(SFSI_DOCROOT.'/images/custom_icons/'.$path['basename'])) {
          
        unlink(SFSI_DOCROOT.'/images/custom_icons/'.$path['basename']);

       } */
	if(isset($up_icons[$custom_icon[1]]))
	{
         unset($up_icons[$custom_icon[1]]);
         
         unset($icons_links[$custom_icon[1]]);
	}
	else
	{
	  unset($up_icons[0]);
          unset($icons_links[0]);
	}        
         /* update database after delete */
	 $sec_options1['sfsi_custom_files']=serialize($up_icons);
         $sec_options2['sfsi_CustomIcon_links']=serialize($icons_links);
         
         end($up_icons);
         $key=(key($up_icons))? key($up_icons) :$custom_icon[1] ;
         $total_uploads=count($up_icons);
         
        update_option('sfsi_section1_options',serialize($sec_options1));
        update_option('sfsi_section2_options',serialize($sec_options2));
          
       die(json_encode(array('res'=>'success','last_index'=>$key,'total_up'=>$total_uploads)));
   }
    
}



/*  This function will proportionally resize image */
function resizeImage($CurWidth,$CurHeight,$MaxSize,$DestFolder,$SrcImage,$Quality,$ImageType)
{
	/* Check Image size is not 0 */
	if($CurWidth <= 0 || $CurHeight <= 0) 
	{
		return false;
	}
	/* Construct a proportional size of new image */
	$ImageScale      	= min($MaxSize/$CurWidth, $MaxSize/$CurHeight); 
	$NewWidth  			= ceil($ImageScale*$CurWidth);
	$NewHeight 			= ceil($ImageScale*$CurHeight);
	$NewCanves 			= imagecreatetruecolor($NewWidth, $NewHeight);
	
	/* Resize Image */
	if(imagecopyresampled($NewCanves, $SrcImage,0, 0, 0, 0, $NewWidth, $NewHeight, $CurWidth, $CurHeight))
	{
		return $ImageType;
		switch(strtolower($ImageType))
		{
			case 'image/png':
				imagepng($NewCanves,$DestFolder);
				break;
			case 'image/gif':
				imagegif($NewCanves,$DestFolder);
				break;			
			case 'image/jpg':
				imagejpeg($NewCanves,$DestFolder,$Quality);
				break;
			case 'image/jpeg':
			case 'image/pjpeg':
				imagejpeg($NewCanves,$DestFolder,$Quality);
				break;
			default:
				return false;
		}
	/* Destroy image, frees memory	*/
	if(is_resource($NewCanves)) {imagedestroy($NewCanves);} 
	return true;
	}

}

/* This function corps image to create exact square images, no matter what its original size! */
function cropImage($CurWidth,$CurHeight,$iSize,$DestFolder,$SrcImage,$Quality,$ImageType)
{	 
	//Check Image size is not 0
	if($CurWidth <= 0 || $CurHeight <= 0) 
	{
		return false;
	}
	
	if($CurWidth>$CurHeight)
	{
		$y_offset = 0;
		$x_offset = ($CurWidth - $CurHeight) / 2;
		$square_size 	= $CurWidth - ($x_offset * 2);
	}else{
		$x_offset = 0;
		$y_offset = ($CurHeight - $CurWidth) / 2;
		$square_size = $CurHeight - ($y_offset * 2);
	}
	
	$NewCanves 	= imagecreatetruecolor($iSize, $iSize);
	imagealphablending($NewCanves, false);
	imagesavealpha($NewCanves,true);
	$white = imagecolorallocate($NewCanves, 255, 255, 255);
	$alpha_channel = imagecolorallocatealpha($NewCanves, 255, 255, 255, 127); 
        imagecolortransparent($NewCanves, $alpha_channel); 
	$maketransparent = imagecolortransparent($NewCanves,$white);
	imagefill($NewCanves, 0, 0, $maketransparent);
	
	if(imagecopyresampled($NewCanves, $SrcImage,0, 0, $x_offset, $y_offset, $iSize, $iSize, $square_size, $square_size))
	{
		imagesavealpha($NewCanves,true); 
		switch(strtolower($ImageType))
		{
			case 'image/png':
				imagepng($NewCanves,$DestFolder);
				break;
			case 'image/gif':
				imagegif($NewCanves,$DestFolder);
				break;	
			case 'image/jpg':
				imagejpeg($NewCanves,$DestFolder,$Quality);
				break;			
			case 'image/jpeg':
			case 'image/pjpeg':
				imagejpeg($NewCanves,$DestFolder,$Quality);
				break;
			default:
				return false;
		}
		
	/* Destroy image, frees memory	*/
	if(is_resource($NewCanves)) {imagedestroy($NewCanves);} 
	return true;

	}
	  
}

?>