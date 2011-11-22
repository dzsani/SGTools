// SG.hu hide_logos v1.0 20111114
// Készítette: dzsani

// Ezzel a script eltávolítja az összes logót
// és a felhasználónevet teszi a helyére.


// EZT A RÉSZT NE MÓDOSÍTSD !!!
$(document).ready(function() {
	
	$('.topichead').each(function() {
		
		// Comments with logo image
		if($(this).find('a[href*="forumuserinfo.php"] img').length) {
		
			// Find nickname
			var nick = $(this).find('a[href*="forumuserinfo.php"] img').attr('title');
				nick = nick.replace(" - VIP","");
			
			// Remove logo
			$(this).find('a[href*="forumuserinfo.php"] img').remove();
			
			// Insert username
			$(this).find('a[href*="forumuserinfo.php"]').html(nick);
			
			// Insert copyright
			$(this).find('a[href*="forumuserinfo.php"]').before('&nbsp;&copy;&nbsp;');
		}
	});
});
