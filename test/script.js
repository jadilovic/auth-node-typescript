const getSimpleBooks = require('simple-books');

async function getBooks() {
	const books = await getSimpleBooks();
	console.log(books);
}

getBooks();
