// SG.hu remove_ads v1.0 20111113
// Készítette: dzsani
// Inspiráció: cSuwwi - Drom - http://drom.hu/

// Ezzel a scripttel eltüntetheted az összes
// reklámot egy témából.

$(document).ready(function() {
	$('img[src*="hirdetes.gif"]').parent().remove();
});