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
  public currentChat;
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
      candidat: new FormControl(''),
      name: new FormControl(''),
      my:  new FormControl('')
    });
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    if(window.innerWidth <= 768){
      this.sidenavOpen = false;
    }

   // console.log(typeof (localStorage.getItem('avatar')));
    if (localStorage.getItem('avatar') === '' ||
      localStorage.getItem('avatar') === 'undefined' ||
      localStorage.getItem('avatar') === undefined ||
      localStorage.getItem('avatar') === null) {
      this.logo = 'https://ptetutorials.com/images/user-profile.png';
    }
    this.messageForm = new FormGroup({
      content: new FormControl(''),
      candidat: new FormControl(this.decoded._id),
      name: new FormControl(this.decoded.username),
      logo: new FormControl('http://localhost:3000/api/'+this.decoded.user.profile.image),
      my :  new FormControl(true)
    });

    this.socket.on('newUserAdded', () => {
      this.auth.getAllUsers().subscribe((res: any[]) => {
      this.chats = this.listeCandidats = res.filter(obj => obj._id !== this.userId._id);
        // console.log("listeCandidats "+this.listeCandidats)
      });
    });
    this.auth.getAllUsers().subscribe((res: any) => {
    //  console.log(res);
    this.chats = this.listeCandidats = res.filter(obj => obj._id !== this.userId._id);
      this.clickUser(this.listeCandidats[0]._id);
    });
    this.socket.on('newMessageSended', () => {
      this.clickUser(this.chosenUser);
    });
  }

  clickUser(idCandidat) {
    this.chosenUser = idCandidat;
    this.chatService.getPrivateMessage(idCandidat, this.userId).subscribe((res: any) => {
      console.log(res);
      
      this.conversation = res._id;
      this.currentChat = res
     // console.log(this.currentChat._id)
      
      this.talks  = this.listeMessages = res.messages;
      //console.log(this.listeMessages);

      if(window.innerWidth <= 768){
        this.sidenav.close();
      }  
    });
  }
  sendMessage() {
   // console.log('clicked');
   this.messageForm.patchValue({
    candidat : this.userId
  });
    this.chatService.sendMessage(this.messageForm.value, this.conversation).subscribe((res) => {
    });
    this.newMessage= this.messageForm.value.content
    this.newMessage = '';
    let chatContainer = document.querySelector('.chat-content');
    this.messageForm.patchValue({
      content : ''
    });
    if(chatContainer){
      setTimeout(() => {
        var nodes = chatContainer.querySelectorAll('.mat-list-item');
        let newChatTextHeight = nodes[nodes.length- 1];
        chatContainer.scrollTop = chatContainer.scrollHeight + newChatTextHeight.clientHeight;
      }); 
    }
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



  deleteChat(chatId){
    console.log("delete " + chatId );
    
    this.chatService.deleteChat(chatId).subscribe(res =>{
      console.log(res);
    })
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