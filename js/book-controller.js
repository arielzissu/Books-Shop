'use strict'

var gBooks = getBooks();
var gExplane = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
var gCurrIdx;

function init() {
    doTrans();
    _renderBooks();
}


function _renderBooks() {
    var elTable = document.querySelector('.table');
    var strHtml = `
    <tr>
        <th data-trans="headId">Id</th>
        <th data-trans="headTitle">Title</th>
        <th data-trans="headPrice">Price</th>
        <th data-trans="headRate">Rate</th>
        <th data-trans="headImage">Image</th>
        <th data-trans="headActions" colspan="3">Actions</th>
    </tr>
    `;
    var book = gBooks.map(currBook => {
        strHtml += `
    <tr>
        <td>${currBook.id}</td>
        <td>${currBook.name}</td>
        <td>${currBook.price}</td>
        <td>${currBook.rate}</td>
        <td><img src="img/${currBook.name}.jpg"></td>
        <td><button class="btn1" data-trans="ReadButton" onclick="onRead(${currBook.id})">Read</button></td>
        <td><button class="btn2" data-trans="UpdateButton" onclick="onUpdateBook(${currBook.id})">Update</button></td>
        <td><button class="btn3" data-trans="DeleteButton" onclick="onRemoveBook(${currBook.id})">Delete</button></td>
    </tr>
    `
    });
    elTable.innerHTML = strHtml;
}



function onRead(id) {
    gCurrIdx = gBooks.findIndex(book => book.id === id);
    console.log('gBooks[gCurrIdx].rate: ', gBooks[gCurrIdx].rate);
    var elModal = document.querySelector('.modal');
    var strHtml = `<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">${gBooks[gCurrIdx].name}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" onclick="onCloseModal()">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <p><img src="img/${gBooks[gCurrIdx].name}.jpg"></p>
        </div>
        <div class="modal-footer">
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary" onclick="onChangeRate(${-1})">-</button>
                <button type="button" class="btn btn-secondary mid1">${gBooks[gCurrIdx].rate}</button>
                <button type="button" class="btn btn-secondary" onclick="onChangeRate(${1})">+</button>
            </div>
            <button type="button" onclick="onCloseModal()" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
    </div>
</div>`;
    elModal.innerHTML = strHtml;
    elModal.style.display = 'inline';
}

function onUpdateBook(bookId) {
    var bookPrice = +prompt('What is the price?');
    updateBook(bookId, bookPrice);
    _renderBooks();
}

function onRemoveBook(bookId) {
    removeBook(bookId)
    _renderBooks();
}

function onAddBook() {
    var newName = prompt('What is the name?');
    var newPrice = +prompt('What is the price?');
    addBook(newName, newPrice);
    _renderBooks();
}

function onCloseModal() {
    var elModal = document.querySelector('.modal');
    elModal.style.display = 'none';
}

function onChangeRate(num) {
    var book = gBooks[gCurrIdx];
    if (book.rate >= 0 && book.rate <= 10) {
        book.rate += num;
    }
    if (book.rate === -1) {
        book.rate = 0;
    }
    if (book.rate === 11) {
        book.rate = 10;
    }
    var elSpan = document.querySelector('.btn.btn-secondary.mid1');
    elSpan.innerText = book.rate;
    _renderBooks();
}

function onSetLang(lang) {
    setLang(lang);
    // TODO: if lang is hebrew add RTL class
    if (lang === 'he') {
        document.body.classList.add('rtl');
        // document.querySelector('h1').classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
    doTrans();
}




// `
// <img src="img/${gBooks[gCurrIdx].name}.jpg">${gBooks[gCurrIdx].name}
// is good book of...
// <button onclick="onCloseModal()">X</button>
// <div class="model-number">
// <button class="btn-modal" onclick="onChangeRate(${-1})">-</button>
// <span>${gBooks[gCurrIdx].rate}</span>
// <button class="btn-modal" onclick="onChangeRate(${1})">+</button>
// </div>`;