import { Component, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { CongeService } from 'src/app/services/conge.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import jwt_decode from "../../../../../node_modules/jwt-decode";
import { LoginService } from 'src/app/services/login.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html'
})
export class FilteringComponent {
  public displayedColumns = ['user', 'requestDate', 'dateDebut', 'dateFin', 'daysNumber', 'motif', 'status', 'respond'];
  public dataSource: any;
  public data: MatTableDataSource<Element>;
  public settings: Settings;
  token: string;
  decoded: any;
  userId: any;
  form = new FormGroup({
    _id: new FormControl(''),
    username: new FormControl('',),
    password: new FormControl('',),
    profile: new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      birthday: new FormControl(''),
      gender: new FormControl(''),
    }),
    work: new FormGroup({
      company: new FormControl(''),
      roles: new FormControl([]),
      soldeConge: new FormControl('')
    }),
    contacts: new FormGroup({
      email: new FormControl('',),
      phone: new FormControl(''),
      address: new FormControl(''),
    }),
    social: new FormGroup({
      facebook: new FormControl(''),
      twitter: new FormControl(''),
      google: new FormControl('')
    }),
    settings: new FormGroup({
      registrationDate: new FormControl(''),
      joinedDate: new FormControl(''),
      bgColor: new FormControl(''),
    })
  });
  soldeConge: any;
  userOwner: Object;
  user: any;
  
  constructor(public appSettings: AppSettings,
    private tablesService: CongeService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public loginService: LoginService) {
    this.settings = this.appSettings.settings;
    this.tablesService.getAllconges().subscribe(res => {
      this.dataSource = res;
      this.data   = new MatTableDataSource<Element>( this.dataSource)
    })
  }

  applyFilter(filterValue: string) {
    this.data.filter = filterValue.trim().toLowerCase();
  }

  //approve request
  confirmRequest(conge) {

    switch (conge.status) {
      case "infirmiers et aide": case "surveillant Maternité": case "surveillant Bloc":
      case "surveillant Anesthésie": case "surveillant chirurgie": case "anesthesistes":
        var statut = "surveillant Générale1";
        var formconge = ({
          status: JSON.parse(JSON.stringify(statut)),
        });
        break;
      case "acceuil+cassiers+facturations": case "cassiers principale":
        var statut = "responsable facturation1";
        var formconge = ({
          status: JSON.parse(JSON.stringify(statut)),
        });
        break;
      case "team-matenaince":
        var statut = "respon-maintenance1";
        var formconge = ({
          status: JSON.parse(JSON.stringify(statut)),
        });
        break;

      case "cuisine":
        var statut = "hyginiste1";
        var formconge = ({
          status: JSON.parse(JSON.stringify(statut)),
        });
        break;
      case "pharmaciens":
        var statut = "Respnsable Pharmacie1";
        var formconge = ({
          status: JSON.parse(JSON.stringify(statut)),
        });
        break;
      case "ouvriers":
        var statut = "gouvernantes1";
        var formconge = ({
          status: JSON.parse(JSON.stringify(statut)),
        });
        break;
      case "comptable":
        var statut = "respon-financier1";
        var formconge = ({
          status: JSON.parse(JSON.stringify(statut)),
        });
        break;
      case "econome": case "respon-financier": case "gouvernantes": case "Respnsable Pharmacie": case "hyginiste":
      case "respon-maintenance": case "responsable facturation": case "responsable-RH":
      case "secritaire personnelle": case "secritaire générale": case "surveillant Générale": case "Responsable-info":
      case "directeur-technique":
        var statut = "Pdg1";
        var formconge = ({
          status: JSON.parse(JSON.stringify(statut)),
        });
        break;
      case "directeur-technique1": case "gouvernantes1": case "Respnsable Pharmacie1": case "hyginiste1":
      case "respon-maintenance1": case "responsable facturation1": case "Pdg1": case "respon-financier1":
      case "responsable facturation1": case "admin":
        var statut = "responsable-RH1";
        var formconge = ({
          status: JSON.parse(JSON.stringify(statut)),
        });
        break;
      case "surveillant Générale1":
        var statut = "directeur-technique1";
        var formconge = ({
          status: JSON.parse(JSON.stringify(statut)),
        });
        break;
      case "responsable-RH1":
        var statut = "validated";
        var formconge = ({
          status: JSON.parse(JSON.stringify(statut)),
        });
        this.token = localStorage.getItem('token');
        this.decoded = JSON.parse(JSON.stringify(jwt_decode(this.token)));
        this.userId = this.decoded._id;
        this.soldeConge = this.decoded.soldeConge;
        this.loginService.getUser(this.userId).subscribe(user =>{
          this.user = user;
          this.form.patchValue(this.user);
          console.log(this.form.value);
          this.form.patchValue({
            work :{
              soldeConge: (this.soldeConge - (conge.nbreJours) )
            }
          }) 
          console.log(this.form);
          this.loginService.updateUserConge(this.userId, this.form.value).subscribe(res => {
            console.log(res);
          })
        })
        break;
      default:
        break;
    }

    this.tablesService.updateconge(conge._id, formconge).subscribe(conge => {
      this.tablesService.getAllconges().subscribe(res => {
        this.dataSource = res;
        this.data   = new MatTableDataSource<Element>( this.dataSource)

      })
      let message = "demande congé validée ";
      let action = "close"
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    });

  }

  cancelRequest(conge) {
    var statut = "annulée";
    var formconge = ({

      status: JSON.parse(JSON.stringify(statut)),

    });
    this.tablesService.updateconge(conge._id, formconge).subscribe(conge => {
      console.log((conge));
      this.tablesService.getAllconges().subscribe(res => {
        this.dataSource = res;
        this.data   = new MatTableDataSource<Element>( this.dataSource)

      })
      let message = "demande congé annulé ";
      let action = "close"
      this.snackBar.open(message, action, {
        duration: 2000,
      });


    });


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
                  this.data   = new MatTableDataSource<Element>( this.dataSource)

          })
          let message = "request deleted";
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