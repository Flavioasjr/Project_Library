let myLibrary = [];

function Book (title, author, numberOfPages, bookRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.bookRead = bookRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function showLibrary() {
    const listCardBook = document.querySelector('.list_card_book');

    if (myLibrary.length === 0) {
        console.log('There are no books in your library');
        return;
    }

    for (let book of myLibrary) {
        const liCard = document.createElement('li');
        const h2 = document.createElement('h2');
        const ul = document.createElement('ul');
        const liContentCard1 = document.createElement('li');
        const liContentCard2 = document.createElement('li');
        const liContentCard3 = document.createElement('li');

        liCard.classList.add('card_book');

        h2.textContent = book.title;
        liContentCard1.textContent = `Author: ${book.author}`;
        liContentCard2.textContent = `Number of Pages: ${book.numberOfPages}`;

        if(book.bookRead === 'yes') liContentCard3.textContent = ' Book read';
        if(book.bookRead === 'no') liContentCard3.textContent = ' Unread book';

        listCardBook.appendChild(liCard);
        liCard.appendChild(h2);
        liCard.appendChild(ul);
        ul.appendChild(liContentCard1);
        ul.appendChild(liContentCard2);
        ul.appendChild(liContentCard3);
    }

    btnShowBooks.addEventListener('click', e => {
        e.preventDefault();

        listCardBook.innerHTML = '';
        showLibrary();
    });

}


const btnFormAddBook = document.querySelector('.btn_form_add_book');
const addBook = document.querySelector('.add_book');
const btnAddBook = document.querySelector('.btn_add_book');
const showBooks = document.querySelector('.show_books');

btnFormAddBook.addEventListener('click', e => {
    addBook.style.display = 'flex';
    showBooks.style.display = 'none';
});

btnAddBook.addEventListener('click', e => {
    e.preventDefault();

    let bookRead = '';
    const inputTitle = document.querySelector('#title');
    const inputAuthor = document.querySelector('#author');
    const inputPages = document.querySelector('#pages');
    const inputRead = document.querySelectorAll('#read');

    for (let i=0; i < inputRead.length; i++) {
        if (inputRead[i].checked) {
            bookRead = inputRead[i].value;
        }
    }

    const book = new Book(inputTitle.value, inputAuthor.value, 
        inputPages.value, bookRead);

    addBookToLibrary(book);
    
    addBook.style.display = 'none';    
});

const btnShowBooks = document.querySelector('.btn_show_books');

btnShowBooks.addEventListener('click', e => {
    e.preventDefault();

    showLibrary();
    addBook.style.display = 'none';    
    showBooks.style.display = 'block';
});