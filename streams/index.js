const fs = require('fs');

const readableStream = fs.createReadStream('sampleData.csv', {
	encoding: 'utf-8',
});

const writableStream = fs.createWriteStream('output.txt');
const book = fs.createWriteStream('book.txt');
const read = fs.createReadStream('book.txt', { encoding: 'utf-8' });

readableStream.pipe(writableStream);

book.write('hellow there boy\n');
book.write('hellow there boy\n');

read.on('data', (chunk) => {
	console.log(chunk);
});

book.end('end of book');

// readableStream.on('readable', () => {
// 	console.log('Stream is readable');
// });
// readableStream.on('end', () => {
// 	console.log('Stream has ended.');
// });

readableStream.on('error', (err) => {
	console.error('Error:', err.message);
});

const marvel = fs.createWriteStream('./hero.json');

const hero = {
	name: 'Super',
	age: 20,
};

marvel.write(JSON.stringify(hero, null, 2));
marvel.cork();
hero['message'] = 'Im corked';
marvel.write(JSON.stringify(hero, null, 3));
marvel.uncork();

// let writable = process.stdout;
// let readable = process.stdin;

// readableFlowing == null;
// writable.write('Hello There, Please enter your name: ');

// readable.on('data', (data) => {
// 	writable.write(data);
// 	marvel.write(data);
// });

const readableHero = fs.createReadStream('./output.txt');
let writeableHero = process.stdout;

writeableHero.on('pipe', (src) => {
	console.log(src == readableHero);
	console.log(src);
});

readableHero.pipe(writeableHero);
