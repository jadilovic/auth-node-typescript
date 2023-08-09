const {
	getBook,
	getSimpleBooks,
	getSimpleBooksAxios,
} = require('simple-books');

async function getBooks() {
	// const books = await getSimpleBooks();
	const books = await getSimpleBooksAxios();
	console.log(books);
}

async function getOneBook(id) {
	const book = await getBook(id);
	console.log(book);
}

getBooks();
// getOneBook(2);
