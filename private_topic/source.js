// SG.hu private_topic v1.0 20111108
// Készítette: dzsani
// Inspiráció: cSuwwi - Drom - http://drom.hu/

// Mûködési mód
// 0: fehérlista, 1: feketelista
// Ha nullán hagyod, akkor azok léphetnek be a topikba,
// akiket felsorolsz a lentebbi névlistába.
// Ha egyre állítod, akkor mindenki beléphet, kivéve
// a lentebb felsorolt felhasználók.

var pt_mode = 1;

// Felhasználók fehérlistája
// Vesszõvel elválasztva sorold fel azokat a felhasználóneveket
// akiknek engedélyezed a topikba lépést. Szóközt ne használj!
// Példa: var pt_users = 'név1,név2,név3';

var pt_users = '';


// EZT A RÉSZT NE MÓDOSÍTSD !!!
$(document).ready(function() {

	// Create an array with the nicknames
	pt_users = pt_users.split(',');

	// Get nickname
	var nick = $('.std1:eq(1)').html().replace("Bejelentkezve: ","");
	
	// Check user
	if(pt_mode == 0) {
		if(pt_users.indexOf(nick) == -1) { pt_redirectBack(); }
	} else {
		if(pt_users.indexOf(nick) != -1) { pt_redirectBack(); }
	}
	
	// Hide layer plus redirect back
	function pt_redirectBack() {
		alert('Ez egy privát téma, nincs jogosultságod az olvasásához!');
		history.go(-1)
	}
});