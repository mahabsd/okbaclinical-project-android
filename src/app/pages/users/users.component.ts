import { Component, OnInit, ViewEncapsulation, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings } from './user.model';
import { UsersService } from 'src/app/services/users.service';
import { LoginService } from 'src/app/services/login.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [UsersService]
})
export class UsersComponent implements OnInit {
    public users;

    public searchText: string;
    public page: any;
    public settings: Settings;
    public showSearch: boolean = false;
    public viewType: string = 'grid';
    image: File;

    constructor(public appSettings: AppSettings,
        public dialog: MatDialog,
        public UserService: LoginService,
        public snackBar: MatSnackBar) {
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
        this.getUsers();

    }

    public getUsers(): void {
        this.users = null; //for show spinner each time
        this.UserService.getAllUsers().subscribe(res => {
            this.users = res;
           
           this.users.forEach(user => {
            if (user.profile.image.indexOf('http://localhost:3000/api/') > -1)
            {
              console.log("") 
            }else{
                user.profile.image = "http://localhost:3000/api/"+ user.profile.image ;
            }
           });
        
        })
    }
    public addUser(user) {
        this.UserService.addUser(user).subscribe(res =>
            this.getUsers()
        )
   }
    public updateUser(user) {
        this.UserService.updateUser(JSON.parse(user.get("_id")), user).subscribe(user => this.getUsers());
    }

    public changeView(viewType) {
        this.viewType = viewType;
        this.showSearch = false;
    }

    public onPageChanged(event) {
        this.page = event;
        this.getUsers();
        document.getElementById('main').scrollTop = 0;
    }

    public openUserDialog(user) {
        let dialogRef = this.dialog.open(UserDialogComponent, {
            data: user
        });
        dialogRef.afterClosed().subscribe(formData => {
            let user = formData

            if (formData) {
               if (JSON.parse(user.get("_id"))!= '') {
                   console.log(formData);
                   
                this.updateUser(formData);
               }else{
               formData.delete("_id");
                this.addUser(formData);
               }
            }
        });
        this.showSearch = false;
    }

    openDialog(user): void {
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

                this.UserService.deleteUser(user._id).subscribe(user => {
                    this.getUsers();
                    let message = "User deleted successfully";
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
    users;
    message: string = "Are you sure?"
    confirmButtonText = "Yes"
    cancelButtonText = "Cancel"
    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }
    // if(data) {
    //     this.message = data.message || this.message;
    //     if (data.buttonText) {
    //         console.log("data.buttonText" + data.buttonText);

    //         this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
    //         this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
    //     }
    // }
    onNoClick(): void {
        this.dialogRef.close();
    }
    onConfirmClick(): void {
        this.dialogRef.close(true);
    }

}
