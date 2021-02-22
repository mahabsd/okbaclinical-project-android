import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Socket } from 'ngx-socket-io';
import { MessagesService } from './messages.service';
import jwt_decode from "../../../../../node_modules/jwt-decode";


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
  constructor(private messagesService: MessagesService, public socket: Socket) {
  }

  ngOnInit() {
    this.socket.on('notification', (res) => {
      //this.getNotification();
      console.log(res);
   });
  }

  openMessagesMenu() {
    this.trigger.openMenu();
    this.selectedTab = 0;
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
      console.log(res);
      this.messages = res
      //   this.messages = res.filter((notification : any)=>
      //     notification.reciever ==this.userId)
      //     console.log(this.messages + " this.messages");

      }); 
    }
}
