 $(document).ready(function() {
	////////////////////////////////////////////////
	// [All Pages] Logotype Kerning
	function logotype() {
		$(".hero-title .my-name").lettering();
	}
	logotype();
	////////////////////////////////////////////////
	// [All Pages] Navigation
	$(document).on('click', '.nav-tab', function() {
		$('.nav-content').toggleClass('nav-show');
		$('.nav-tab').toggleClass('nav-close');
	});
	////////////////////////////////////////////////
	// [Case Studies Page] Scrolling Content Controls
	function contentControls() {
		// Switch the Grid Control Button's Active/Inactive State
		function gridControlsUI() {
			// $(this).removeClass('cc-button-inactive');
			// $(this).siblings('.cc-button').addClass('cc-button-inactive');
			$(this).addClass('cc-button-inactive');
			$(this).siblings('.cc-button').removeClass('cc-button-inactive');
		}
		// Show/Hide the Grid Controls (Grid View or Stack View)
		function gridControls() {
			var viewportWidth = $(window).width();
			if(viewportWidth >= 1301) {
				var adjustedViewportHeight = $(window).height() - 100;
				var scrollPosition = $(document).scrollTop();
				if(scrollPosition >= adjustedViewportHeight) {
					$('.content-controls').removeClass('cc-hide');
					$('.content-controls').fadeIn();
				} else {
					$('.content-controls').fadeOut();
				}
			} else {
				setTimeout(function() {
					$('.content-controls').addClass('cc-hide').css('display', 'none');
				}, 1000);
				// $('.content-controls').addClass('cc-hide').css('display', 'none');
			}
			// var adjustedViewportHeight = $(window).height() - 100;
			// var scrollPosition = $(document).scrollTop();
			// if(scrollPosition >= adjustedViewportHeight) {
			// 	$('.content-controls').removeClass('cc-hide');
			// 	$('.content-controls').fadeIn();
			// } else {
			// 	$('.content-controls').fadeOut();
			// }
		}
		// Check if the Grid Controls Should Show or Hide When...
		// ... the Page Loads
		gridControls();
		// ... the Page Scrolls
		$(document).scroll(function() {
			gridControls();
		});
		// Toggle the Grid View Based on User Selection
		$(document).on('click', '.cc-button', function() {
			var view = $(this).attr('data-view');
			var grid = 'cards d3c t1c m1c';
			switch(view) {
				case 'grid':
					$('.overview-content-stack').removeClass(grid);
					$('.card-text-content').hide();
					$('.overview-content-grid').addClass(grid);
					$(this).addClass('cc-button-inactive');
					$(this).siblings('.cc-button').removeClass('cc-button-inactive');
					$(document).scrollTop($(window).height() - 25);
					break;
				case 'stack':
					$('.overview-content-grid').removeClass(grid);
					$('.card-text-content').show();
					$('.overview-content-stack').addClass(grid);
					$(this).addClass('cc-button-inactive');
					$(this).siblings('.cc-button').removeClass('cc-button-inactive');
					$(document).scrollTop($(window).height() - 25);
					break;
				default:
					break;
			}
		});
	}
	contentControls();
	////////////////////////////////////////////////
});
