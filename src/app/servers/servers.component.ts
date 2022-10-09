import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean;
  timer: number;
  servers = ['server1', 'server2'];
  serverCreationStatus = `No new servers created. ${this.servers.length} server(s) are currently active: ${this.servers}.`;
  serverName = 'testServer';

  constructor() {
    this.resetCountdown();
  }

  ngOnInit(): void {}

  resetCountdown() {
    this.allowNewServer = false;
    this.timer = 5;

    setTimeout(() => {
      this.allowNewServer = true;
      clearInterval(myInterval);
    }, 5000);

    const myInterval = setInterval(() => {
      this.timer--;
    }, 1000);
  }

  onCreateServer() {
    console.log('add server clicked');
    if (this.servers.includes(this.serverName)) {
      alert(
        'A server with this name already exists! Please choose a new server name.'
      );
    } else {
      this.servers.push(this.serverName);
      this.serverCreationStatus =
        'New server created.' + ` Server name is: ${this.serverName}`;
    }
    this.resetCountdown();
  }

  get isAddServerAllowed() {
    return this.allowNewServer;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
