import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import 'waypoints/lib/noframework.waypoints.js';

export default function headlines() {
	// Stuff here
	console.log('Running animations');

	Splitting();

	var mightyBlocks = document.querySelectorAll('.block');
	for (var i = 0; i < mightyBlocks.length; i++) {
		var mightyBlock = mightyBlocks[i];
		mightyBlock.classList.add('ready');
		new Waypoint({
			element: mightyBlock,
			handler: function () {
				this.element.classList.add('animate');
			},
			offset: '80%',
		});
	}

	// const scroll = new LocomotiveScroll();

	// let DOM = {
	// 	content: {
	// 		home: {
	// 			section: document.querySelector('.block.hero.style-1'),
	// 			get label() {
	// 				return this.section.querySelector('.label');
	// 			},
	// 			get chars() {
	// 				return this.section.querySelectorAll(
	// 					'.line .word > .char, .whitespace'
	// 				);
	// 			},
	// 		},
	// 	},
	// };

	// const timelineSettings = {
	// 	staggerValue: 0.01,
	// 	charsDuration: 0.5,
	// };
	// const timeline = gsap
	// 	.timeline({ paused: true })
	// 	// Start values for the home section elements that will animate in
	// 	.set(DOM.content.home.label, {
	// 		x: '-100%',
	// 		opacity: '0',
	// 	})
	// 	.set(DOM.content.home.chars, {
	// 		y: '100%',
	// 	})
	// 	// Stagger the animation of the home section chars
	// 	.staggerTo(
	// 		DOM.content.home.label,
	// 		1.5,
	// 		{
	// 			ease: 'Power3.easeIn',
	// 			x: '0%',
	// 			opacity: '1',
	// 		},
	// 		0
	// 	)
	// 	.staggerTo(
	// 		DOM.content.home.chars,
	// 		timelineSettings.charsDuration,
	// 		{
	// 			ease: 'Power3.easeIn',
	// 			y: '0%',
	// 		},
	// 		timelineSettings.staggerValue
	// 	);

	// timeline.play();
}
