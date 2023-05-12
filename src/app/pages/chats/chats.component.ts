import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit{
  messages: any = [];
  socket: any;
  texto: string = '';

  ngOnInit(): void {
    this.socket = io(environment.apiUrl);

    this.socket.on('newMessage', (data: any) => {
      console.log('Alguien envio un mensaje');
      this.messages.push(data)
    })
  }

  sendNewMessage(){
    console.log('Enviar un mensaje');
    this.socket.emit('sendMessage', this.texto);
    this.messages.push({
      message: this.texto,
      owned: true
    })
    this.texto = '';
  }
}
