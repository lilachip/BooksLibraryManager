import { Injectable } from '@angular/core';
import { Book } from './book';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class BookService {

  constructor(private _http: Http) { }
  addBook(book: Book) {
    return this._http.post('/books', book).map(data => data.json()).toPromise();
  }

  deleteBook(book: Book) {
    return this._http.delete('/books/' + book.id).map(data => data.json()).toPromise();
  }

  editBook(book: Book) {
    return this._http.put('/books/' + book.id, book).map(data => data.json()).toPromise();
   }
// :Observable<Book>
  getBooks() {
    return this._http.get('/books').map(data => data.json()).toPromise();
   }

  getABook(book: Book) {
    return this._http.get('/books' + book.id).map(data => data.json()).toPromise();
  }

}
