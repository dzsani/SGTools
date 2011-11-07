// SG.hu topic banlist v1.0 20111107
// Készítette: dzsani
// Inspiráció: cSuwwi - Drom - http://drom.hu/


// Tiltott felhasználók
// Vesszővel elválasztva sorold fel azokat a felhasználóneveket
// akiket ki akarsz tiltani a témából. Szóközt ne használj!
// Példa: var bl_users = 'név1,név2,név3';

var bl_users = '';



// EZT A RÉSZT NE MÓDOSÍTSD !!!
$(document).ready(function() {
	
	// Iterate over the posts
	$('.topichead').each(function() {
		
		// Find username
		var nick = $(this).find('a[href*="forumuserinfo.php"] img').length ? $(this).find('a[href*="forumuserinfo.php"] img').attr('title') : $(this).find('a[href*="forumuserinfo.php"]').html();
			nick = nick.replace(" - VIP","");
			
		// Hide the comment if its from a banned user
		if(bl_users.indexOf(nick) != -1) {
			$(this).parents('center:first').hide();
		}
	});
});