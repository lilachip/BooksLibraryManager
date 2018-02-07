import { Injectable } from '@angular/core';
import { Book } from './book';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import { PopupModule } from 'ng2-opd-popup';

@Injectable()
export class BookService {
  book: Book;
  data;
  whenBooksListReady: Function;
  // book;, public popup: PopupModule
  constructor(public http: HttpClient) {

}
// OpenDialog() {
//     this.popup.show();
//     }

  public createAbook(data): Book {
    const book = new Book();
    book.id = data['Id'];
    book.title = data['Title'];
    book.author = data['Author'];
    book.date = data['Date'];
    book.img = data['Cover'];
    book.editable = data['Editable'];
    return book;
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
        //console.log(this.books);
        //this.whenBooksListReady(this.books);

      // console.log(data.Books);
      // console.log(this.books);
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

  addBook(book: Book) {

    return this.http.post('/books', book).map(data => data.toString());
  }

  getBookIndexById(book: any) {
    let index = 0;
    //debugger;
    for (; index < this.data.Books.length; index++) {
      if (this.data.Books[index].Id === book.Id) {
        return index;
      }
    }
  }

  deleteBook(book: any) {

    const index = this.getBookIndexById(book); console.log(book, index);

    if (index > -1) {
      this.data.Books.splice(index, 1);

    }
    return this.data.Books;
    // return this.http.delete('/books/' + book.id).map(data => data.json()).toPromise();
  }

  editBook(book: Book) {
    // return this.http.put('/books/' + book.id, book).map(data => data.json()).toPromise();
  }

  getABook(book: Book) {
    // return this.http.get('/books' + book.id).map(data => data.json()).toPromise();
  }

}
