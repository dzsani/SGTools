// SG.hu topic hidelist v1.0 20111107
// Készítette: dzsani
// Inspiráció: cSuwwi - Drom - http://drom.hu/


// Rejtett felhasználók
// Vesszõvel elválasztva sorold fel azokat a felhasználóneveket
// akiket ki akarsz tiltani a témából. Szóközt ne használj!
// Példa: var hl_users = 'név1,név2,név3';

var hl_users = 'Ability';

// EZT A RÉSZT NE MÓDOSÍTSD !!!
$(document).ready(function(){hl_users=hl_users.split(',');$('.topichead').each(function(){var a=$(this).find('a[href*="forumuserinfo.php"] img').length?$(this).find('a[href*="forumuserinfo.php"] img').attr('title'):$(this).find('a[href*="forumuserinfo.php"]').html();a=a.replace(" - VIP","");if(hl_users.indexOf(a)!=-1){var b=$(this).parents('center:first').find('.maskwindow');var c=$(this).parents('center:first').find('.msg-bottom');$(b).hide();$(c).hide();$('<p class="ts_hidden_comment">Moderált felhasználó! Kattints ide az üzenet megtekintéséhez</p>').insertAfter($(b))}});$('.ts_hidden_comment').css({'text-align':'center','font':'normal normal normal 13px/16px Arial, serif','cursor':'pointer'});$('.ts_hidden_comment').click(function(){$(this).parents('center:first').find('.maskwindow').show();$(this).parents('center:first').find('.msg-bottom').show();$(this).hide()})});