$(document).ready(function() {
	
	/* Navigation dropdowns */
	
	
	$('#main-nav > li').hover(
		function() {
			
			$( this ).find('.topItem + .sub-nav').animate({
				opacity: .8
			}, 300);
			
		},
		function() {
			
			$( this ).find('.topItem + .sub-nav').animate({
				opacity: 0
			}, 300);
	
		}
	);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});