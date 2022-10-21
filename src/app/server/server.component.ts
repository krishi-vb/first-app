import { Component, Input, OnInit } from '@angular/core';
import { Server, ServerStatus } from '../servers/servers.component';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  serverId: number = 5;
  serverStatus: string;
  serverOnline = ServerStatus.ONLINE;

  // @Input()
  // serverName: string;

  @Input()
  server: Server;

  constructor() {
    // this.serverStatus =
    //   Math.random() > 0.5 ? ServerStatus.ONLINE : ServerStatus.OFFLINE;
  }

  ngOnInit(): void {}

  // getServerStatus() {
  //   return this.serverStatus;
  // }

  getBgColor() {
    if (this.server.status === ServerStatus.ONLINE) {
      return 'lightgreen';
    }
    return 'crimson';
  }
}
