const http = require('http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
	const hero = { name: 'aki', age: 33 };
	// res.writeHead(200, 'Going response', { 'Content-Type': 'text/plain' });
	// res.end('Hello world');

	// res.writeHead(200, 'Going response', { 'Content-Type': 'text/html' });
	// res.end('<h1>Hello world</h1>');

	// res.writeHead(200, 'Second response', { 'Content-Type': 'application/json' });
	// res.end(JSON.stringify(hero));

	// const html = fs.readFileSync('./index.html', { encoding: 'utf-8' });
	// res.writeHead(200, 'Going response', { 'Content-Type': 'text/html' });
	// res.end(html);

	// res.writeHead(200, 'Going response', { 'Content-Type': 'text/html' });
	// fs.createReadStream('./index.html').pipe(res);
	// fs.createReadStream(__dirname + '/index.html').pipe(res);

	// const name = 'Aki';
	// let html = fs.readFileSync('./index.html', 'utf-8');
	// html = html.replace('{{name}}', name);
	// res.end(html);

	// req.method = GET or PUT or POST or DELETE
	if (req.url === '/') {
		res.writeHead(200, 'ok', { 'Content-Type': 'text/plain' });
		res.end('Home page');
	} else if (req.url === '/about') {
		const html = fs.readFileSync('./index.html', 'utf-8');
		res.writeHead(200, 'ok', { 'Content-Type': 'text/html' });
		res.end(html);
	} else if (req.url === '/api') {
		res.writeHead(200, 'ok', { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(hero));
	} else {
		res.writeHead(404, 'no page', { 'Content-Type': 'text/plain' });
		res.end('No page found');
	}
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
	console.log('Server is listening at port : ' + port);
});
