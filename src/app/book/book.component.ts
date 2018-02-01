import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {
  books: Array<Book> = [
    new Book('1', 'Adventures-of-Huckleberry', 'some author 1', '1998', false, '/src/assets/images/Adventures-of-Huckleberry-01.jpg'),
    new Book('2', 'second', 'some author 2', '1998', false, '/src/assets/images/Haruki-08.jpg'),
    new Book('3', 'catch-22', 'some author 3', '1888', false, '/src/assets/images/catch-22-05.jpg'),
    new Book('4', 'Joseph-Conrad-', 'some author 1', '1998', false, '/src/assets/images/Joseph-Conrad-004.jpg'),
    new Book('5', 'Middlemarch', 'some author 2', '1998', false, '/src/assets/images/Middlemarch--003.jpg'),
    new Book('6', 'Ulysses', 'some author 3', '1888', false, '/src/assets/images/Ulysses-002.jpg')
  ];
  constructor(private _bookService: BookService) { }

  ngOnInit() {
    // this.getBooks();
  }
  create(book: Book) {
    this.books.push(book);
  }
  delete(book: Book) {
    const i = this.books.indexOf(book);
    this.books.splice(i, 1);
  }

  update(books: any) {
    console.log(books);
    const i = this.books.indexOf(books.original);
    this.books[i] = books.edited;
  }
  getBooks() {
    // this._bookService.getBooks()
    //   .then(books => this.books = books);
  }
}
