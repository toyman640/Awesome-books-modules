const booksSection = document.querySelector('.display-books');
const formSection = document.querySelector('.form-section');
const contactSection = document.querySelector('.contact-section');

const showBooks = () => {
  booksSection.classList.remove('hide');
  formSection.classList.add('hide');
  contactSection.classList.add('hide');
};

export default showBooks;