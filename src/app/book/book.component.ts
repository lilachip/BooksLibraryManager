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
    new Book('1', 'First', 'some author 1', '1998'),
    new Book('2', 'second', 'some author 2', '1998'),
    new Book('3', 'Third', 'some author 3', '1888')
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
