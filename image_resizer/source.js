// SG.hu image_resizer v1.0 20111108
// Készítette: dzsani

$(document).ready(function() {
	
	// Iterate over images
	// Remove default load event
	$('.maskwindow img').each(function() {
		$(this).removeAttr('onload');
		$(this).attr('resizemod', 'off');
	});
	
	// Iterate over message images
	// Resize them to 200 px width
	$('.maskwindow img').load(function() {
		if($(this).width() > 200) {
			$(this).width(200);
			$(this).addClass('ir_source');
		}
	});
	
	// Create image click event
	$('.ir_source').live('click', function() {
		
		// Create the overlay
		$('<div class="ir_overlay"></div>').prependTo('body').css({ width : '100%', height : '100%', position : 'fixed', left : 0, top : 0, zIndex : 100, backgroundColor : '#999', opacity : 0.6 });
		
		// Create the image holder element
		var placeholder = $('<div class="ir_wrapper"></div>').prependTo('body').css({ position: 'fixed', zIndex : 101, boxShadow : '0px 0px 10px #000' });
		
		// Create a clone of the image
		var clone = $(this).clone().prependTo(placeholder).attr('class', 'ir_image').removeAttr('onload');
			
		// Remove size properties to get original size
		$(this).css({ width : 'auto', height : 'auto' });

		// Get viewport dimensions
		var vWidth = $(window).width() - 50;
		var vHeight = $(window).height() - 50;

		// Get image original size dimensions
		var width = $(this).width() > vWidth ? vWidth : $(this).width();
		var height = $(this).height() > vHeight ? vHeight : $(this).height();
		
		// Calculate image aspect ratio
		var ratio = $(this).width() / $(this).height();
		
		// Calculate new image dimensions
		if($(this).width() > $(this).height()) {
			width	= width;
			height	= parseInt(width / ratio);
		} else {
			width	= parseInt(height * ratio);
			height	= height;
		}
		
		// Calculate top and left vals
		var top = ($(window).height() - height) / 2;
		var left = ($(window).width() - width) / 2;
		
		// Position the clone image
		$(clone).css({ width : width, height : height, cursor : 'pointer' });
		
		// Position the image holder
		$(placeholder).css({ width : width, height : height, top : top, left : left });
		
		// Set back to small size
		$(this).width(200);
	});
	
	// Create the close event
	$('.ir_image').live('click', function() {
		$(this).remove();
		$('.ir_wrapper').remove();
		$('.ir_overlay').remove();
	});
});