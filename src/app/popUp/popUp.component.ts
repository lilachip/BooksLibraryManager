import { Component } from '@angular/core';
// import {MdDialog, MdDialogRef} from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
  selector: 'my-dialog',
  templateUrl: './popUp.component.html',
  styleUrls: ['./popUp.component.css']
})
export class Dialog {
  constructor( public dialogRef: MatDialogRef<Dialog>){}
}
