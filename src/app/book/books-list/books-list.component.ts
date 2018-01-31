import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  @Input() books;
  @Output() deleteABookEvent = new EventEmitter();
  @Output() updateABookEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  delete(book: Book) {
    this.deleteABookEvent.emit(book);
  }

  update(books) {
    this.updateABookEvent.emit(books);
  }
}
