const fs = require('node:fs');

console.log('here 1');

fs.readFile('./story.txt', 'utf-8', (err, data) => {
	console.log(data);
});

console.log('here 2');
