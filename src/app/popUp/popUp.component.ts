import { Component, Inject } from '@angular/core';
// import {MdDialog, MdDialogRef} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Book } from '../book/book';

@Component({
  selector: 'my-dialog',
  templateUrl: './popUp.component.html',
  styleUrls: ['./popUp.component.css']
})
export class Dialog {
  constructor(
    public dialogRef: MatDialogRef<Dialog>, 
    @Inject(MAT_DIALOG_DATA) public bookData: Book){}
}
