const http = require('http');

const hostname = '127.0.0.1';
const port = 8081;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-type', 'text/plain');
	res.write('I will appear in uppercase'.toLocaleUpperCase());
	res.end('Hello my first node project');
});
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});
