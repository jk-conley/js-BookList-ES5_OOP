/*=========
VARIABLES
=========*/
const bookForm = document.getElementById('book-form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const isbn = document.getElementById('isbn');

/*===============
CONSTRUCTORS
===============*/

// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {

  // add book to list method
  UI.prototype.addBookToList = function (book) {

    // get table body
    const list = document.getElementById('book-list');
    // create table row
    const row = document.createElement('tr');
    // insert table data
    row.innerHTML = `<td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td><a href="#" class="delete">X</a></td>`;

    // append row
    list.appendChild(row);

  }

  // clear field method
  UI.prototype.clearFields = function () {
    title.value = '';
    author.value = '';
    isbn.value = '';
  }

}

/*================
EVENT LISTENERS
================*/

// Listen for Submit
bookForm.addEventListener('submit', function (e) {

  // instance of book object
  const book = new Book(title.value, author.value, isbn.value);

  // instance of UI object
  const ui = new UI();

  // add the book
  ui.addBookToList(book);

  // clear form fields
  ui.clearFields();
  e.preventDefault();
});