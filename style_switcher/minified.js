// SG.hu style_switcher v1.0 20111217
// Készítette: dzsani

// Stíluslista
// Itt sorold fel hogy milyen skinek legyenek
// és azokhoz milyen CSS + JS tartozik. Példa:
//
// var sw_styles = new Array();
// sw_styles.push({ css : ['link1.css', 'link2,css'], js : ['link1.js'] });
// sw_styles.push({ css : ['link3.css'], js : ['link2.js'] });


var sw_styles = new Array();
	sw_styles.push({ css : [''], js : [''] });



// Alapértelmezett skin sorszáma
// Nullától kezdődik a sorszám, nulla az első elem
// False ha mellőzni akarjuk a skinek betöltését
var sw_default = 0;


// HASZNÁLAT - gombok a topikba
// <a href="javascript:style_switcher.switchTo(false);">Nincs téma</a>
// <a href="javascript:style_switcher.switchTo(0);">Első téma</a>
// <a href="javascript:style_switcher.switchTo(1);">Második téma</a>



// EZT A RÉSZT NE MÓDOSÍTSD !!!
var style_switcher={init:function(){var a=style_switcher.getTopicId();var b=style_switcher.getSkin(a);if(b===false||b=="false"){return}style_switcher.loadSkin(b)},switchTo:function(a){var b=style_switcher.getTopicId();style_switcher.setCookie("skin_"+b,a,100);window.location.reload()},getTopicId:function(){return document.location.href.split("?")[1].split("&")[0].split("=")[1]},getSkin:function(a){var b=style_switcher.getCookie("skin_"+a);if(typeof b=="undefined"&&b==null){return sw_default}else{return b}},loadSkin:function(a){if(typeof sw_styles[a]["css"]!="undefined"){for(c=0;c<sw_styles[a]["css"].length;c++){if(sw_styles[a]["css"][c]!=""){$('<link type="text/css" href="'+sw_styles[a]["css"][c]+'" rel="stylesheet">').appendTo("head")}}}if(typeof sw_styles[a]["js"]!="undefined"){for(c=0;c<sw_styles[a]["js"].length;c++){if(sw_styles[a]["js"][c]!=""){$('<script type="text/javascript" src="'+sw_styles[a]["js"][c]+'"></script>').appendTo("head")}}}},setCookie:function(a,b,c){var d=new Date;d.setDate(d.getDate()+c);var e=escape(b)+(c==null?"":"; expires="+d.toUTCString());document.cookie=a+"="+e},getCookie:function(a){var b,c,d,e=document.cookie.split(";");for(b=0;b<e.length;b++){c=e[b].substr(0,e[b].indexOf("="));d=e[b].substr(e[b].indexOf("=")+1);c=c.replace(/^\s+|\s+$/g,"");if(c==a){return unescape(d)}}}};$(document).ready(function(){style_switcher.init()})