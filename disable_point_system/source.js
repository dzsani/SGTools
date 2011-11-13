// SG.hu disable_point_system v1.0 20111113
// Készítette: dzsani
// Inspiráció: cSuwwi - Drom - http://drom.hu/

// Ezzel a scripttel teljesen kikapcsolhatod a
// pontrendszert.

function dps_hidePointButtons() {

	// Hide the point buttons
	$('.topichead .ertekelkep, .topichead span[id*="rates"]').hide();
	
	// Show the messages text
	$('.msg-text').show();
	
	// Hide show buttons
	$('.msg-text').each(function() {
		if( $(this).next().attr('id') == 'leful') {
			$(this).next().hide();
		}
	});
}

function dps_overrideQuotes() {

	$('.msg-replyto a').unbind('click').click(function(e) {
	
		// Prevent default submisson
		e.preventDefault();
		
		// Get original link params
		var _params = $(this).attr('href').split(':');
		
		// Run replacement funciton
		eval('dps_'+_params[1]+'');
	}); 
}

function dps_valaszmsg(target, id, no, callerid) {

	// Show the message
	if ($('#'+target).css('display') != 'block') {
		
		// URL to call
		var url = '/listazas_egy.php3?callerid=2&id=' + id + '&no=' + no;
		
		// Make the call
		$.get(url, function(data) {

			// Show the comment
			$('#'+target).html(data).show();
			
			// Hide the buttons
			dps_hidePointButtons();
			
			// Override quotes
			dps_overrideQuotes();
		});
	
	// Hide the message
	} else { $('#'+target).hide(); }
}

$(document).ready(function() {
	
	// Hide buttons on page load
	dps_hidePointButtons();
	
	// Override quotes
	dps_overrideQuotes();
});
