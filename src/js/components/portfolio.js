export default function portfolio() {
	// Stuff here
	console.log('Running portfolio');
	var portfolioBackground = document.querySelector(
		'#portfolio-background'
	);

	var portfolioItems = document.querySelectorAll('.listing .item');

	portfolioItems.forEach((element) => {
		element.addEventListener('mouseover', function (event) {
			// console.log(event.target.closest('.item');

			var newBG = element.querySelector('img');
			console.log('Mouse over event');
			console.log(newBG.getAttribute('src'));

			portfolioBackground.classList.add('fade');

			// Set the background color to a light gray
			portfolioBackground.style.backgroundImage =
				'url(' + newBG.getAttribute('src') + ')';
			setTimeout(function () {
				portfolioBackground.classList.remove('fade');
			}, 200);
		});
	});
}
