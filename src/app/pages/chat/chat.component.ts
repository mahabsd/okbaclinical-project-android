import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { Chat } from './chat.model';
import { ChatService } from './chat.service';
import { throttleTime , distinctUntilChanged } from 'rxjs/operators';
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

  messageList: string[] = [];
  constructor(public appSettings: AppSettings, private socketService: ChatService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    // this.chats = this.chatService.getChats(); 
    // if(window.innerWidth <= 768){
    //   this.sidenavOpen = false;
    // } 
    
    this.socketService.getMessages().pipe(throttleTime(5000)).subscribe((message: string) => {
      if(message){
        let currentTime = moment().format('hh:mm:ss a');
        let messageWithTimestamp =  `${currentTime}: ${message}`;
  
        this.messageList.push(messageWithTimestamp);
      }else{
        return;
      }


      });
      
  }

  sendMessage() {
    this.socketService.sendMessage(this.newMessage)
    this.newMessage = '';
    
  }





  @HostListener('window:resize')
  public onWindowResize(): void {
    (window.innerWidth <= 768) ? this.sidenavOpen = false : this.sidenavOpen = true;
  }

  // public getChat(obj){
  //   if(this.talks){
  //      this.talks.length = 2;
  //   }   
  //   this.talks = this.chatService.getTalk();
  //   this.talks.push(obj);
  //   this.currentChat = obj;      
  //   this.talks.forEach(talk => {
  //     if(!talk.my){
  //       talk.image = obj.image;
  //     }
  //   });
  //   if(window.innerWidth <= 768){
  //     this.sidenav.close();
  //   }     
  // }

  // public sendMessage($event) {       
  //   if (($event.which === 1 || $event.which === 13) && this.newMessage.trim() != '') {
  //     if(this.talks){ 
  //       this.talks.push(
  //           new Chat(
  //             'assets/img/users/user.jpg', 
  //             'Emilio Verdines', 
  //             'online', 
  //             this.newMessage,
  //             new Date(), 
  //             true)
  //       )
  //       this.newMessage = '';
  //       let chatContainer = document.querySelector('.chat-content');
  //       if(chatContainer){
  //         setTimeout(() => {
  //           var nodes = chatContainer.querySelectorAll('.mat-list-item');
  //           let newChatTextHeight = nodes[nodes.length- 1];
  //           chatContainer.scrollTop = chatContainer.scrollHeight + newChatTextHeight.clientHeight;
  //         }); 
  //       }
  //     }
  //   }
  // }

  public ngOnDestroy() {
    if (this.talks)
      this.talks.length = 2;
  }

}