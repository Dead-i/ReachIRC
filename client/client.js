// ReachIRC Web IRC Client
// Client frontend

// Initialise variables
var loc = 'http://localhost:8080';

// Create the frame
$('body').append('<iframe src="about:blank" id="reachirc" scrolling="no"></iframe>');
$('#reachirc').css({ 'height': 50, 'border': 'none', 'z-index': 900, 'position': 'fixed', 'bottom': 0, 'right': 24 });

// Get the frame's contents
var c = $('#reachirc').contents();

// Add the CSS file
c.find('head').html('<link href="' + loc + '/style.css" rel="stylesheet" type="text/css" />');

// Main bar
var b = $('#reachirc').contents().find('body');
b.html('<div class="main"><div class="title">Chat with us on IRC</div><div class="content"></div></div>');

// When the bar is clicked
$('.title', b).click(function() {
	$('#reachirc').toggleClass('active').animate({ height: $('#reachirc').hasClass('active') ? 300 : 50 }, 500);
});