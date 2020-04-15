 $(document).ready(function() {
	////////////////////////////////////////////////
	// Purpose: Logotype Kerning
	// View: All Views
	// Dependencies: jquery, lettering.js
	////////////////////////////////////////////////
	function logotype() {
		$(".hero-title .my-name").lettering();
	}
	logotype();
	////////////////////////////////////////////////
	// Purpose: Navigation
	// View: All Views
	// Dependencies: jquery
	////////////////////////////////////////////////
	$(document).on('click', '.nav-tab', function() {
		$('.nav-content').toggleClass('nav-show');
		$('.nav-tab').toggleClass('nav-close');
	});
	////////////////////////////////////////////////
	// Purpose: Scrolling Content Controls
	// View: Case Studies View
	// Dependencies: jquery
	////////////////////////////////////////////////
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
	// Purpose: SVG Timeline
	// View: Case Studies View
	// Dependencies: jquery, svg.js
	////////////////////////////////////////////////
	function drawTimelineSVG() {

		// Get the SVG Parent container height, used for the SVG Container's Overall Height
		var containerHeight = $('.timeline-content').height(); // 105, 77

		// Get the starting and ending coordinates for the timeline
		var lineStart = $('.interval').first().position().top + 1;
		var lineEnd = $('.subinterval').last().position().top - 1;

		// Add the SVG to the DOM in our specified timeline track div
		var draw = SVG().addTo('#timeline-track').size(25, containerHeight);

		// [Rear Line] Draw the timeline's path with a line, Note that .line(x1, y1, x2, y2)
		var lineBottom = draw.line(12.5, lineStart, 12.5, lineEnd).stroke({
			color: '#e3e3e3',
			width: 2
		});

		// [Front Line] Draw the timeline's path with a line, Note that .line(x1, y1, x2, y2)
		// var lineTop = draw.line(12.5, 7.5, 12.5, lineHeight).attr('stroke-dasharray', '5,5').stroke({
		var lineTop = draw.line(12.5, lineStart, 12.5, lineEnd).attr('stroke-dasharray', '5,5').stroke({
			color: '#030b08',
			width: 2
		});

		// Draw SVG Circles for Primary Intervals
		$('.timeline-content > .interval').each(function() {
			var yCoordinate = $(this).position().top;
			var yForOuterCircle = Math.round(yCoordinate) + 2;
			var yForInnerCircle = Math.round(yCoordinate) + 6;

			// Draw Outer Circles at Each Interval
			draw.circle(15, 15).move(5, yForOuterCircle).fill('#FFF').stroke({
				width: 2,
				color: '#030b08'
			});

			// Draw Inner Circles at Each Interval
			draw.circle(7, 7).move(9, yForInnerCircle).fill('#04D786').stroke({
				width: 2,
				color: '#030b08'
			});

		});

		$('.timeline-content > .subinterval').each(function() {
			var yCoordinate = $(this).position().top;
			var yForSubIntervalCircle = Math.round(yCoordinate) + 5;

			// Draw Outer Circles at Each Interval
			draw.circle(7, 7).move(9, yForSubIntervalCircle).fill('#FFF').stroke({
				width: 2,
				color: '#030b08'
			});

		});
	}
	// Wait for the DOM to load...then draw the timeline [RECOMMENDED METHOD - Not working?]
	// SVG.on(document, 'DOMContentLoaded', function() {
	// 	drawTimelineSVG();
	// });
	drawTimelineSVG();
	// For responsiveness, when the window is resized re-draw the timeline
	$(window).resize(function() {
		// Remove the current timeline SVG from the DOM
		$('#timeline-track > svg').remove();
		// Draw the new timeline SVG
		drawTimelineSVG();
	});
	////////////////////////////////////////////////
	// Purpose: Modal
	// View: Case Study View
	// Dependencies: jquery
	////////////////////////////////////////////////
	function modal() {
		// Load the image into the modal before the user selects it using the thumbnail
		$(document).on('mouseover', '.modal_trigger--open', function() {

			// Get the image's path, alt attribute, data-description, and data-hex attribute from the image thumbnail
			var imgPath = $(this).attr('src');
			var imgTitle = $(this).attr('alt');
			var imgDescription = $(this).attr('data-description');
			var imgBGHexColor = $(this).attr('data-hex-bg');
			var imgAccentBGHexColor = $(this).attr('data-hex-accent-bg');
			var imgAccentBorderHexColor = $(this).attr('data-hex-accent-border');

			// Add the image path to the modal's empty placeholder
			$('.modal_card > .modal_img').attr('src', imgPath).attr('alt', imgTitle);
			// Add the image title to the modal's empty placeholder
			$('.modal_type > .title').text(imgTitle);
			// Add the image description to the modal's empty placeholder
			$('.modal_type > .copy').text(imgDescription);
			// Use the image's dominant hex color as the modal background color
			$('.modal > .modal_bg').css('background', imgBGHexColor);
			//
			$('.modal > .modal_close').css('background', imgAccentBGHexColor);
			//
			$('.modal > .modal_close').css('border-color', imgAccentBorderHexColor);
			$('.modal_close > .material-icons').css('color', imgAccentBorderHexColor);
		});

		// Open the modal
		$(document).on('click', '.modal_trigger--open', function() {
			// Show the modal and the modal's background
			$('.modal_bg, .modal').removeClass('modal--hide').addClass('modal--show');
		});

		// Close the modal
		$(document).on('click', '.modal_trigger--close', function() {
			// Hide the modal and the modal's background
			$('.modal_bg, .modal').removeClass('modal--show').addClass('modal--hide');
			// Remove the image path, alt attribute, image title and image description
			$('.modal_card > .modal_img').attr('src', '').attr('alt', '');
			$('.modal_type > .title, .modal_type > .copy').text('');
		});

	}
	modal();
	////////////////////////////////////////////////
	// Purpose: Modal
	// View: Case Study View
	// Dependencies: jquery, node-vibrant
	// Notes: Images should have the .color class and the data-hex="" attribute
	////////////////////////////////////////////////
	function extractColors() {
		$('img.color').each(function() {
			// This image
			var $thisImage = $(this);
			// This image's Path
			var imgPath = $thisImage.attr('src');
			// Get the dominant color using node-vibrant
				// node-vibrant Configuration
				var vibrantConfig = {
					colorCount: 3
				};
				// Instantiate node-vibrant
				var v = new Vibrant(imgPath, vibrantConfig);
				// Resolve the Promise from node-vibrant and get the hex value for this image
				var colorPalette = v.getPalette()
								.then(function(value) {
									console.log(value);
									// The images most dominant hex color, [NOTE FOR THE FUTURE] the "value" object contains much more color options ()
									var hexColor = value.Vibrant.hex;
									//
									var hexAccentBG = value.LightVibrant.hex;
									//
									var hexAccentBorder = value.LightMuted.hex;
									// Set the image's hex attribute with it's dominant hex color
									$thisImage.attr('data-hex-bg', hexColor);
									//
									$thisImage.attr('data-hex-accent-bg', hexAccentBG);
									//
									$thisImage.attr('data-hex-accent-border', hexAccentBorder);
								});
		});
	}
	extractColors();
});
