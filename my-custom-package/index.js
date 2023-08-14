const { upperCase } = require('upper-case');
const greet = (name) => {
	return `Hello ${name} -> ${upperCase(name)}`;
};

module.exports = greet;
