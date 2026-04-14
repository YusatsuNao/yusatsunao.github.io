$(document).ready(function() {
	$('a[href^="#"]').on('click', function(event) {
		var target = $($(this).attr('href'));

		if (target.length) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 250);
		}
	});
});

window.addEventListener('scroll', function() {
	var nav = document.querySelector('.navigation');
	var scrolledDistance = window.scrollY || window.pageYOffset;
	var oneRem = 500;			  
	if (scrolledDistance > oneRem) {
	nav.classList.add('fixed');
	} else {
	nav.classList.remove('fixed');
	}
});