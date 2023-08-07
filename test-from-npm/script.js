const { getBook, getSimpleBooks } = require('simple-books');

const getData = async () => {
	const books = await getSimpleBooks();
	console.log(books);
};

async function getOneBook(id) {
	const book = await getBook(id);
	console.log(book);
}

getData();
getOneBook(4);
