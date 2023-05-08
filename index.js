import * as luxon from './node_modules/luxon/build/es6/luxon.js';
import Library from './modules/manage-books.js';
import showBooks from './modules/show-books.js';
import showForm from './modules/new-book.js';
import showContact from './modules/show-contact.js';

const createBook = document.querySelector('#addbook');

const newBook = new Library();

createBook.addEventListener('click', (event) => {
  event.preventDefault();
  const titleInput = document.querySelector('#title');
  const authorInput = document.querySelector('#author');
  const title = titleInput.value;
  const author = authorInput.value;
  newBook.collectBooks(title, author);
  titleInput.value = '';
  authorInput.value = '';
});
newBook.showBooks();

const formButton = document.querySelector('#form');
const booksButton = document.querySelector('#list');
const contactButton = document.querySelector('#contact');

booksButton.addEventListener('click', showBooks);
formButton.addEventListener('click', showForm);
contactButton.addEventListener('click', showContact);

const dateSection = document.querySelector('.date');

const time = luxon.DateTime.local().toLocaleString(luxon.DateTime.DATETIME_MED);

dateSection.innerHTML = time;
