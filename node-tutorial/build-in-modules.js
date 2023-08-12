const path = require('node:path');
const EventEmitter = require('node:events');
const PizzaShop = require('./PizzaShop');
const { log } = require('node:console');
const emitter = new EventEmitter();

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__dirname));
console.log(path.basename(__filename));

console.log(path.extname(__dirname));
console.log(path.extname(__filename));

console.log(path.parse(__filename));
console.log(path.format(path.parse(__filename)));

console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute('./data.json'));

// console.log(path.join('folder1', 'folder2', 'index.js'));
// console.log(path.join('/folder1', '//folder2', 'index.js'));
// console.log(path.join('/folder1', '//folder2', '../index.js'));
// console.log(path.join(__dirname, 'data.json'));

console.log(path.resolve('folder1', 'folder2', 'index.js'));
console.log(path.resolve('/folder1', '//folder2', 'index.js'));
console.log(path.resolve('/folder1', '//folder2', '../index.js'));
console.log(path.resolve(__dirname, 'data.json'));

function greet(name) {
	console.log(`Hello ${name}`);
}

function helloAki(greetFn) {
	const name = 'Aki';
	greet(name);
}

helloAki(greet);

emitter.on('order', (size, ingredients) => {
	console.log('Order was placed!', size, ingredients);
});

emitter.on('order', (size) => {
	console.log('Complimentary drink');
});

emitter.emit('order', 'large', 'meat');

const pizzaOrder = new PizzaShop();

pizzaOrder.on('order', (size, topping) => {
	console.log('Order placed with : ', size, topping);
});

pizzaOrder.newOrder('small', 'meat');
pizzaOrder.displayOrder();
pizzaOrder.newOrder('medium', 'banana');
pizzaOrder.displayOrder();

const buffer = new Buffer.from('Jasmin');

buffer.write('Codevolution');

console.log(buffer.toJSON());
console.log(buffer);
console.log(buffer.toString());
