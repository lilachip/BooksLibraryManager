import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my books manager';
  books: Object[];

  constructor(private http: Http) { }
  ngOnInit() {
    this.http.get('.assets/books-mock.json').subscribe(res => {
      this.books = res.json();
    });
  }
}
