import { Component, OnInit } from '@angular/core';

enum ServerStatus {
  ONLINE = 'online',
  OFFLINE = 'offline',
}

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  serverId: number = 5;
  serverStatus: string;
  serverOnline = ServerStatus.ONLINE;

  constructor() {
    this.serverStatus =
      Math.random() > 0.5 ? ServerStatus.ONLINE : ServerStatus.OFFLINE;
  }

  ngOnInit(): void {}

  getServerStatus() {
    return this.serverStatus;
  }

  getBgColor() {
    if (this.serverStatus === ServerStatus.ONLINE) {
      return 'lightgreen';
    } else return 'crimson';
  }
}
