import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  newBook = new Book();
  @Output() createNewBookEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  create(){
    this.createNewBookEvent.emit(this.newBook);
    this.newBook = new Book();
  }
}
