import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Dialog } from '../../popUp/popUp.component';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
  @Input() books;
  dialogRef: MatDialogRef<Dialog>;
  constructor(private _bookService: BookService, public dialog: MatDialog) { }

  openAddDialog() {
    let book = this._bookService.createBook();
    this.dialogRef = this.dialog.open(Dialog,
    {
      data: book
    });

    this.dialogRef.afterClosed().subscribe(
      (result) => {
        this._bookService.addBook(book);
      });
  }
//check how im inserting it to the specific opened item...
// document.getElementById('BookRow').innerHTML = '<h1>Some Title</h1>';
// console.log("im here");
  openEditDialog(book: Book) {
    let clone = Book.Clone(book);
    this.dialogRef = this.dialog.open(Dialog, {
      data: clone
    });
    this.dialogRef.afterClosed().subscribe(
      (result) => {
        this._bookService.updateBook(clone);
      });
  }

  delete(book: Book) {
    const result = confirm('Are You Sure You want to delete '+book.title+'?');
    if (result) {
      this._bookService.deleteBook(book);
    }
  }

}
