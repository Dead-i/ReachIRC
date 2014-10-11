// ReachIRC Web IRC Client
// Client frontend

// Initialise variables
var loc = 'http://localhost:8080';

// Create the frame
$('body').append('<iframe src="about:blank" id="reachirc" scrolling="no"></iframe>');
$('#reachirc').css({ 'height': 50, 'border': 'none', 'z-index': 900, 'position': 'fixed', 'bottom': 0, 'right': 24 });

// Get the frame's contents
var i = $('#reachirc').contents();

// Add the CSS file
i.find('head').html('<link href="' + loc + '/style.css" rel="stylesheet" type="text/css" />');

// Create the main body
var b = i.find('body');
b.html('<div class="main"><div class="title">' + reachirc.tagline + '</div><div class="content"></div></div>');

// Get the default nickname
var defaultnick = reachirc.nick || 'guest_' + Math.floor(Math.random() * 100000);

// Get the content
var c = b.find('.content');
c.append('<div class="welcome">' + reachirc.welcome + '<form class="connect"><p>Your nickname:<input type="text" id="nick" value="' + defaultnick + '" /></p><p><input type="submit" value="Connect to IRC" /></form></div>');

// When the bar is clicked
$('.title', b).click(function() {
	$('#reachirc').toggleClass('active').animate({ height: $('#reachirc').hasClass('active') ? 300 : 50 }, 500);
});