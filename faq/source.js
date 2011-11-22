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
$(document).ready(function() {
	
	// Create overlay
	$('<div id="faq_overlay"></div>').prependTo('body');
	
	// Apply some styles to overlay
	$('#faq_overlay').css({ width : '100%', height : '100%', display : 'none', position : 'fixed', backgroundColor : '#bbb', zIndex : 500, textAlign : 'left', overflow : 'auto' });
	
	// Position out from viewport
	$('#faq_overlay').css({ top : '-'+$(window).height()+'px' });
	
	// Create FAQ wrapper
	$('<div id="faq_wrapper"></div>').prependTo('#faq_overlay');
	
	// Apple some styles to wrapper
	$('#faq_wrapper').css({ width : 850, margin : '0px auto', textAlign : 'justify' });
	
	// Create close button
	$('<a href="#" id="faq_close">bezárás</a>').prependTo('body');
	
	// Apply some styles to close button
	$('#faq_close').css({ position : 'fixed', bottom : 10, right : 10, display : 'none', zIndex : 501, color : '#fff', textDecoration : 'none' });
	
	// Set show event
	$('#faq_toggle').click(function(e) {
		
		// Prevent browser default submission
		e.preventDefault();

		// Resize the html and body to prevent scrollbars
		$('html,body').css({ height : $(window).height(), overflow : 'hidden' });

		// Show the FAQ
		$('#faq_overlay').css({ display : 'block' }).animate({ top : 0 }, 500);
		$('#faq_close').css({ display : 'block' });
	});
	
	// Set hide event
	$('#faq_close').click(function(e) {

		// Prevent browser default submission
		e.preventDefault();

		// Show the FAQ
		$('#faq_overlay').animate({ top : '-'+$(window).height()+'px' }, 500, function() {
			
			// Hide the FAQ
			$('#faq_overlay').css({ display : 'none' });
			$('#faq_close').css({ display : 'none' });

			// Resotre body and html original size
			$('html,body').css({ height : 'auto', overflow : 'auto' });
		});
	});
	
	// Place questions wrapper
	$('<ul id="faq_questions"></ul>').appendTo('#faq_wrapper').css({ listStyleType : 'square', paddingBottom: 15, borderBottom : '1px solid #000' });
	
	// Place anwsers wrapper
	$('<div id="faq_answers"></div>').appendTo('#faq_wrapper');
	
	// Place questions
	$('#faq_list li h1').each(function(index) {
		$('<li><a href="#faq_'+(index+1)+'">'+$(this).html()+'</a></li>').appendTo('#faq_questions').find('a').css({ color : '#000', textDecoration : 'none'});
	});
	
	// Place answers
	$('#faq_list li').each(function(index) {
		$('<a name="faq_'+(index+1)+'"></a>').appendTo('#faq_answers');
		$('<h1>'+$(this).find('h1').html()+'</h1>').appendTo('#faq_answers').css({ font : 'normal normal bold 22px/30px Arial, serif' });
		$('<div></div>').appendTo('#faq_answers').html($(this).find('div').html()).css({ marginBottom: 10 });
	});

	// Finally, remove the original FAQ list
	$('#faq_list').remove();
});