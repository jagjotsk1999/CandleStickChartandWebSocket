import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.css'],
  providers: [WebSocketService, ChatService]
})
export class WebsocketComponent implements OnInit {

  constructor(private chatService: ChatService) {
    chatService.messages.subscribe(res => {
      alert('response received is ' + res)
    })
  }

  private msg = {
    author: 'jagjot',
    message: 'new message'
  }

  sendMessage() {
    console.log('new message from client to socket' + this.msg)
    this.chatService.messages.next(this.msg)
    this.msg.message = ''
  }

  ngOnInit(): void {
  }

}
