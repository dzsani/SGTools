// SG.hu topic banlist v1.0 20111107
// Készítette: dzsani
// Inspiráció: cSuwwi - Drom - http://drom.hu/


// Tiltott felhasználók
// Vesszõvel elválasztva sorold fel azokat a felhasználóneveket
// akiket ki akarsz tiltani a témából. Szóközt ne használj!
// Példa: var bl_users = 'név1,név2,név3';

var hl_users = 'Ability';

// EZT A RÉSZT NE MÓDOSÍTSD !!!
$(document).ready(function() {
	
	// Create an array with the nicknames
	hl_users = hl_users.split(',');
	
	// Iterate over the posts
	$('.topichead').each(function() {
		
		// Find username
		var nick = $(this).find('a[href*="forumuserinfo.php"] img').length ? $(this).find('a[href*="forumuserinfo.php"] img').attr('title') : $(this).find('a[href*="forumuserinfo.php"]').html();
			nick = nick.replace(" - VIP","");
			
		// Hide the comment text if its from a banned user
		if(hl_users.indexOf(nick) != -1) {

			// Text element
			var text = $(this).parents('center:first').find('.maskwindow');
			var signature = $(this).parents('center:first').find('.msg-bottom');
			
			// Hide the text and signature
			$(text).hide();
			$(signature).hide();
			
			// Create "show" anchor
			$('<p class="ts_hidden_comment">Moderált felhasználó! Kattints ide az üzenet megtekintéséhez</p>').insertAfter($(text));
		}
	});
	
	// Add some style to the "show" button
	$('.ts_hidden_comment').css({ 'text-align' : 'center', 'font' : 'normal normal normal 13px/16px Arial, serif', 'cursor' : 'pointer' });
	
	// Click event handler to show the message
	$('.ts_hidden_comment').click(function() {
		$(this).parents('center:first').find('.maskwindow').show();
		$(this).parents('center:first').find('.msg-bottom').show();
		$(this).hide();
	});
});