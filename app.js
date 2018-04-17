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
function UI() { }

/*=========
VARIABLES
=========*/
const bookForm = document.getElementById('book-form');

/*================
EVENT LISTENERS
================*/

// Listen for Submit
bookForm.addEventListener('submit', function (e) {
  console.log('Test');
  e.preventDefault();
});