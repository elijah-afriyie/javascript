class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  listBooks() {
    this.books.sort((a, b) => a.year - b.year);
    return this.books.map((book) => book.title);
  }
}

const myLibrary = new Library();

myLibrary.addBook({ title: "JS Guide", year: 2018 });
myLibrary.addBook({ title: "React Basics", year: 2021 });
myLibrary.addBook({ title: "Node Essentials", year: 2019 });

const sortedBooks = myLibrary.listBooks();
console.log(sortedBooks);
