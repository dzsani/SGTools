// SG.hu topic read_only_topic v1.0 20111107
// Készítette: dzsani
// Inspiráció: cSuwwi - Drom - http://drom.hu/


// Felhasználók fehérlistája
// Vesszõvel elválasztva sorold fel azokat a felhasználóneveket
// akiknek engedélyezed az üzenetküldést. Szóközt ne használj!
// Példa: var pt_users = 'név1,név2,név3';

var rot_users = '';


// EZT A RÉSZT NE MÓDOSÍTSD !!!
$(document).ready(function() {
	
	// Create an array with the nicknames
	rot_users = rot_users.split(',');	
	
	// Submit event
	$('form[name="newmessage"] a:last').click(function(e) {

		// Get nickname
		var nick = $('.std1:eq(1)').html().replace("Bejelentkezve: ","");
		
		// Check user
		if(rot_users.indexOf(nick) == -1) {
			
			// Prevent browser default submission
			e.preventDefault();
			
			// Show error message
			alert('Nincs jogosultságod üzenetet küldeni ebbe a témába!');
		}
	});
	
});