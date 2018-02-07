import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  @Input() books;
  @Output() deleteABookEvent = new EventEmitter();
  @Output() updateABookEvent = new EventEmitter();

  constructor(private _bookService: BookService) { }

  ngOnInit() {
   /* this._bookService.getJSON().subscribe(data => {
    this.books = data.Books;
    // let book = this._bookService.book;
    //console.log(this.books);
    //console.log(data);
    // console.log(book);
});*/

//this.books = this._bookService.selectAllBooks();


this._bookService.waitForBooksList((books) => {
  this.books = books;
  console.log(this.books);
});
}

  delete(book: Book) {
    const result = confirm('Are You Sure You want to delete that book?');
    if (result) {
    //this.deleteABookEvent.emit(book);
    this._bookService.deleteBook(this.books, book);
    console.log(this.books);
    }
  }

  update(books) {
    this.updateABookEvent.emit(books);
  }
}
