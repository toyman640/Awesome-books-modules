const booksSection = document.querySelector('.display-books');
const formSection = document.querySelector('.form-section');
const contactSection = document.querySelector('.contact-section');

function showContact() {
  booksSection.classList.add('hide');
  contactSection.classList.remove('hide');
  formSection.classList.add('hide');
}

export default showContact;