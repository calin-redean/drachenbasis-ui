import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  name: string;
  comment: string;
}

@Component({
  selector: 'app-infodialog',
  templateUrl: './infodialog.component.html',
  styleUrls: ['./infodialog.component.css']
})

export class Infodialog {
  
  constructor(
    public dialogRef: MatDialogRef<Infodialog>,
    @Inject(MAT_DIALOG_DATA) public info: DialogData) {}

  onClick(): void {
    this.dialogRef.close();
  }

}
