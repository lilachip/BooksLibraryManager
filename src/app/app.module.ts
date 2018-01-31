import {BookService} from './book/book.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BooksListComponent } from './book/books-list/books-list.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { NewBookComponent } from './book/new-book/new-book.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
