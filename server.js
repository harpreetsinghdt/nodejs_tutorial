const http = require('http');
const dt = require('./custom_modules/date');
var url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.write(req.url);
	res.write('\nHello World, I am here to Win, lets begin \n');
	res.write('Today: ' + dt.myDateTime());

	var q = url.parse(req.url, true).query;
	var txt = q.year + ' ' + q.month;
	res.write('\n' + txt);
	res.end('\n' + 'End reached');
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
