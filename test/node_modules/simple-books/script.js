const { getSimpleBooks, getBook, getSimpleBooksAxios } = require('./index');

const getBooks = async () => {
	const books = await getSimpleBooksAxios();
	console.log(books);
};

getBooks();
