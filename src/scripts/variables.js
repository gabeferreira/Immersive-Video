// Javascript document

var body = document.body;
var html = document.documentElement;

var cursor = document.getElementById('cursor');
var monologue;
var monologueContainer = document.getElementById('monologueContainer');
var fullscreenContainer = document.getElementById('fullscreenContainer');
var buyNowButtonContainer = document.getElementById('buyNowButtonContainer');
var whiteLoadingScreen = document.getElementById('whiteLoadingScreen');

var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);