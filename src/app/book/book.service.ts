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
    newbook.editable = book['Editable'];
    this.addedBooks.push(newbook);
    return newbook;
  }
  /*addBooks = function(data){
    let newBook = {
        "id":this.book.id,
        "title":this.book.Title,
        "author":this.book.Author,
        "date":this.book.Date
     };
    this.books.push(newBook);
    }*/

  /*public selectAllBooks() {
    return this.books;
  }*/

  public waitForBooksList(action: Function) { // waitForBooksList = function
    this.whenBooksListReady = action; // whenBooksListReady = delegation

    this.getJSON().subscribe(data => {
      this.data = data;
      // tslint:disable-next-line:comment-format
      //console.log(this.books);
      // tslint:disable-next-line:comment-format
      //this.whenBooksListReady(this.books);

      // console.log(data.Books);
      // console.log(this.books);
      // tslint:disable-next-line:comment-format
      //console.log(this.book);


    });


  }

  public getJSON(): Observable<any> {
    return this.http.get('../assets/books-mock.json');
    // .map(res => {
    //   return res.json().books.map(book => {
    //     return new Book (
    //       book.id,
    //       book.title,
    //       book.author,
    //       book.date,
    //       book.img,
    //       book.editable
    //     );
    //   });
    // });
  }

  getBookIndexById(book: any) {
    let index = 0;
    // tslint:disable-next-line:comment-format
    //debugger;
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
