import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { Chat } from './chat.model';
import { ChatService } from './chat.service';
import { throttleTime, distinctUntilChanged } from 'rxjs/operators';
import jwt_decode from "../../../../node_modules/jwt-decode";
import { FormControl, FormGroup } from '@angular/forms';
import { Socket } from 'ngx-socket-io';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit {
  @ViewChild('sidenav') sidenav: any;
  public settings: Settings;
  public userImage = 'assets/img/users/user.jpg';
  public chats: Array<Chat>;
  public talks: Array<Chat>;
  public sidenavOpen: boolean = true;
  public currentChat: Chat;
  public newMessage: string;

  listeCandidats: any;
  chosenUser: any;
  listeMessages: any;
  messageForm: FormGroup;
  conversation: any;
  logo = localStorage.getItem('avatar') ||{};
  token = localStorage.getItem('token');
  decoded = JSON.parse(JSON.stringify(jwt_decode(this.token)))
  userId = this.decoded._id
  constructor(public appSettings:AppSettings, private socket: Socket, public chatService: ChatService, public auth: LoginService) {
    this.listeMessages = [];
    this.listeCandidats = [];
    this.messageForm = new FormGroup({
      content: new FormControl(''),
      user: new FormControl(''),
      name: new FormControl(''),
      my:  new FormControl('')
    });
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    if(window.innerWidth <= 768){
      this.sidenavOpen = false;
    }

    console.log(typeof (localStorage.getItem('avatar')));
    if (localStorage.getItem('avatar') === '' ||
      localStorage.getItem('avatar') === 'undefined' ||
      localStorage.getItem('avatar') === undefined ||
      localStorage.getItem('avatar') === null) {
      this.logo = 'https://ptetutorials.com/images/user-profile.png';
    }
    this.messageForm = new FormGroup({
      content: new FormControl(''),
      user: new FormControl(this.decoded._id),
      name: new FormControl(this.decoded._id),
      logo: new FormControl(this.logo)
    });

    this.socket.on('newUserAdded', () => {
      this.auth.getAllUsers().subscribe((res: any[]) => {
       this.listeCandidats = res.filter(obj => obj._id !== this.userId._id);
        console.log("listeCandidats "+this.listeCandidats)
      });
    });
    this.auth.getAllUsers().subscribe((res: any) => {
    //  console.log(res);
      this.listeCandidats = res.filter(obj => obj._id !== this.userId._id);
      this.clickUser(this.listeCandidats[0]._id);
    });
    this.socket.on('newMessageSended', () => {
      this.clickUser(this.chosenUser);
      console.log('hahahaha');
    });
  }

  clickUser(idCandidat) {
    this.chosenUser = idCandidat;
    this.chatService.getPrivateMessage(idCandidat, this.userId).subscribe((res: any) => {
      console.log(res);
      this.conversation = res._id;
      this.listeMessages = res.messages;
      console.log(this.listeMessages);

    });
  }
  sendMessage() {
    console.log('clicked');
    this.chatService.sendMessage(this.messageForm.value, this.conversation).subscribe((res) => {
      this.messageForm.controls['content'].patchValue('');
    });
  }
  loadcondidatavatar(logo: string): string {
  //  console.log(typeof (logo));
    if (logo === undefined || logo === null) {
      return 'https://ptetutorials.com/images/user-profile.png';
    }
    else {
      return logo;
    }
  }





  @HostListener('window:resize')
  public onWindowResize(): void {
    (window.innerWidth <= 768) ? this.sidenavOpen = false : this.sidenavOpen = true;
  }


  public ngOnDestroy() {
    if (this.talks)
      this.talks.length = 2;
  }

}