const {
	getBook,
	getSimpleBooks,
	getSimpleBooksAxios,
} = require('simple-books');

const getData = async () => {
	// const books = await getSimpleBooks();
	const books = await getSimpleBooksAxios();
	console.log(books);
};

async function getOneBook(id) {
	const book = await getBook(id);
	console.log(book);
}

getData();
getOneBook(4);
