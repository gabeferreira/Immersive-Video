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

			if (body.classList.contains('pauseJoke') || event.target.id === 'captionToggle' || event.target.id === 'shareOnTwitter') {

				return;

			} else {

				cursor.classList.remove('pause');
				cursor.classList.add('play')
				monologue.pause();
				body.classList.add('videoIsPaused');

			}

		} else if (cursor.classList.contains('play')) {

			if (event.target.classList.contains('siteNotice') || event.target.id === 'captionToggle' || event.target.id === 'shareOnTwitter') {

				return;

			} else {

				cursor.classList.add('pause');
				cursor.classList.remove('play');
				monologue.play();
				body.classList.remove('videoIsPaused');

			};

		} else {

			if (event.target.classList.contains('siteNotice') || event.target.id === 'captionToggle' || event.target.id === 'shareOnTwitter') {

				return;

			} else {

				cursor.classList.remove('pause');
				cursor.classList.add('reload');

				// Fade in the white screen, then reload the page once it is complete
				whiteLoadingScreen.classList.add('active');
				whiteLoadingScreen.addEventListener('animationend', function(){
					location.reload();
				});

			};

		}
	})

}, 4000);

