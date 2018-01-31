import { Book } from '../book';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  @Input() book: Book;
  @Output() updateABookEvent = new EventEmitter();
  bookEdit: Book = new Book();
  constructor() { }

  ngOnInit() {
    Object.assign(this.bookEdit, this.book);
  }
  update() {
    this.bookEdit.editable = false;
    this.updateABookEvent.emit({ original: this.book, edited: this.bookEdit });
  }
}
