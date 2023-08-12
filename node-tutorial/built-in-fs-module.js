const fs = require('node:fs');

const readContent = fs.readFileSync('./story.txt', 'utf-8');

console.log(readContent);

fs.readFile('./story.txt', 'utf-8', (error, data) => {
	if (error) {
		console.log(error);
	} else {
		console.log(data);
	}
});

fs.writeFile('./story.txt', 'Report good', { flag: 'a' }, (error) => {
	if (error) {
		console.log(error);
	} else {
		console.log('Memo is written');
	}
});
fs.writeFileSync('./report.txt', 'Test passed');
