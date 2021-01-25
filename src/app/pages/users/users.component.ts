import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
            console.log(this.users);
            console.log("hello users"+ this.users);
        })
    }
    public addUser(user:User) {
        this.UserService.addUser(user).subscribe(res =>
            this.getUsers()
        )
    }
    public updateUser(user:User) {
        this.UserService.updateUser(user._id, user).subscribe(user => this.getUsers());
    }
    public deleteUser(user:User) {
        this.UserService.deleteUser(user._id).subscribe(user => {
            console.log((user));
            this.getUsers();
            let message = "User deleted successfully";
            ///action va etre changé
            let action = "Annuler"
            this.snackBar.open(message, action, {
              duration: 2000,
            });
        });
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
        dialogRef.afterClosed().subscribe(user => {
            let use = user
            if (use) {
                (use._id) ? this.updateUser(use) : delete use._id; this.addUser(use);
            }
        });
        this.showSearch = false;
    }

}