// const subtract = require('./add');
// const add = require('./add');
const math = require('./add');
const SuperHero = require('./super-hero');
const data = require('./data.json');
// const superHero = require('./super-hero');
console.log('Hello from index');

const { add, subtract, divide } = math;

console.log(divide(7, 8));

(function () {
	// const superHero = 'Batman';
	const superHero = new SuperHero('Batman');
	superHero.setName('Aki');
	console.log(superHero.getName(), superHero.name);
})();

(function () {
	// const superHero = 'Superman';
	const superHero = new SuperHero('Superman');
	console.log(superHero.name);
})();

console.log(data);

data.forEach((element) => {
	console.log(element.name, element.age);
});

// console.log(superHero.getName());
// superHero.setName('Aki');
// console.log(superHero.getName());
