import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import {PopupModule} from 'ng2-opd-popup';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {
// book:Book;
  // popup;
  books;

  constructor(private _bookService: BookService, private popup: PopupModule) {}
  ngOnInit() {
    this._bookService.getJSON().subscribe(data => {
      this.books = data.Books;
  });
}
// openDialog() {
//   this.popup.show();
//   }

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
