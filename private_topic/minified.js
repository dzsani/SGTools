// SG.hu topic private_topic v1.0 20111107
// Készítette: dzsani
// Inspiráció: cSuwwi - Drom - http://drom.hu/


// Felhasználók fehérlistája
// Vesszõvel elválasztva sorold fel azokat a felhasználóneveket
// akiknek engedélyezed a topikba lépést. Szóközt ne használj!
// Példa: var pt_users = 'név1,név2,név3';

var pt_users = '';


// EZT A RÉSZT NE MÓDOSÍTSD !!!
$(document).ready(function(){pt_users=pt_users.split(',');var a=$('.std1:eq(1)').html().replace("Bejelentkezve: ","");if(pt_users.indexOf(a)==-1){alert('Ez egy privát téma, nincs jogosultságod az olvasásához!');history.go(-1)}});