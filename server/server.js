// ReachIRC Web IRC Client
// Server backend

// Include libraries
var app = require('http').createServer(handler);
var net = require('net');
var io = require('socket.io')(app);
var fs = require('fs');

// Welcome message
log('ReachIRC Server Backend')
log('https://www.github.com/Dead-i/ReachIRC\n');

// Web server handler
function handler(req, res) {
	fs.readFile('../client/' + req.url.split('/')[1], function(err, data) {
		if (err) {
			res.writeHead(404);
			res.end('<h1>404 Not Found</h1>');
			return;
		}
		
		log('Serving client file to ' + req.connection.remoteAddress + '...');
		res.writeHead(200);
		res.end(data);
	});
}

// Socket connection handler
io.on('connection', function(c) {
	// When the user wants to join IRC
	c.on('join', function(params) {
		if (!(params.server && params.port && params.channel && params.nick)) {
			c.emit({ 'error': 'parameters' });
			return;
		}
		
		c.irc = net.connect({ host: params.server, port: params.port });
		
		// When the connection has succeeded
		c.irc.on('connect', function() {
			c.irc.write('USER ' + params.nick + ' ReachIRC ReachIRC ReachIRC :ReachIRC Online Web Client\r\n');
			c.irc.write('NICK ' + params.nick + '\r\n');
		});
		
		// When data is received from the IRC server
		c.irc.on('data', function(data) {
			// Parse data
			data = data.toString();
			var ex = data.split(' ');
			
			// Handle pings
			if (ex[0] == 'PING') {
				c.irc.write('PONG ' + ex[1] + '\r\n');
			}
			
			console.log(data);
		});
	});
});

// Log function
function log(msg, c) {
	console.log('\x1B[90m[\x1b[36m' + new Date().toTimeString().split(' ')[0] + '\x1B[90m] ' + msg + '\x1b[0m');
}

// Start listening
app.listen(8080);
log('Server listening...');