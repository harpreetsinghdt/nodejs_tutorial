const http = require('http');

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-type', 'text/plain');
	res.end('Hello Nodejs');
});

server.listen(8080, () => {
	console.log('Server running at port 8080');
});
