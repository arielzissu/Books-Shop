'use strict'

var gIdCount = 1;
var gBooks = _createBooks();

function getBooks() {
    return gBooks;
}

function _createBook(name, price) {
    var book = {
        id: gIdCount++,
        name: name,
        price: price,
        rate: 0,
        imgUrl: 'www.com'
    }
    return book;
}


function _createBooks() {
    var books = loadFromStorage('book');
    if (books) return books;

    var arrBooks = ['Alis', 'Bilbi', 'Pinocio'].map(_createBook);
    return arrBooks;
}

function removeBook(bookId) {
    var idx = gBooks.findIndex(book => book.id === bookId);
    gBooks.splice(idx, 1);
    saveToStorage('book', gBooks);
}

function addBook(name, price) {
    var newBook = _createBook(name, price);
    gBooks.push(newBook);
    saveToStorage('book', gBooks);
}

function updateBook(bookId, bookPrice) {
    var idx = gBooks.findIndex(book => book.id === bookId);
    gBooks[idx].price = bookPrice;
    saveToStorage('book', gBooks);
}