import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import jwt_decode from "../../../../../node_modules/jwt-decode";

@Component({
  selector: 'app-schedule-dialog',
  templateUrl: './schedule-dialog.component.html'
})
export class ScheduleDialogComponent implements OnInit {
  public form:FormGroup;
   token = localStorage.getItem('token');
  decoded = jwt_decode(this.token);
  constructor(public dialogRef: MatDialogRef<ScheduleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              ) {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(5)]),
      start: new FormControl('', [Validators.required]),
      descrip: new FormControl('', [Validators.required]),
      isEdit : new FormControl(''),
      color: new FormControl(''),
    });
    this.form.patchValue({
     
      'isEdit' : false,
      'color': JSON.parse(JSON.stringify(this.decoded))._id,
    })
  }


  ngOnInit() {
    console.log(this.form);
    

    if (this.data){
      this.form.patchValue({
        'title': this.data.title,
        'start': this.data.start,
        'descrip': this.data.descrip,
        'isEdit' : true,
        'color': JSON.parse(JSON.stringify(this.decoded))._id,
      })
    }
    console.log(this.form);
  }

  close(): void {
    this.dialogRef.close();
  }

}