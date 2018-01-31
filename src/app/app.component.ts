import { Component, OnInit } from '@angular/core';

@Component({
  title:"my books manager",
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements ngOnInit {
  books: Object[];

  constructor(private http:Http) {}

  ngOnInit() {
      this.http.get('books-mock.json').subscribe(res => {
      this.books = res.json();
    });
  }
}
