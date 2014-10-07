// ReachIRC Web IRC Client
// Server backend

// Include libraries
var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

// Welcome message
log('ReachIRC Server Backend')
log('https://www.github.com/Dead-i/ReachIRC\n');

// Web server handler
function handler(req, res) {
	fs.readFile('../client/client.js', function(err, data) {
		if (err) throw err;
		
		log('Serving client file to ' + req.connection.remoteAddress + '...');
		res.writeHead(200);
		res.end(data);
	});
}

// Log function
function log(msg, c) {
	console.log('\x1B[90m[\x1b[36m' + new Date().toTimeString().split(' ')[0] + '\x1B[90m] ' + msg + '\x1b[0m');
}

// Start listening
app.listen(8080);
log('Server listening...');