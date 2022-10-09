import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-app';
  username: string = '';
  userDetails = { name: 'Krishi', role: 'Dev' };
  _showDetails = false;
  counter = 0;
  clicksLogArray: unknown[] = [];

  @Output()
  toggleBtnStatus: boolean;

  onClick() {
    this.toggleBtnStatus = false;
  }

  get isUsernameNotEmptyString() {
    return this.username.length > 0;
  }

  resetUsername() {
    this.username = '';
  }

  onRequestDetailsClick(event: Event) {
    this.counter++;
    this._showDetails = !this._showDetails;
    console.log(event);
    this.clicksLogArray.push({
      data: `Click no.${
        this.counter
      } was made at ${new Date().toLocaleString()}`,
      counter: `${this.counter}`,
    });
  }

  get showDetails() {
    return this._showDetails;
  }

  checkCounter(counter: number) {
    if (counter > 4) {
      return 'blue';
    }
  }
}
