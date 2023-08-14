const fs = require('node:fs/promises');
const fss = require('node:fs');
const zlib = require('node:zlib');

const gzip = zlib.createGzip();

fs.readFile('./story.txt', 'utf-8')
	.then((data) => console.log(data))
	.catch((error) => console.log(error));

const reading = async () => {
	try {
		const data = await fs.readFile('./story.txt', 'utf-8');
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

reading();

const readableStream = fss.createReadStream('./story.txt', {
	encoding: 'utf-8',
	highWaterMark: 2,
});

readableStream.pipe(gzip).pipe(fss.WriteStream('./file3.txt.gz'));

const writableStream = fss.createWriteStream('./file2.txt');

readableStream.pipe(writableStream);

// readableStream.on('data', (chunk) => {
// 	console.log(chunk);
// 	writableStream.write(chunk);
// });

//-------------------------------------------------------------------
// const fs = require('node:fs');

// const readContent = fs.readFileSync('./story.txt', 'utf-8');

// console.log(readContent);

// fs.readFile('./story.txt', 'utf-8', (error, data) => {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log(data);
// 	}
// });

// fs.writeFile('./story.txt', 'Report good', { flag: 'a' }, (error) => {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log('Memo is written');
// 	}
// });
// fs.writeFileSync('./report.txt', 'Test passed');
