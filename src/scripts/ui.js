// Javascript document

var playVideo = document.getElementById('playVideo');
var backgroundText = document.getElementById('backgroundText');
var encryption = document.getElementById('encryption');

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

	// Display buy now buttons (60,61)
	if (monologue.currentTime > 61 && monologue.currentTime < 62) { displayBuyNowButtons(); }

	// Hide buy now buttons (66,67)
	if (monologue.currentTime > 66 && monologue.currentTime < 67) { hideBuyNowButtons(); }

	// Blur the video (72,73)
	if (monologue.currentTime > 72 && monologue.currentTime < 73) { blurTheVideo(); }

	// Encryption (82,83)
	if (monologue.currentTime > 82 && monologue.currentTime < 83) { encryptTheScreen(); }

	// Disable screen encryption (87,88)
	if (monologue.currentTime > 87 && monologue.currentTime < 88) { disableEncryptedScreen(); }

	// Real-time information (110,111)
	if (monologue.currentTime > 110 && monologue.currentTime < 111) { displayRealTimeData(); }

});

// Website morphing functions

function turnBackgroundBlack() {
	body.classList.add('blackBackground');
}

function growVideoPlayer() {
	monologueContainer.classList.add('larger')
}

function spinVideoPlayer() {
	
	monologueContainer.classList.add('spin');
	monologueContainer.addEventListener('animationend', function(){
		monologueContainer.classList.remove('spin');
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

function displayBuyNowButtons() {

	buyNowButtonContainer.classList.add('loaded');
	buyNowButtonContainer.classList.add('active');

}

function hideBuyNowButtons() {

	buyNowButtonContainer.classList.remove('active');

}

function blurTheVideo() {

	monologue.classList.add('blurred');

}

function encryptTheScreen() {

	encryption.classList.add('visible');

	setTimeout(function(){
		body.classList.remove('yellowBackground');
		monologue.classList.remove('blurred');
		monologueContainer.classList.remove('larger')
	}, 1000);

}

function disableEncryptedScreen() {

	encryption.classList.add('hidden');

}

function displayRealTimeData() {

}