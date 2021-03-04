// Javascript document

var playVideo = document.getElementById('playVideo');
var backgroundText = document.getElementById('backgroundText');
var encryption = document.getElementById('encryption');
var bitcoinPrice;
var dayOfWeek;

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

	// Real-time information (97,98)
	if (monologue.currentTime > 97 && monologue.currentTime < 98) { displayRealTimeData(); }

	// Pause the video (126,127)
	if (monologue.currentTime > 126 && monologue.currentTime < 127) { pauseTheVideo(); }

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

function getBitcoinPrice() {
	
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var bitcoinApiResponse = JSON.parse(this.responseText);
			bitcoinPrice = bitcoinApiResponse.bpi.USD.rate.slice(0,-2);

		}
	};

	xmlhttp.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json", true);
	xmlhttp.send();

}

getBitcoinPrice();

function determineIfItIsFriday() {

	var date = new Date();
	dayOfWeek = date.getDay();

	return dayOfWeek;

}

var displayRealTimeData = (function() {
	var executed = false;
	return function() {
		if (!executed) {
			executed = true;
			determineIfItIsFriday();

			var isItFriday = function() {

				if (dayOfWeek === 'Friday') {
					return 'It is already Friday,';
				} else {
					return 'It is not Friday yet,';
				}

			}

			var realTimeData = document.createElement('div');
				realTimeData.id = 'realTimeData';
				// realTimeData.textContent = isItFriday() + ' and Bitcoin is worth USD ' + bitcoinPrice + '.';
				realTimeData.textContent = '1 BTC is now worth $' + bitcoinPrice + '.';

			body.appendChild(realTimeData);
			setTimeout(function(){
				realTimeData.classList.add('active');
			}, 500)
		}
	};
})();

var pauseTheVideo = (function() {
	var executed = false;
	return function() {
		if (!executed) {
			executed = true;
			
			monologue.pause();
			setTimeout(function(){
				monologue.play();
			}, 4500);

		}
	};
})();


