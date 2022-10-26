import { Component, OnInit } from '@angular/core';

export enum ServerStatus {
  ONLINE = 'online',
  OFFLINE = 'offline',
}

export interface Server {
  name: string;
  status: ServerStatus;
}

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean;
  timer: number;
  // servers = ['server1', 'server2'];
  servers: Server[] = [
    { name: 'server1', status: this.getServerStatus() },
    { name: 'server2', status: this.getServerStatus() },
  ];

  serverCreationStatus = `No new servers created. ${
    this.servers.length
  } server(s) are currently active: ${this.getAllServerNames()}.`;
  serverName = 'testServer';
  filterTerm: string;
  serverNameFromTmplRef: string;

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

  onCreateServer(tmplRefServerName: HTMLInputElement) {
    this.serverNameFromTmplRef = tmplRefServerName.value;

    let checkIfServerExists = () => {
      return this.servers.find((server) => server.name === this.serverName);
    };

    if (checkIfServerExists()) {
      alert(
        'A server with this name already exists! Please choose a new server name.'
      );
    } else {
      let serverStatus = this.getServerStatus();
      this.servers.push({ name: this.serverName, status: serverStatus });
      this.serverCreationStatus =
        'New server created.' + ` Server name is: ${this.serverName}`;
    }
    this.resetCountdown();
  }

  getServerStatus() {
    return Math.random() > 0.5 ? ServerStatus.ONLINE : ServerStatus.OFFLINE;
  }

  getAllServerNames() {
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
