// SG.hu post_awards v1.0 20111112
// K�sz�tette: dzsani
// Inspir�ci�: cSuwwi - Drom - http://drom.hu/

// Awards lista Objektum
// Az objektum elemei k�z�l egyed�l a nick elemet k�telez� megadni,
// a t�bbi tetsz�s szerint elhagyhat�. Az objektum lehets�ges elemeit
// lentebb l�thatod.

// Az awards objektum lehets�ges elemei:
// - nick: k�telez�, keresett felhaszn�l�
// - placeholder: elhagyhat�, 0: log� ut�n, 1: kommentazonos�t� el�, alap�rtelmezett: 1 
// - image: elhagyhat�, k�pet sz�r be, egy k�p URL-j�t kell megadni
// - text: elhagyhat�, egy sz�veget sz�r be a script
// - tooltip: elhagyhat�, eg�rrel a besz�rt elemek f�l� �llva ki�rja az itt megadott sz�veget
// - color: elhagyhat�, a besz�rt sz�veg sz�n�t lehet megadni vele
// - url: elhagyhat�, a besz�rt k�pet �svagy sz�veget lehet linkelni vele

// P�lda:

// var aw_users = [
//		{ nick : 'Ability', placeholder : 0, image : '/kep/faces/vigyor3.gif' },
// 		{ nick : 'dzsaniii', placeholder : 1, text : 'Alreg' }
// ];

var aw_users = [
		{ nick : '', placeholder : 0 },
];

// EZT A R�SZT NE M�DOS�TSD !!!
$(document).ready(function(){$(".topichead").each(function(){var a=$(this).find('a[href*="forumuserinfo.php"] img').length?$(this).find('a[href*="forumuserinfo.php"] img').attr("title"):$(this).find('a[href*="forumuserinfo.php"]').html();a=a.replace(" - VIP","");for(c=0;c<aw_users.length;c++){if(a==aw_users[c]["nick"]){if(typeof aw_users[c]["placeholder"]!="undefined"&&aw_users[c]["placeholder"]==0){var b=$("<span></span>").appendTo($(this).find("td.left:eq(1)"))}else{var b=$("<span></span>").insertAfter($(this).find("a:last").prev());$("<span> | </span>").insertBefore(b)}if(typeof aw_users[c]["image"]!="undefined"&&aw_users[c]["image"]!=""){$('<img src="'+aw_users[c]["image"]+'" align="absmiddle">').appendTo(b).css("border",0)}if(typeof aw_users[c]["text"]!="undefined"&&aw_users[c]["text"]!=""){$("<span> "+aw_users[c]["text"]+"</span>").appendTo(b)}if(typeof aw_users[c]["url"]!="undefined"&&aw_users[c]["url"]!=""){$(b).find("img, span").wrap('<a href="'+aw_users[c]["url"]+'" target="_blank">');$(b).find("a").css({"text-decoration":"none",color:"#fff"})}if(typeof aw_users[c]["color"]!="undefined"&&aw_users[c]["color"]!=""){$(b).find("a, span").css("color",aw_users[c]["color"])}if(typeof aw_users[c]["tooltip"]!="undefined"&&aw_users[c]["tooltip"]!=""){$(b).find("img, span, a").attr("title",aw_users[c]["tooltip"])}}}})})