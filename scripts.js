const library = document.getElementById('library');

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

function showBook() {
	for (const item of myLibrary) {
		const bookBackground = document.createElement('div');
		const bookInfo = document.createElement('div');
		const bookTitle = document.createElement('h2');
			bookTitle.textContent = item.title;
		const bookAuthor = document.createElement('p');
			bookAuthor.textContent = item.author;
		const bookPages = document.createElement('p');
			bookPages.textContent = item.pages;
		const checkRead = document.createElement('input');

		bookBackground.classList.add('book-background');
		bookInfo.classList.add('book-info');
		bookInfo.appendChild(bookTitle);
		bookInfo.appendChild(bookAuthor);
		bookInfo.appendChild(bookPages);
		bookInfo.appendChild(checkRead);
		bookBackground.appendChild(bookInfo);
		library.appendChild(bookBackground);

	}
}

showBook();
