import { Injectable } from '@angular/core';
import { Book } from './book';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookService {
  book: Book;
  data;
  addedBooks=[];
  whenBooksListReady: Function;
  constructor(public http: HttpClient) {

  }
  public createAbook(book): Book {
    const newbook = new Book();
    newbook.id = book['Id'];
    newbook.title = book['Title'];
    newbook.author = book['Author'];
    newbook.date = book['Date'];
    newbook.img = book['Cover'];
    this.addedBooks.push(newbook);
    return newbook;
  }

  public waitForBooksList(action: Function) { // waitForBooksList = function
    this.whenBooksListReady = action; // whenBooksListReady = delegation

    this.getJSON().subscribe(data => {
      this.data = data;
    });


  }

  public getJSON(): Observable<any> {
    return this.http.get('../assets/books-mock.json');
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
    this.createAbook(Book);
    // const index = this.data.books.length + 1; console.log(book, index);
    this.data.Books.push(book);
    console.log(this.data.books);
    return this.data.Books;
  }
  deleteBook(book: any) {
    const index = this.getBookIndexById(book); console.log(book, index);
    if (index > -1) {
      this.data.Books.splice(index, 1);
      console.log(this.data.books);
    }
    return this.data.Books;
  }

  editBook(book: Book) {
    // return this.http.put('/books/' + book.id, book).map(data => data.json()).toPromise();
  }

}