import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-app';
  username: string = '';

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
}
