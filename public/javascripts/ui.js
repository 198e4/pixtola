$(document).ready(function() {
	////////////////////////////////////////////////
	// Logotype Kerning
	function logotype() {
		$(".hero-title").lettering();
	}
	logotype();
	////////////////////////////////////////////////
	// Navigation
	$(document).on('click', '.nav-tab', function() {
		$('.nav-content').toggleClass('nav-show');
		$('.nav-tab').toggleClass('nav-close');
	});
	////////////////////////////////////////////////
	// Scrolling Content Controls
	function contentControls() {

		$(document).scroll(function() {

			var vH = $(window).height() - 100;
			var scrollPosition = $(document).scrollTop();

			console.log('VH is: ' + vH);
			console.log('S is: ' + scrollPosition);

			if(scrollPosition >= vH) {
				$('.content-controls').removeClass('cc-hide');
				$('.content-controls').fadeIn();
			} else {
				$('.content-controls').fadeOut();
			}

		});
	}
	contentControls();
	////////////////////////////////////////////////
});
