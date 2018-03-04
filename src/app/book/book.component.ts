import { Component, ViewChild, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import {Dialog} from '../popUp/popUp.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {
// book:Book;
  books;
  dialogRef: MatDialogRef<Dialog>;
  constructor(private _bookService: BookService, public dialog: MatDialog) {
    // this.openDialog();
  }
  openDialog(){
    this.dialogRef = this.dialog.open(Dialog);
    this.dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
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
  getBooks() {
    // this._bookService.getBooks()
    //   .then(books => this.books = books);
  }
}
