import '../styles/main.scss';

import vue from './components/vue';
import headlines from './components/animations';
import portfolio from './components/portfolio';
import animations from './components/anime';

document.addEventListener('DOMContentLoaded', function () {
	function doStuff(callback) {
		// do all app scripts here...
		callback();
	}

	doStuff(function () {
		document.body.className = 'visible';
	});

	vue();
	headlines();
	portfolio();
	animations();
});
