let myLibrary = [];

class Book {
    constructor(title, author, numberOfPages, bookRead) {
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.bookRead = bookRead;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function removeBookToLibrary(bookPosition) {
    myLibrary.splice(bookPosition, 1);
}

function showLibrary() {
    const listCardBook = document.querySelector('.list_card_book');
    listCardBook.innerHTML = '';
    
    const emptyLibrary = document.querySelector('.empty-library');
    if(emptyLibrary) emptyLibrary.parentNode.removeChild(emptyLibrary); 

    if (myLibrary.length === 0) {
        const p = document.createElement('p');
        p.classList.add('empty-library');

        p.textContent = `You don´t have books yet`;

        showBooks.appendChild(p);
        return;
    }


    for (let i=0; i < myLibrary.length; i++) {
        const liCard = document.createElement('li');
        const h3 = document.createElement('h3');
        const ul = document.createElement('ul');
        const liContentCard1 = document.createElement('li');
        const liContentCard2 = document.createElement('li');
        const liContentCard3 = document.createElement('li');
        const div = document.createElement('div');
        const buttonRead = document.createElement('button');
        const buttonRemove = document.createElement('button');

        liCard.classList.add('card_book');
        ul.classList.add('itens-book');
        buttonRead.classList.add('btn-read-book');
        buttonRemove.classList.add('btn-remove-book');

        buttonRead.dataset.postion = i;
        buttonRemove.dataset.postion = i;

        h3.textContent = myLibrary[i].title;
        liContentCard1.textContent = `Author: ${myLibrary[i].author}`;
        liContentCard2.textContent = `Number of Pages: ${myLibrary[i].numberOfPages}`;

        buttonRead.textContent = 'Read';
        buttonRemove.textContent = 'Remove';

        if(myLibrary[i].bookRead === 'yes') liContentCard3.textContent = ' Book read';
        if(myLibrary[i].bookRead === 'no') liContentCard3.textContent = ' Unread book';

        listCardBook.appendChild(liCard);
        liCard.appendChild(h3);
        liCard.appendChild(ul);
        ul.appendChild(liContentCard1);
        ul.appendChild(liContentCard2);
        ul.appendChild(liContentCard3);
        ul.appendChild(div);
        div.appendChild(buttonRead);
        div.appendChild(buttonRemove);
    }

    const btnRemoveBook = document.querySelectorAll('.btn-remove-book');

    if(btnRemoveBook) {
        for( let remove of btnRemoveBook) {
            remove.addEventListener('click', e => {
                removeBookToLibrary(Number(remove.dataset.postion));
                
                showLibrary();
            });
        }
    }

    const btnReadBook = document.querySelectorAll('.btn-read-book');

    if(btnReadBook) {
        for( let read of btnReadBook) {
            read.addEventListener('click', e => {
                myLibrary[Number(read.dataset.postion)].bookRead = 'yes';
                
                showLibrary();
            });
        }
    }

    btnShowBooks.addEventListener('click', e => {
        showLibrary();        
    });

}

function checkInputData() {
    const inputTitle = document.querySelector('#title');
    const inputAuthor = document.querySelector('#author');
    const error = document.querySelectorAll('.error');
    let check = true;

    if(inputTitle.validity.valueMissing) {
        error[0].textContent += 'You need to enter a tittle.';
        check = false;
    } 

    if(inputAuthor.validity.valueMissing) {
        error[1].textContent += 'You need to enter a author.';
        check = false;
    } 
    return check;
}

const btnNewBokk = document.querySelector('.btn_new_book');
const addBook = document.querySelector('.add_book');
const btnAddBook = document.querySelector('.btn_add_book');
const showBooks = document.querySelector('.show_books');
const content = document.querySelector('.content');

btnNewBokk.addEventListener('click', e => {
    addBook.style.display = 'flex';
    content.style.cssText = 'flex-direction: column;';
});

btnAddBook.addEventListener('click', e => {
    e.preventDefault();

    const checkInput = checkInputData();

    if(!checkInput) return;

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

    if (inputTitle.value === '') return;

    const book = new Book(inputTitle.value, inputAuthor.value, 
        inputPages.value, bookRead);

    addBookToLibrary(book);

    showLibrary();
    inputTitle.value = '';
    inputAuthor.value = '';
    inputPages.value = '';
    
    content.style.cssText = 'flex-direction: row;';
    addBook.style.display = 'none';
});

const btnShowBooks = document.querySelector('.btn_show_books');

btnShowBooks.addEventListener('click', e => {
    showLibrary();
    showBooks.style.display = 'block';
});