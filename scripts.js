let myLibrary = [];

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
	
	const newBook = new Book

}
