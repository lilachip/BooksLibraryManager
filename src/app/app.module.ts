import {BookService} from './book/book.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BookComponent } from './book/library.component';
import { BooksListComponent } from './book/books-list/books-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Dialog} from './popUp/popUp.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    BookComponent,
    AppComponent,
    Dialog,
    BooksListComponent,
  ],
  entryComponents: [ Dialog ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
