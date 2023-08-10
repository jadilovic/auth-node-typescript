export const nameDateGreeting = (name: string): string => {
	return `Hello ${name}, I wish you happy ${new Date().toDateString()}`;
};

console.log(nameDateGreeting('Aki'));
