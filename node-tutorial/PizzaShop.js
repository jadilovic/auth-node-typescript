const EventEmitter = require('node:events');

class PizzaShop extends EventEmitter {
	constructor() {
		super();
		this.orders = 0;
	}

	newOrder(size, topping) {
		this.orders++;
		this.emit('order', size, topping);
	}

	displayOrder() {
		console.log(`Number of orders: ${this.orders}`);
	}
}

module.exports = PizzaShop;
