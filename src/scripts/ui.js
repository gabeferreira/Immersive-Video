// Javascript document

var playVideo = document.getElementById('playVideo');
var backgroundText = document.getElementById('backgroundText');

backgroundText.textContent = 'A proposal for immersive video on the web';

setTimeout(function(){
	backgroundText.classList.add('loaded');
}, 1000);

function createVideo() {
		monologue = document.createElement('video');
		monologue.id = 'monologue';
	var monologueSource = document.createElement('source');
		monologueSource.type = 'video/mp4';
		monologueSource.src = 'assets/video/immersive-video.mp4';
		
		monologue.appendChild(monologueSource);
		monologue.addEventListener('click', function(){

			if (monologue.classList.contains('loaded')) {
				monologue.play();
				monologue.classList.add('playing');
			};

		});

	monologueContainer.appendChild(monologue);
	monologue.load();
}

createVideo();

setTimeout(function(){

	monologueContainer.className = 'loaded';
	cursor.classList.add('loaded');

}, 4000);

monologue.addEventListener('timeupdate', function(){

	console.log(monologue.currentTime);

	// Turn background black (26,27)
	if (monologue.currentTime > 26 && monologue.currentTime < 27) { turnBackgroundBlack(); }

	// Grow the video (32, 33)
	if (monologue.currentTime > 32 && monologue.currentTime < 33) { growVideoPlayer(); }

	// Spin the video (38, 39)
	if (monologue.currentTime > 38 && monologue.currentTime < 39) { spinVideoPlayer(); }

	// Change background color (44,45)
	if (monologue.currentTime > 44 && monologue.currentTime < 45) { turnBackgroundYellow(); }

	// Shake the screen (48,49)
	if (monologue.currentTime > 48 && monologue.currentTime < 49) { shakeTheScreen(); }

});

// Website morphing functions

function turnBackgroundBlack() {
	body.classList.add('blackBackground');
}

function growVideoPlayer() {
	monologueContainer.classList.add('larger')
}

function spinVideoPlayer() {
	
	monologue.classList.add('spin');
	monologue.addEventListener('animationend', function(){
		monologue.classList.remove('spin');
	});

}

function turnBackgroundYellow() {

	backgroundText.classList.add('disappear');
	body.classList.add('yellowBackground');
	body.classList.remove('blackBackground');

}

function shakeTheScreen() {

	body.classList.add('shake');
	body.addEventListener('animationend', function(){
		body.classList.remove('shake');
	});

}