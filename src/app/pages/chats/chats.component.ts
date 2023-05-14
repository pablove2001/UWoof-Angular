import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { Message } from 'src/app/shared/interface/message.model';
import { TokenService } from 'src/app/shared/services/token.service';
import { UserService } from 'src/app/shared/services/user.service';
import { environment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit{
  messages: Array<Message> = [];
  socket: any;
  message: string = '';
  token: string = '';
  

  constructor(private tokenService: TokenService) {
    this.token = tokenService.getToken();
  }

  ngOnInit(): void {
    this.socket = io(environment.apiUrl);

    this.socket.on('newMessage', (data: any) => {
      console.log('Alguien envio un mensaje');
      data.time = new Date(data.time);
      this.messages.push(data);
      console.log('llego esto', data);
      console.log('tenemos estos datos', this.messages);
    })
  }

  sendNewMessage(){
    if (this.message == '') return;
    console.log('Enviar un mensaje');
    this.socket.emit('sendMessage', {message: this.message, token: this.token});
    this.messages.push({
      message: this.message,
      owned: true,
      time: new Date()
    })
    this.message = '';
  }
}
