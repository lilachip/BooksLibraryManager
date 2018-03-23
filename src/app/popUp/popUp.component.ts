import { Component, Inject, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Book } from '../book/book';

@Component({
  selector: 'my-dialog',
  templateUrl: './popUp.component.html',
  styleUrls: ['./popUp.component.css']
})
export class Dialog {
  // form: FormGroup;
  constructor(
    // private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public bookData: Book) { }

  // ngOnInit() {
  //   this.form = this.formBuilder.group({
  //     // cover: '',
  //     title: '',
  //     author: '',
  //     date: '',
  //   });
  // }

  // submit(form) {
  //   this.dialogRef.close(`${form.value.filename}`);
  // }
}
