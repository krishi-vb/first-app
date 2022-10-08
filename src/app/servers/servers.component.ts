import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean;
  timer: number;

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

  onClick() {
    console.log('add server clicked');
    this.resetCountdown();
  }

  get isAddServerAllowed() {
    return this.allowNewServer;
  }
}
