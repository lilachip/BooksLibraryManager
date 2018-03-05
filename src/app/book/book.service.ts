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
  data;
  addedBooks=[];
  constructor(public http: HttpClient) {

  }
  public createAbook(): Book {
    const newbook = new Book();
    newbook.id = UUID.UUID();
    this.addedBooks.push(newbook);
    return newbook;
  }

  public getJSON(): Observable<any> {
    let observable = this.http.get('../assets/books-mock.json');
    observable.subscribe(data => {
      this.data = data;
    });
    return observable;
  }

  getBookIndexById(book: any) {
    let index = 0;
    // tslint:disable-next-line:comment-format
    for (; index < this.data.Books.length; index++) {
      if (this.data.Books[index].Id === book.Id) {
        return index;
      }
    }
  }

  addBook(book: any) {
    this.createAbook();
    // const index = this.data.books.length + 1; console.log(book, index);
    this.data.Books.push(book);
    console.log(this.data.books);
    return this.data.Books;
  }
  deleteBook(book: any) {
    const index = this.getBookIndexById(book); console.log(book, index);
    if (index > -1) {
      this.data.Books.splice(index, 1);
      console.log(this.data.Books);
    }
    return this.data.Books;
  }

  editBook(book: Book) {
    // return this.http.put('/books/' + book.id, book).map(data => data.json()).toPromise();
  }

}