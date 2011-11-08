// SG.hu read_only_topic v1.0 20111107
// Készítette: dzsani
// Inspiráció: cSuwwi - Drom - http://drom.hu/

// Mûködési mód
// 0: fehérlista, 1: feketelista
// Ha nullán hagyod, akkor azok írhatnak a topikba,
// akiket felsorolsz a lentebbi névlistába.
// Ha egyre állítod, akkor mindenki írhat, kivéve
// a lentebb felsorolt felhasználók.

var rot_mode = 1;

// Felhasználók fehérlistája
// Vesszõvel elválasztva sorold fel azokat a felhasználóneveket
// akiknek engedélyezed az üzenetküldést. Szóközt ne használj!
// Példa: var pt_users = 'név1,név2,név3';

var rot_users = '';


// EZT A RÉSZT NE MÓDOSÍTSD !!!
$(document).ready(function(){rot_users=rot_users.split(',');$('form[name="newmessage"] a:last').click(function(e){var a=$('.std1:eq(1)').html().replace("Bejelentkezve: ","");if(rot_mode==0){if(rot_users.indexOf(a)==-1){e.preventDefault();alert('Nincs jogosultságod üzenetet küldeni ebbe a témába!')}}else{if(rot_users.indexOf(a)!=-1){e.preventDefault();alert('Nincs jogosultságod üzenetet küldeni ebbe a témába!')}}})});