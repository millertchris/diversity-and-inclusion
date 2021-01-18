import '../styles/main.scss';

import vue from './components/vue';
import headlines from './components/animations';

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
});
