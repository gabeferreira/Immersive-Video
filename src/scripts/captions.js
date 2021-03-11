// Javascript document

var captionCues = [
	{
		time:0,
		text:'Today, we experience the moving image in a'
	},
	{
		time:5,
		text:'relatively small rectangle on the screen,'
	},
	{
		time:9,
		text:'often displayed alongside ads, comments, and '
	},
	{
		time:13.5,
		text:'suggestions of other videos.'
	},
	{
		time:18,
		text:'Video sharing platforms are indifferent to ambiance'	
	},
	{
		time:23,
		text:'but it doesn’t necessarily have to be that way!'
	},
	{
		time:28,
		text:'Imagine a media player that could grow in order to emphasize'
	},
	{
		time:36,
		text:'a specific moment in a story,'
	},
	{
		time:38,
		text:'spin around to get your point across,'
	},
	{
		time:42,
		text:'change the website’s background color'
	},
	{
		time:45,
		text:'to reflect a brighter tone'
	},
	{
		time:47.5,
		text:'or even shake the screen'
	},
	{
		time:50,
		text:'and keep your audience focused on the video.'
	},
	{
		time:54,
		text:'Yes, that would be great!'
	},
	{
		time:56,
		text:'If you happen to be selling a product,',
	},
	{
		time:59,
		text:'you could fill up the website with “Buy Now” buttons,'
	},
	{
		time:64,
		text:'and, once those buttons are gone, you could remind'
	},
	{
		time:67.5,
		text:'your audience that purchasing something on your website'
	},
	{
		time:71.5,
		text:'is a private, safe affair.'
	},
	{
		time:75,
		text:'In fact, you could go even further, and announce that'
	},
	{
		time:79,
		text:'the entire experience is encrypted,'
	},
	{
		time:83,
		text:'so you’ll never really know what’s happening behind the scenes.'
	},
	{
		time:89,
		text:'Selling is not the only thing you can do on the internet.'
	},
	{
		time:93,
		text:'You can also inform.'
	},
	{
		time:97,
		text:'The problem with using video to inform is that, well,'
	},
	{
		time:100.5,
		text:'videos, by nature of the medium, are stuck in time.'
	},
	{
		time:105,
		text:'This additional layer that I’m proposing'
	},
	{
		time:108.5,
		text:'could pull in real-time information'
	},
	{
		time:111.5,
		text:'to complement the message you are trying to convey.'
	},
	{
		time:117.5,
		text:'I’m personally excited about having fun with this idea,'
	},
	{
		time:123,
		text:'Perhaps by messing around with viewers',
	},
	{
		time:127,
		text:'pausing the video at random times'
	},
	{
		time:129,
		text:'and then, making them... well,'
	},
	{
		time:132.5,
		text:'think that their internet connection went down!'
	},
	{
		time:136,
		text:'Similar to what happened in the Sopranos finale!'
	},
	{
		time:140,
		text:'Hahahahahaha!'
	},
	{
		time:143,
		text:''
	},
	{
		time:185,
		text:'This is a nascent idea,'
	},
	{
		time:187,
		text:'and I hope it inspires others to ditch'
	},
	{
		time:190,
		text:'the race for algorithmic relevance'
	},
	{
		time:194,
		text:'and pursue genuinely intriguing experiences'
	},
	{
		time:197,
		text:'for internet users all around.'
	}


]

// Loop through the caption cues
for (let i = 0; i < captionCues.length; i++) {

	monologue.addEventListener('timeupdate', function(){

		if (monologue.currentTime > captionCues[i].time && monologue.currentTime < (captionCues[i].time + 1) ) {

			captionContainer.textContent = captionCues[i].text;

		};

	});

}