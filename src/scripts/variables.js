// Javascript document

var body = document.body;
var html = document.documentElement;

var cursor = document.getElementById('cursor');
var monologue;
var monologueContainer = document.getElementById('monologueContainer');
var fullscreenContainer = document.getElementById('fullscreenContainer');
var buyNowButtonContainer = document.getElementById('buyNowButtonContainer');
var whiteLoadingScreen = document.getElementById('whiteLoadingScreen');
var playVideo = document.getElementById('playVideo');
var backgroundText = document.getElementById('backgroundText');
var encryption = document.getElementById('encryption');
var bitcoinPrice;
var dayOfWeek;
var siteNoticeContainer = document.getElementById('siteNoticeContainer');
var captionToggle = document.getElementById('captionToggle');
var shareOnTwitter = document.getElementById('shareOnTwitter');
var aslVideoHappened = false;
var captionContainer = document.getElementById('captionContainer');

var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);