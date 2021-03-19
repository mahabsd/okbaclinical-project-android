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
import { MessagesService } from 'src/app/theme/components/messages/messages.service';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  providers: [MessagesService]

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
  compare: any;
  userConges: any;

  constructor(public appSettings: AppSettings,
    private tablesService: CongeService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public loginService: LoginService,
    public messagesService : MessagesService) {  }
    ngOnInit() {
      this.token = localStorage.getItem('token');
      this.decoded = JSON.parse(JSON.stringify(jwt_decode(this.token)));
      this.compare = this.decoded.roles[0].name;
    this.settings = this.appSettings.settings;

    this.tablesService.getAllconges().subscribe(res => {
      this.dataSource = res;
      this.dataSource = this.dataSource.sort((data1: any, data2: any) => {
        return data2.createdAt - data1.createdAt
      })
     
       this.dataSource.reverse();
       switch (this.compare) {
         case "surveillant Générale":
          this.userConges = this.dataSource.filter(conge => conge.status === "infirmiers et aide" 
          || conge.status === "surveillant Maternité"
          || conge.status === "surveillant Bloc"
          || conge.status === "surveillant Anesthésie"
          || conge.status === "surveillant chirurgie"
          || conge.status === "anesthesistes");
           break;
           case"responsable facturation":
           this.userConges = this.dataSource.filter(conge => conge.status=== "acceuil+cassiers+facturations"
           || conge.status === "cassiers principale")
           break;
           case"respon-maintenance":
           this.userConges = this.dataSource.filter(conge => conge.status=== "team-matenaince")
           break;
           case"hyginiste":
           this.userConges = this.dataSource.filter(conge => conge.status=== "cuisine")
           break;
           case"Respnsable Pharmacie":
           this.userConges = this.dataSource.filter(conge => conge.status=== "pharmaciens"
           || conge.status === "cassiers principale")
           break;
           case"gouvernantes":
           this.userConges = this.dataSource.filter(conge => conge.status=== "ouvriers")
           break;
           case"respon-financier":
           this.userConges = this.dataSource.filter(conge => conge.status=== "comptable")
           break;
           case"gouvernantes":
           this.userConges = this.dataSource.filter(conge => conge.status=== "ouvriers")
           break;
          case"gouvernantes":
           this.userConges = this.dataSource.filter(conge => conge.status=== "ouvriers")
           break; 
           case"Pdg":
           this.userConges = this.dataSource.filter(conge => conge.status === "econome" 
           || conge.status === "respon-financier"
           || conge.status === "gouvernantes"
           || conge.status === "Respnsable Pharmacie"
           || conge.status === "hyginiste"
           || conge.status === "respon-maintenance"
           || conge.status === "responsable facturation"
           || conge.status === "responsable-RH"
           || conge.status === "secritaire personnelle"
           || conge.status === "secritaire générale"
           || conge.status === "surveillant Générale"
           || conge.status === "Responsable-info"
           || conge.status === "directeur-technique");
           break;
           case"directeur-technique":
           this.userConges = this.dataSource.filter(conge => conge.status=== "surveillant Générale1")
           break;
           case"responsable-RH":
           this.userConges = this.dataSource.filter(conge => conge.status === "directeur-technique1" 
           || conge.status === "gouvernantes1"
           || conge.status === "Respnsable Pharmacie1"
           || conge.status === "hyginiste1"
           || conge.status === "respon-maintenance1"
           || conge.status === "responsable facturation1"
           || conge.status === "Pdg1"
           || conge.status === "respon-financier1"
           || conge.status === "responsable-RH1"
           || conge.status === "validated"
          );
           break;
           
         default:
          this.userConges = this.dataSource
       }
      this.data = new MatTableDataSource<Element>(this.userConges)
    })
  }
  // this.userConges = this.dataSource.filter(conge => conge.userOwner._id === this.userId)
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
      case "acceuil+cassiers+facturations": 
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
       case "admin":
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
        this.loginService.getUser(this.userId).subscribe(user => {
          this.user = user;
          this.form.patchValue(this.user);
          this.form.patchValue({
            work: {
              soldeConge: (this.soldeConge - (conge.nbreJours))
            }
          })
          this.loginService.updateUserConge(this.userId, this.form.value).subscribe(res => {
          })
        })
        let message = {
          reciever: conge.userOwner._id,
          text: "your vacation leaves has been approved",
          userOwner: this.userId,
          conge: true
        }
        this.messagesService.sendNotification(message).subscribe();
        break;
      default:
        break;
    }

    this.tablesService.updateconge(conge._id, formconge).subscribe(conge => {
      this.ngOnInit() ;
      let message = "holidays request approved";
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
      this.ngOnInit() ;
      let message = "holidays request canceled";
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
          this.ngOnInit() ;
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