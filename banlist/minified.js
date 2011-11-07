// SG.hu topic banlist v1.0 20111107
// Készítette: dzsani
// Inspiráció: cSuwwi - Drom - http://drom.hu/


// Tiltott felhasználók
// Vesszõvel elválasztva sorold fel azokat a felhasználóneveket
// akiket ki akarsz tiltani a témából. Szóközt ne használj!
// Példa: var bl_users = 'név1,név2,név3';

var bl_users = '';

// EZT A RÉSZT NE MÓDOSÍTSD !!!
$(document).ready(function(){bl_users=bl_users.split(',');$('.topichead').each(function(){var a=$(this).find('a[href*="forumuserinfo.php"] img').length?$(this).find('a[href*="forumuserinfo.php"] img').attr('title'):$(this).find('a[href*="forumuserinfo.php"]').html();a=a.replace(" - VIP","");if(bl_users.indexOf(a)!=-1){$(this).parents('center:first').hide()}})});