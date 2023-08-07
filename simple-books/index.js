const getSimpleBooks = async () => {
	const response = await fetch('https://simple-books-api.glitch.me/books');
	const books = await response.json();
	return books;
};

const getBook = async (id) => {
	const response = await fetch(
		'https://simple-books-api.glitch.me/books/' + id
	);
	const book = await response.json();
	return book;
};

module.exports = { getSimpleBooks, getBook };
