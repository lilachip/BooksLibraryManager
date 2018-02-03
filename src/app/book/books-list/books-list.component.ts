import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';
// import { BookService } from '../book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  @Input() books;
  @Output() deleteABookEvent = new EventEmitter();
  @Output() updateABookEvent = new EventEmitter();
  // private bookService:BookService
  constructor() { }

  ngOnInit() {
    // this.books =this.bookService.getBooks();
  }
  delete(book: Book) {
    const result = confirm('Are You Sure You want to delete that book?');
    if (result) {
    this.deleteABookEvent.emit(book);
    }
  }

  update(books) {
    this.updateABookEvent.emit(books);
  }
}
