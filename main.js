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

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295', false);
const book2 = new Book('Harry Potter', 'J.K. Rowling', '264', true);

addBookToLibrary(book1);
addBookToLibrary(book2);

console.log(myLibrary);