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

}
