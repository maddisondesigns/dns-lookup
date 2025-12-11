/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
jQuery( document ).ready( function( $ ) {
	$('body').removeClass('is-loading');

	var	$window = $(window),
		$body = $('body'),
		$main = $('#main'),
		$distance,
		didScroll = false;
		altClass = true;

	if ($('nav').length) {
		$distance = $('nav').offset().top;
	}

	$window.scroll(function() {
		didScroll = true;
	});

	// Add class to nav when it hits top of window
	setInterval(function() {
		if ( didScroll ) {
			didScroll = false;
			if ( $window.scrollTop() >= $distance ) {
				$('nav').addClass('alt');
				altClass = true;
			}
			else if( altClass == true ) {
				$('nav').removeClass('alt');
				altClass = false;
			}
		}
	}, 250);

	// Smooth scrolling
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			// On-page links
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname ) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function() {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						};
					});
				}
			}
		});
} );