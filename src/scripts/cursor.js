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

		console.log(event.target);

		if (cursor.classList.contains('pause')) {

			cursor.classList.remove('pause');
			monologue.pause();

		} else {

			if (event.target.classList.contains('siteNotice')) {

				return;

			} else {

				cursor.classList.add('pause');
				monologue.play();

			};

		}
	})

}, 4000);

