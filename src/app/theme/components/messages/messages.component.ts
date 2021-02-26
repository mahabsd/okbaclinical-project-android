import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Socket } from 'ngx-socket-io';
import { MessagesService } from './messages.service';
import jwt_decode from "../../../../../node_modules/jwt-decode";
import { date } from 'date-fns/locale/af';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessagesService]
})
export class MessagesComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  public selectedTab: number = 1;
  public messages: Array<Object>;
  public files: Array<Object>;
  public meetings: Array<Object>;
  token = localStorage.getItem('token');
  decoded = JSON.parse(JSON.stringify(jwt_decode(this.token)))
  userId = this.decoded._id
  lengthNotif: any;
  notifications: Object[];
  constructor(private messagesService: MessagesService, public socket: Socket, public router: Router) {
    this.socket.on('notification', (res) => {
      this.getNotification();
    });
  }

  ngOnInit() {
    this.getNotification();
  }

  openMessagesMenu() {
    this.trigger.openMenu();
    this.selectedTab = 0;
    this.lengthNotif = null;
  }

  onMouseLeave() {
    this.trigger.closeMenu();
  }

  stopClickPropagate(event: any) {
    event.stopPropagation();
    event.preventDefault();
  }
  getNotification() {
    this.messagesService.getNotification().subscribe((res: []) => {
      this.messages = res
      this.messages = this.messages.filter((notification: any) =>
        notification.reciever._id === this.userId)
      this.lengthNotif = this.messages.length
      this.messages = this.messages.sort((message1: any, message2: any) => {
        return message2.createdAt - message1.createdAt
      })
      this.messages = this.messages.reverse();
    })
  }

  notifSeen(message) {
    if (message.messages == true) {
      this.router.navigate(['/chat'])
    }
  //   setTimeout(()=>{
  // console.log()
  // , 600000
  //   })
    this.messagesService.deleteNotif(message._id).subscribe(res => this.getNotification()) 
  }
}
