import { Component, ViewChild, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})

export class BookComponent implements OnInit {
  books;
  constructor(private _bookService: BookService) {
  }

  ngOnInit() {
    this._bookService.getJSON().subscribe(data => {
      this.books = data.Books;
  });
}

create(book: Book) {
  const i = this.books.indexOf(book);
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
}
