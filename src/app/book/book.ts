import { UUID } from 'angular2-uuid';

export class Book {
  constructor(
    public id: string = '',
    public title: string = '',
    public author: string = '',
    public date: string = '',
    public img: string = '',
  ) {}

  static Clone(book: Book) {
    const newbook = new Book();
    newbook.author = book.author;
    newbook.date = book.date;
    newbook.img = book.img;
    newbook.title = book.title;
    newbook.id = UUID.UUID();
    return newbook;  
  }

}
