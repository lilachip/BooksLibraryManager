import { Injectable } from '@angular/core';
import { Book } from './book';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookService {
  // book: Book;
  books;
  book;
  constructor(public http: HttpClient) {
    this.getJSON().subscribe(data => {
      let index = 0;
      for (index; index < data.Books.length; index++) {
          // let book = data.Books[index];
          // this.books.push(Book);
      this.book = this.createAbook(data);
      }
    // console.log(data.Books);
    // console.log(this.books);
    console.log(this.book);
});
  }
  public createAbook(data): Book {
    let book = new Book();
    book.id = data['Id'];
    book.title = data['Title'];
    book.author = data['Author'];
    book.date = data['Date'];
    book.img = data['Cover'];
    book.editable = data['Editable'];
    return book;
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

  addBook(book: Book) {
    return this.http.post('/books', book).map(data => data.toString());
  }

  deleteBook(book: Book) {
    // return this.http.delete('/books/' + book.id).map(data => data.json()).toPromise();
  }

  editBook(book: Book) {
    // return this.http.put('/books/' + book.id, book).map(data => data.json()).toPromise();
  }

  getABook(book: Book) {
    // return this.http.get('/books' + book.id).map(data => data.json()).toPromise();
  }

}
