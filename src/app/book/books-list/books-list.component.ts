import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Dialog } from '../../popUp/popUp.component';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  @Input() books;
  @Output() deleteABookEvent = new EventEmitter();
  @Output() updateABookEvent = new EventEmitter();
  
  dialogRef: MatDialogRef<Dialog>;
  constructor(private _bookService: BookService, public dialog: MatDialog) { }

  ngOnInit() {

    this._bookService.waitForBooksList((data) => {
      this.books = data.Books;
      console.log(this.books);
    });
  }

  openAddDialog() {
    this.dialogRef = this.dialog.open(Dialog);
    this.dialogRef.afterClosed().subscribe(
      (result) => {
        console.log("adding:");
        console.log(result);
      });
  }

  openEditDialog() {
    this.dialogRef = this.dialog.open(Dialog);
    this.dialogRef.afterClosed().subscribe(
      (result) => {
        console.log("editing:");
        console.log(result);
      });
  }

  delete(book: Book) {
    const result = confirm('Are You Sure You want to delete that book?');
    if (result) {
      this.books = this._bookService.deleteBook(book);
    }
  }

  update(books) {
    this.updateABookEvent.emit(books);
  }
}
