import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BookService} from './book/book.service';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BooksListComponent } from './book/books-list/books-list.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { NewBookComponent } from './book/new-book/new-book.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';

@NgModule({
  declarations: [
    BookComponent,
    AppComponent,
    BooksListComponent,
    BookDetailsComponent,
    NewBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
