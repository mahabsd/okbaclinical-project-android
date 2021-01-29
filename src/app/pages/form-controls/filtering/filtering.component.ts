import { Component, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { CongeService } from 'src/app/services/conge.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html'
})
export class FilteringComponent {
  public displayedColumns = ['user', 'requestDate', 'dateDebut', 'dateFin', 'daysNumber', 'motif', 'status', 'respond'];
  public dataSource: any;
  public settings: Settings;
  constructor(public appSettings: AppSettings, private tablesService: CongeService, public snackBar: MatSnackBar, public dialog: MatDialog) {
    this.settings = this.appSettings.settings;
    this.tablesService.getAllconges().subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);


    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

//approve request
confirmRequest(conge){

  //change status cong : conge schema

  //reduce solde conge  : solde conge- nbr des jrs : user schema

}



//refuse request
  openDialog(conge): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {
        message: 'Are you sure want to delete ?',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      let confirm = confirmed;

      if (confirm) {
//change status depending on the role
        this.tablesService.deleteconge(conge._id).subscribe(conge => {
          console.log((conge));
          this.tablesService.getAllconges().subscribe(res => {
            this.dataSource = res;      
          })
          let message = "request refused";
          let action = "close"
          this.snackBar.open(message, action, {
            duration: 2000,
          });
        });
      }
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  conges;
  message: string = "Are you sure?"
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}