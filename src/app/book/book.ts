import { UUID } from 'angular2-uuid';

export class Book {
  constructor(
    public id: string = '',
    public title: string = '',
    public author: string = '',
    public date: string = '',
    public cover: string = '',
  ) {}

  static Clone(book: Book) {
    const newbook = new Book();
    newbook.author = book.author;
    newbook.date = book.date;
    newbook.cover = book.cover;
    newbook.title = book.title;
    newbook.id = book.id;
    return newbook;  
  }

}
