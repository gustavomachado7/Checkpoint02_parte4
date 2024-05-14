import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatServiceService {
  private hubConnection: HubConnection;
  mensagens: string[] = [];
  title = 'app-angular';
  novaMensagem: string = '';

  constructor() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('http://localhost:7281/chat')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('SignalR Connected'))
      .catch((err) => console.error('erro ao conectar', err));

    this.hubConnection.on('ReceberMensagem', (mensagem: string) => {
      console.log(`Mensagem recebida: ${mensagem}`);
      this.mensagens.push(mensagem);
    });
  }

  enviarMensagem() {
    this.hubConnection
      .invoke('EnviarMensagem', this.novaMensagem)
      .catch((err) => console.error(err));
    this.novaMensagem = '';
  }


}
