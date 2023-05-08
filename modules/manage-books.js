import Book from './book-store.js';

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

export default Library;
