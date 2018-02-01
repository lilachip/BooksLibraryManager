export class Book {
  constructor(
    public id: string = '',
    public title: string = '',
    public author: string = '',
    public date: string = '',
    public editable: boolean = false,
    public img: string = '',
  ) {}
}
