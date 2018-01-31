import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {
  books: Array<Book> = [];
  constructor(private _bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }
  getBooks() {
    this._bookService.getBooks()
      .then(books => this.books = books);
  }
}
