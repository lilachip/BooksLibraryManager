import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  newBook = new Book();
  books;
  @Output() createNewBookEvent = new EventEmitter();
  constructor(private _bookService: BookService) {
    this._bookService.getJSON().subscribe(data => {
      this.books = data.Books;
    });
  }

  ngOnInit() {
  }
  create(){
    this.createNewBookEvent.emit(this.newBook);
    this.newBook = new Book();
this.books.push(this.newBook);
    console.log(this.newBook);
  }
}
