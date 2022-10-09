import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  serverId: number = 5;
  serverStatus: string;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {}

  getServerStatus() {
    return this.serverStatus;
  }

  getBgColor() {
    if (this.serverStatus === 'online') {
      return 'lightgreen';
    } else return 'crimson';
  }
}
