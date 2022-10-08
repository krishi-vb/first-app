import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  serverId: number = 5;
  serverStatus: string = 'Active';

  constructor() {}

  ngOnInit(): void {}

  getServerStatus() {
    return this.serverStatus;
  }
}
