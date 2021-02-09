import { Injectable } from '@angular/core'
import { Chat } from './chat.model';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
//import * as io from 'socket.io-client';

let date = new Date(),
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear(),
    hour = date.getHours(),
    minute = date.getMinutes();

let chats = [
    new Chat(
        'assets/img/profile/ashley.jpg',
        'Ashley Ahlberg',
        'Online',
        'Great, then I\'ll definitely buy this theme. Thanks!',
        new Date(year, month, day - 2, hour, minute),
        false
    ),
    new Chat(
        'assets/img/profile/bruno.jpg',
        'Bruno Vespa',
        'Do not disturb',
        'Great, then I\'ll definitely buy this theme. Thanks!',
        new Date(year, month, day - 2, hour, minute),
        false
    ),
    new Chat(
        'assets/img/profile/julia.jpg',
        'Julia Aniston',
        'Away',
        'Great, then I\'ll definitely buy this theme. Thanks!',
        new Date(year, month, day - 2, hour, minute),
        false
    ),

]

let talks = [
    new Chat(
        'assets/img/profile/ashley.jpg',
        'Ashley Ahlberg',
        'Online',
        'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Annular Admin Template?',
        new Date(year, month, day - 2, hour, minute + 3),
        false
    ),
    new Chat(
        'assets/img/users/user.jpg',
        'Emilio Verdines',
        'Online',
        'Hi, Annular is a fully compatible with angular material 2, responsive, organized folder structure, clean & customizable code, easy to use and much more...',
        new Date(year, month, day - 2, hour, minute + 2),
        true
    )
]

@Injectable()
export class ChatService {
    // private url = 'http://localhost:8080';
    // private socket;
    constructor(private socket : Socket) { 

     //   this.socket = io(this.url);
    }
   public getChats(): Array<Chat> {
        return chats;
    }

    public getTalk(): Array<Chat> {
        return talks;
    }



    sendMessage(message) {
        this.socket.emit('new-message', message);
    }

    getMessages = () => {
        return Observable.create((observer) => {
            this.socket.on('new-message', (message) => {
                observer.next(message);
            });

            });

    }    
}

