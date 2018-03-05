import { Injectable } from '@angular/core';
import { Book } from './book';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UUID } from 'angular2-uuid';

@Injectable()
export class BookService {
  book: Book;
  books;
  constructor(public http: HttpClient) {

  }

  public createBook(): Book {
    const newbook = new Book();
    newbook.id = UUID.UUID();
    return newbook;
  }

  public getJSON(): Observable<any> {
    let observable = this.http.get('../assets/books-mock.json');
    
    return observable.map(data => {
      this.books = data["Books"];
      return this.books;
    });
  }

  getBookIndexById(book: any) {
    let index = 0;
    // tslint:disable-next-line:comment-format
    for (; index < this.books.length; index++) {
      if (this.books[index].id === book.id) {
        return index;
      }
    }
  }

  addBook(book: Book) {
    this.books.push(book);
  }

  deleteBook(book: any) {

    const index = this.getBookIndexById(book); 
    if (index > -1) {
      this.books.splice(index, 1);
    }
  }

}