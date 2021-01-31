const library = document.getElementById('library');
const newBookButton = document.querySelector('header button');
const formBackground = document.querySelector('.form-background');
const form = document.querySelector('form');
const abort = document.querySelector('.red');

let myLibrary = [{
	title: 'Harry Potter',
	author: 'J. K. Rowling',
	pages: 3407,
	read: true,
},
{
	title: 'Lord of the Rings',
	author: 'J. R. R. Tolkien',
	pages: 1137,
	read: false,
},
];

function populateStorage() {
	localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function setLibrary() {
	myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
}

if (localStorage.length !== 0) setLibrary();

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function b() {
		return `${title} by ${author}, ${pages} pages, ${read === true ? 'read already' : 'not read yet'}`;
	};
}

// function to populate (creating elements) the library with myLibrary objects
function showBook() {
	for (const item of myLibrary) {
		const bookBackground = document.createElement('div');
		bookBackground.classList.add('book-background');

		const bookInfo = document.createElement('div');
		bookInfo.classList.add('book-info');

		const deleteBook = document.createElement('button');
		deleteBook.type = 'button';
		deleteBook.className = 'delete-book';
		deleteBook.textContent = 'X';

		const bookTitle = document.createElement('h2');
		bookTitle.textContent = item.title;

		const bookAuthor = document.createElement('p');
		bookAuthor.textContent = item.author;

		const bookPages = document.createElement('p');
		bookPages.textContent = `${item.pages} pages`;

		const labelCheck = document.createElement('label');
		labelCheck.textContent = 'Read? ';
		labelCheck.style.fontSize = '1rem';

		const checkRead = document.createElement('input');
		checkRead.type = 'checkbox';
		checkRead.checked = item.read === true;
		checkRead.classList.add('checkboxRead');
		checkRead.checked && bookBackground.classList.add('read');
		// this event listener dynamically edit the object myLibrary when changing Read stat on homepage
		checkRead.addEventListener('change', () => {
			bookBackground.classList.toggle('read');
			for (const obj of myLibrary) {
				if (obj.title === bookTitle.textContent) {
					obj.read = checkRead.checked;
					populateStorage();
				}
			}
		});
		bookInfo.appendChild(deleteBook);
		bookInfo.appendChild(bookTitle);
		bookInfo.appendChild(bookAuthor);
		bookInfo.appendChild(bookPages);
		bookInfo.appendChild(labelCheck);
		labelCheck.appendChild(checkRead);
		bookBackground.appendChild(bookInfo);
		library.appendChild(bookBackground);
		deleteBook.addEventListener('click', removeBook(bookTitle.textContent));
	}
	populateStorage();
}

// add book to Object myLibrary
function addBookToLibrary() {
	const title = document.getElementById('form-title').value;
	const author = document.getElementById('form-author').value;
	const pages = document.getElementById('form-pages').value;
	const read = document.getElementById('form-checkbox').checked;
	const newBook = new Book(title, author, pages, read);
	myLibrary.push(newBook);
	library.innerHTML = '';
	showBook();
}

function removeBook(bookTitle) {
	return function a() {
		myLibrary = myLibrary.filter((book) => book.title !== bookTitle);
		library.innerHTML = '';
		showBook();
	};
}

// event listeners

newBookButton.addEventListener('click', () => {
	library.classList.add('hidden');
	document.querySelector('.signature').classList.add('hidden');
	formBackground.classList.add('full-scale');
	form.reset();
});

form.addEventListener('submit', (e) => {
	document.querySelector('.overlay').classList.add('overlay-full');
	setTimeout(() => (document.querySelector('.overlay').classList.remove('overlay-full')), 1000);
	addBookToLibrary();
	e.preventDefault();
	form.reset();
});

abort.addEventListener('click', () => {
	form.reset();
	formBackground.classList.remove('full-scale');
	setTimeout(() => {
		library.classList.remove('hidden');
		document.querySelector('.signature').classList.remove('hidden');
	},
	300);
});

// show default myLibrary at start
showBook();
