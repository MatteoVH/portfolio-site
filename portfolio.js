$(document).ready(function() {
	$('.site-img').click(function() {
		$(this).next().toggle(200);
	});
	$('a[href*=#]').on('click', function(event){     
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 400);
	});

	$('.tooltip').tooltipster();
});
