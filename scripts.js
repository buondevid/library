const myLibrary = [{
	title: 'Harry Potter',
	author: 'J. K. Rowling',
	pages: 300,
	read: true,
},
{
	title: 'Lord of the Rings',
	author: 'Tolkien',
	pages: 1232,
	read: false,
}];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return `${title} by ${author}, ${pages} pages, ${read === true ? 'read already' : 'not read yet'}`;
	};
}

function addBookToLibrary() {
	let title;
	let author;
	let pages;
	let read;
	const newBook = new Book(title, author, pages, read);
	myLibrary.push(newBook);
}

function showBook() {};


