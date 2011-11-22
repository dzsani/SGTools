// SG.hu hide_logos v1.0 20111114
// Készítette: dzsani


// Ezzel a script eltávolítja az összes logót
// és a felhasználónevet teszi a helyére.


// EZT A RÉSZT NE MÓDOSÍTSD !!!
$(document).ready(function(){$(".topichead").each(function(){if($(this).find('a[href*="forumuserinfo.php"] img').length){var a=$(this).find('a[href*="forumuserinfo.php"] img').attr("title");a=a.replace(" - VIP","");$(this).find('a[href*="forumuserinfo.php"] img').remove();$(this).find('a[href*="forumuserinfo.php"]').html(a);$(this).find('a[href*="forumuserinfo.php"]').before(" © ")}})})
