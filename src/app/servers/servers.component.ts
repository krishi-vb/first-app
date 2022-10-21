import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean;
  timer: number;
  // servers = ['server1', 'server2'];
  servers = [
    { name: 'server1', status: 'offline' },
    { name: 'server2', status: 'online' },
  ];

  serverCreationStatus = `No new servers created. ${
    this.servers.length
  } server(s) are currently active: ${this.getAllServers()}.`;
  serverName = 'testServer';
  filterTerm: string;

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
    // if (this.servers.includes(this.serverName)) {
    //   alert(
    //     'A server with this name already exists! Please choose a new server name.'
    //   );
    // } else {
    //   let serverStatus = this.getServerStatus();
    //   this.servers.push({ name: this.serverName, status: serverStatus });
    //   this.serverCreationStatus =
    //     'New server created.' + ` Server name is: ${this.serverName}`;
    // }

    let serverStatus = this.getServerStatus();
    this.servers.push({ name: this.serverName, status: serverStatus });
    this.serverCreationStatus =
      'New server created.' + ` Server name is: ${this.serverName}`;

    this.resetCountdown();
  }

  getServerStatus() {
    return Math.random() > 0 ? 'online' : 'offline';
  }

  getAllServers() {
    let arr = [];
    this.servers.forEach((server) => {
      arr.push(` ${server.name}`);
    });
    return arr;
  }

  get isAddServerAllowed() {
    return this.allowNewServer;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
