import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  newBook = new Book();
  books = [];
  @Output() createNewBookEvent = new EventEmitter();
  constructor(private _bookService: BookService) {
    this._bookService.getBooks().subscribe(data => {
      this.books = data.Books;
    });
  }

  ngOnInit() {
    //this.create();
  }
  create(){
    this.newBook = {
      id :'',
      title:'',
      author:'',
      date:'',
      img:''
    };
    //this.newBook = this._bookService.createAbook(Book);
     this.books.push(this.newBook);
   //  this._bookService.addBook(this.newBook);
     console.log(this.newBook);
   }
}
