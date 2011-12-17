// SG.hu style_switcher v1.0 20111217
// Készítette: dzsani

// Stíluslista
// Itt sorold fel hogy milyen skinek legyenek
// és azokhoz milyen CSS + JS tartozik. Példa:
//
// var sw_styles = new Array();
// sw_styles.push({ css : 'link1.css', js : 'link1.js' });
// sw_styles.push({ css : 'link2.css', js : 'link2.js' });


var sw_styles = new Array();
	sw_styles.push({ css : '', js : '' });
	sw_styles.push({ css : '', js : '' });



// Alapértelmezett skin sorszáma
// Nullától kezdődik a sorszám, nulla az első elem
// False ha mellőzni akarjuk a skinek betöltését
var sw_default = 0;


// HASZNÁLAT - gombok a topikba
// <a href="javascript:style_switcher.switchTo(false);">Nincs téma</a>
// <a href="javascript:style_switcher.switchTo(0);">Első téma</a>
// <a href="javascript:style_switcher.switchTo(1);">Második téma</a>



// EZT A RÉSZT NE MÓDOSÍTSD !!!
var style_switcher = {

	init : function() {
	
		// Get topic ID
		var id = style_switcher.getTopicId();
		
		// Get skin
		var skin = style_switcher.getSkin( id );

		// Return when no default skin set
		if(skin === false || skin == 'false') {
			return;
		}
		
		// Load the skin
		style_switcher.loadSkin( skin );
	},
	
	switchTo : function( skin ) {
		
		// Get topic ID
		var id = style_switcher.getTopicId();
		
		// Save new value
		style_switcher.setCookie( 'skin_'+id, skin, 100 );
		
		// Reload the topic
		window.location.reload();
	},

	getTopicId : function() {

		return document.location.href.split('?')[1].split('&')[0].split('=')[1];
	},
	
	getSkin : function( id ) {
	
		var skin = style_switcher.getCookie('skin_'+id);
			
			if(typeof skin == 'undefined' && skin == null) {
				return sw_default;
			} else {
				return skin;
			}
	},
	
	loadSkin : function( skin ) {
	
		// CSS

		if(typeof sw_styles[skin]['css'] != 'undefined' && sw_styles[skin]['css'] != '') {
			$('<link type="text/css" href="'+sw_styles[skin]['css']+'" rel="stylesheet">').appendTo('head');
		}
		
		// JS
		if(typeof sw_styles[skin]['js'] != 'undefined' && sw_styles[skin]['js'] != '') {
			$('<script type="text/javascript" src="'+sw_styles[skin]['js']+'"></script>').appendTo('head');
		}
	},
	
	setCookie : function( c_name, value, exdays ) {
		var exdate=new Date();
		exdate.setDate(exdate.getDate() + exdays);
		var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
		document.cookie=c_name + "=" + c_value;
	},


	getCookie : function( c_name ) {
		var i,x,y,ARRcookies=document.cookie.split(";");
		for (i=0;i<ARRcookies.length;i++) {
			x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
			y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
			x=x.replace(/^\s+|\s+$/g,"");
			if (x==c_name) {
				return unescape(y);
			}
		}
	}
};


$(document).ready(function() {
	style_switcher.init();
});
