import { HubConnection } from '@microsoft/signalr';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatServiceService } from './services/chat-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  coringa: any;
  constructor() {
    this.coringa = new ChatServiceService();
  }
}
