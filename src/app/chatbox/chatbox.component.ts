import { Component, OnInit } from '@angular/core';
import { Chat } from '../chat.model';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent {

  chat: Chat[];
  isVisible: boolean = true;

  constructor() {
    this.chat = [
      new Chat('Jonathan', '3:20 PM', 'This is a sample message.  This is a sample message.'),
      new Chat('Sara', '3:21 PM', 'This is a sample response.  This is a sample response.'),
      new Chat('Jonathan', '3:22 PM', 'This is a sample message.  This is a sample message.'),
      new Chat('Sara', '3:23 PM', 'This is a sample response.  This is a sample response.'),
      new Chat('Jonathan', '3:24 PM', 'This is a sample message.  This is a sample message.'),
      new Chat('Sara', '3:25 PM', 'This is a sample response.  This is a sample response.'),
      new Chat('Jonathan', '3:26 PM', 'This is a sample message.  This is a sample message.'),
      new Chat('Sara', '3:27 PM', 'This is a sample response.  This is a sample response.')
    ];
  } 

  chatIsVisible(): boolean {
    return this.isVisible;
  }



  closeChat() {
    this.isVisible = false;
  }

}
