const { getBook, getSimpleBooks } = require('simple-books');

async function getBooks() {
	const books = await getSimpleBooks();
	console.log(books);
}

async function getOneBook(id) {
	const book = await getBook(id);
	console.log(book);
}

// getBooks();
getOneBook(2);