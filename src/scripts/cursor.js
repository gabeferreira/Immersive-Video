// Javascript document

function updateCursorPosition(event) {
	scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	cursorLeft = event.pageX + 'px';
	cursorTop = event.pageY - scrollTop + 'px';

	cursor.style.top = cursorTop;
	cursor.style.left = cursorLeft;
}

document.addEventListener('mousemove', function(event) {
	updateCursorPosition(event);
});


setTimeout(function(){

	document.addEventListener('click', function(event){

		if (cursor.classList.contains('pause')) {

			if (body.classList.contains('pauseJoke') || event.target.id === 'captionToggle') {

				return;

			} else {

				cursor.classList.remove('pause');
				monologue.pause();
				body.classList.add('videoIsPaused');

			}

		} else {

			if (event.target.classList.contains('siteNotice') || event.target.id === 'captionToggle') {

				return;

			} else {

				cursor.classList.add('pause');
				monologue.play();
				body.classList.remove('videoIsPaused');

			};

		}
	})

}, 4000);

