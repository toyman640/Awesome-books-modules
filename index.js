import Book from './modules/book-store.js';

const createBook = document.querySelector('#addbook');

class Library {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  collectBooks(title, author) {
    const book = new Book(title, author);
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.showBooks();
  }

  removeBook(title, author) {
    const index = this.books.findIndex((book) => book.title === title && book.author === author);
    if (index !== -1) {
      this.books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(this.books));
      this.showBooks();
    }
  }

  showBooks() {
    const booksDiv = document.querySelector('#books');
    booksDiv.innerHTML = '';
    const list = document.createElement('div');
    if (Array.isArray(this.books)) {
      this.books.forEach((book) => {
        const item1 = document.createElement('p');
        const item2 = document.createElement('p');
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.classList.add('remove');
        item1.innerText = `"${book.title}"`;
        item2.innerText = `by ${book.author}`;
        document.createElement('hr');
        list.appendChild(item1);
        list.appendChild(item2);
        list.appendChild(removeButton);
        list.appendChild(document.createElement('hr'));
        /* eslint-disable */
        removeButton.addEventListener('click', () => {
          this.removeBook(book.title, book.author)
        });
        /* eslint-enable */
      });
    }
    booksDiv.appendChild(list);
  }
}

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
const booksSection = document.querySelector('.display-books');
const formSection = document.querySelector('.form-section');
const contactSection = document.querySelector('.contact-section');

function showForm() {
  booksSection.classList.add('hide');
  formSection.classList.remove('hide');
  contactSection.classList.add('hide');
}

function showBooks() {
  booksSection.classList.remove('hide');
  formSection.classList.add('hide');
  contactSection.classList.add('hide');
}

function showContact() {
  booksSection.classList.add('hide');
  contactSection.classList.remove('hide');
  formSection.classList.add('hide');
}

booksButton.addEventListener('click', showBooks);
formButton.addEventListener('click', showForm);
contactButton.addEventListener('click', showContact);
