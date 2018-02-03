import { Injectable } from '@angular/core';
import { Book } from './book';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookService {
  books: Book;
  constructor(public http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
  });
  }
  public getJSON(): Observable<any> {
    return this.http.get('../assets/books-mock.json');
}

  addBook(book: Book) {
    return this.http.post('/books', book).map(data => data.json()).toPromise();
  }

  deleteBook(book: Book) {
    return this.http.delete('/books/' + book.id).map(data => data.json()).toPromise();
  }

  editBook(book: Book) {
    return this.http.put('/books/' + book.id, book).map(data => data.json()).toPromise();
  }
  // :Observable<Book>
  // '/src/books-mock.json'
  // getBooks(): Promise<Book> {
  //   return new Promise<Book>((resolve, reject) => {
  //     this.http.get('/assets/books-mock.json').map(res => res.json()).subscribe(books => {
  //       resolve(books);

  //     });
  //   });
  // }

  getABook(book: Book) {
    return this._http.get('/books' + book.id).map(data => data.json()).toPromise();
  }

}
