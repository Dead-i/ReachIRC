// ReachIRC Web IRC Client
// Client frontend

// Initialise variables
var loc = 'http://localhost:8080';

// Create the frame
$('body').append('<iframe src="about:blank" id="reachirc" scrolling="no"></iframe>');
$('#reachirc').css({ height: '50px', border: 'none', position: 'fixed', bottom: '0px', right: '12px' });

// Add the CSS file
$('#reachirc').contents().find('head').html('<link href="' + loc + '/style.css" rel="stylesheet" type="text/css" />');

// Main bar
var body = $('#reachirc').contents().find('body');
body.html('<div class="chatbar">Chat with us on IRC</div>');