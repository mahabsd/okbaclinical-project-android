import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings } from './user.model';
import { UsersService } from 'src/app/services/users.service';
import { LoginService } from 'src/app/services/login.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';


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
        public UserService: LoginService) {
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
        }
        )
    }
    public addUser(user) {
        this.UserService.addUser(user).subscribe(res =>{
            console.log(res)
            this.getUsers();
        })
    }
    public updateUser(user) {
        this.UserService.updateUser(user._id, user).subscribe(user => this.getUsers());
    }
    public deleteUser(user) {
        this.UserService.deleteUser(user._id).subscribe(user => {
            console.log((user));
            this.getUsers();
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
            if (user) {
                (user._id) ? this.updateUser(user) : this.addUser(user);
            }
        });
        this.showSearch = false;
    }

}