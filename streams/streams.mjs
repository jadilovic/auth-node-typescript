// const stdin = process.stdin.on('data', (msg) =>
// 	console.log('IN is data: ', msg.toString().toUpperCase())
// );

const stdout = process.stdout.on('data', (msg) => console.log('OUT : ', msg));

// stdin.pipe(stdout);
