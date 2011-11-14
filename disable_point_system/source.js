// SG.hu disable_point_system v1.0 20111113
// Készítette: dzsani
// Inspiráció: cSuwwi - Drom - http://drom.hu/

// Ezzel a scripttel teljesen kikapcsolhatod a
// pontrendszert.

<style type="text/css">
	.ertekelkep { display: none; }
</style>

<script type="text/javascript">
	$(document).ready(function(){
		$('.msg-text').each(function() {
			$(this).next().click();
		});
	});
</script>