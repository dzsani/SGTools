// SG.hu disable_point_system v1.0 20111113
// Készítette: dzsani
// Inspiráció: cSuwwi - Drom - http://drom.hu/

// Ezzel a scripttel teljesen kikapcsolhatod a
// pontrendszert.

function dps_valaszmsg(a,b,c,d){if($("#"+a).css("display")!="block"){var e="/listazas_egy.php3?callerid=2&id="+b+"&no="+c;$.get(e,function(b){$("#"+a).html(b).show();dps_hidePointButtons();dps_overrideQuotes()})}else{$("#"+a).hide()}}function dps_overrideQuotes(){$(".msg-replyto a").unbind("click").click(function(e){e.preventDefault();var _params=$(this).attr("href").split(":");eval("dps_"+_params[1]+"")})}function dps_hidePointButtons(){$('.topichead .ertekelkep, .topichead span[id*="rates"]').hide();$(".msg-text").show();$(".msg-text").each(function(){if($(this).next().attr("id")=="leful"){$(this).next().hide()}})}$(document).ready(function(){dps_hidePointButtons();dps_overrideQuotes()})
