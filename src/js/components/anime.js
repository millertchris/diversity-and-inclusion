import anime from 'animejs/lib/anime.es.js';
// import 'waypoints/lib/noframework.waypoints.js';

export default function headlines() {
	function getPosition(element) {
		var xPosition = 0;
		var yPosition = 0;

		while (element) {
			xPosition +=
				element.offsetLeft -
				element.scrollLeft +
				element.clientLeft;
			yPosition +=
				element.offsetTop -
				element.scrollTop +
				element.clientTop;
			element = element.offsetParent;
		}

		return { x: xPosition, y: yPosition };
	}

	function animateScroll(el, animation) {
		window.addEventListener('scroll', () => {
			// console.log(window.pageYOffset);

			var position = getPosition(el);

			console.log(position.y / window.pageYOffset - 0.9);

			animation.seek((window.pageYOffset / position.y) * 100);
		});
	}

	// Create a timeline with default parameters
	var tl = anime.timeline({
		easing: 'easeOutExpo',
		duration: 300,
	});

	// Add children
	tl.add({
		targets: '.hero .line',
		translateY: [250, 0],
		duration: 1800,
		easing: 'cubicBezier(0.400, 0.020, 0.030, 1.005)',
		delay: anime.stagger(1200), // increase delay by 100ms for each elements.
	});
	tl.add({
		targets: '.hero .label',
		opacity: [0, 1],
		duration: 1200,
		easing: 'cubicBezier(0.400, 0.020, 0.030, 1.005)',
	});
	tl.add({
		targets: '.hero .fal',
		opacity: [0, 1],
		duration: 1200,
		easing: 'cubicBezier(0.400, 0.020, 0.030, 1.005)',
	});
	tl.add({
		targets: '.logo',
		opacity: [0, 1],
		duration: 4000,
		easing: 'cubicBezier(0.400, 0.020, 0.030, 1.005)',
		complete: function (anim) {
			var heroElements = anime({
				targets: [
					'.hero .label',
					'.hero .line',
					'.hero .fal',
				],
				opacity: [1, 0],
				delay: anime.stagger(50), // increase delay by 100ms for each elements.
				autoplay: false,
			});

			// animateScroll(heroElements, 3000);
		},
	});

	// Make the arrow bounce
	anime({
		targets: '.hero .fal',
		translateY: [0, 20, 0],
		loop: true,
		duration: 2000,
		easing: 'easeInOutSine',
	});

	var fadeOut = document.querySelectorAll('.fade-out');
	var animeSetup = [];

	fadeOut.forEach((element, i) => {
		animeSetup[i] = anime({
			targets: fadeOut,
			opacity: [1, 0],
			delay: anime.stagger(50), // increase delay by 100ms for each elements.
			autoplay: false,
		});
	});

	animeSetup.forEach((element, i) => {
		animateScroll(fadeOut[i], element);
	});
}
