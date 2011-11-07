// SG.hu topic read_only_topic v1.0 20111107
// Készítette: dzsani
// Inspiráció: cSuwwi - Drom - http://drom.hu/


// Felhasználók fehérlistája
// Vesszõvel elválasztva sorold fel azokat a felhasználóneveket
// akiknek engedélyezed az üzenetküldést. Szóközt ne használj!
// Példa: var pt_users = 'név1,név2,név3';

var rot_users = '';


// EZT A RÉSZT NE MÓDOSÍTSD !!!
$(document).ready(function(){rot_users=rot_users.split(',');$('form[name="newmessage"] a:last').click(function(e){var a=$('.std1:eq(1)').html().replace("Bejelentkezve: ","");if(rot_users.indexOf(a)==-1){e.preventDefault();alert('Nincs jogosultságod üzenetet küldeni ebbe a témába!')}})});