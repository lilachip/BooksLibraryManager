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
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Dialog} from './popUp/popUp.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    BookComponent,
    AppComponent,
    Dialog,
    BooksListComponent,
    BookDetailsComponent,
    NewBookComponent,
    EditBookComponent
  ],
  entryComponents: [ Dialog ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
