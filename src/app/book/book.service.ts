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
      this.book = this.createAbook(data,Object);
      }
    // console.log(data.Books);
    // console.log(this.books);
    console.log(this.book);
});
  }
  public createAbook(data, Object): Book{
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
    // return this.http.get('/books' + book.id).map(data => data.json()).toPromise();
  }

}
