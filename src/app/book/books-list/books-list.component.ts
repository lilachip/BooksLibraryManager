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
        console.log("adding:");
        console.log(book);
        this.books = this._bookService.addBook(book);
      });
  }

  openEditDialog(book: Book) {
    let clone = Book.Clone(book);
    console.log("editing:");
    console.log(clone);
    this.dialogRef = this.dialog.open(Dialog, {
      data: clone
    });
    this.dialogRef.afterClosed().subscribe(
      (result) => {
        console.log("changing:");
        console.log(clone);
        book.title = clone.title;
        book.date = clone.date;
        book.author = clone.author;
      });
  }

  delete(book: Book) {
    const result = confirm('Are You Sure You want to delete that book?');
    if (result) {
      this.books = this._bookService.deleteBook(book);
    }
  }

}
