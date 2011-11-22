// SG.hu disable_point_system v1.0 20111113
// Készítette: dzsani

// Készítsd el a GYIK vázát az alábbi kód alapján!

//	<ul id="faq_list">
//		<li>
//			<h1>Kérdés</h1>
//			<div>Válasz</div>
//		</li>
//		<li>
//			<h1>Kérdés2</h1>
//			<div>Válasz2</div>
//		</li>
//	</ul>

// Tedd be a gombot amivel megjeleníted a GYIK-et!

//	<a href="#" id="faq_toggle">Gyakran Ismételt Kérdések</a>

// EZT A RÉSZT NE MÓDOSÍTSD !!!
$(document).ready(function(){$('<div id="faq_overlay"></div>').prependTo("body");$("#faq_overlay").css({width:"100%",height:"100%",display:"none",position:"fixed",backgroundColor:"#bbb",zIndex:500,textAlign:"left",overflow:"auto"});$("#faq_overlay").css({top:"-"+$(window).height()+"px"});$('<div id="faq_wrapper"></div>').prependTo("#faq_overlay");$("#faq_wrapper").css({width:850,margin:"0px auto",textAlign:"justify"});$('<a href="#" id="faq_close">bezárás</a>').prependTo("body");$("#faq_close").css({position:"fixed",left:10,top:10,display:"none",zIndex:501,color:"#fff",textDecoration:"none"});$("#faq_toggle").click(function(a){a.preventDefault();$("html,body").css({height:$(window).height(),overflow:"hidden"});$("#faq_overlay").css({display:"block"}).animate({top:0},500);$("#faq_close").css({display:"block"})});$("#faq_close").click(function(a){a.preventDefault();$("#faq_overlay").animate({top:"-"+$(window).height()+"px"},500,function(){$("#faq_overlay").css({display:"none"});$("#faq_close").css({display:"none"});$("html,body").css({height:"auto",overflow:"auto"})})});$('<ul id="faq_questions"></ul>').appendTo("#faq_wrapper").css({listStyleType:"square",paddingBottom:15,borderBottom:"1px solid #000"});$('<div id="faq_answers"></div>').appendTo("#faq_wrapper");$("#faq_list li h1").each(function(a){$('<li><a href="#faq_'+(a+1)+'">'+$(this).html()+"</a></li>").appendTo("#faq_questions").find("a").css({color:"#000",textDecoration:"none"})});$("#faq_list li").each(function(a){$('<a name="faq_'+(a+1)+'"></a>').appendTo("#faq_answers");$("<h1>"+$(this).find("h1").html()+"</h1>").appendTo("#faq_answers").css({font:"normal normal bold 22px/30px Arial, serif"});$("<div></div>").appendTo("#faq_answers").html($(this).find("div").html()).css({marginBottom:10})});$("#faq_list").remove()})