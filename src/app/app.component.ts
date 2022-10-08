import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-app';

  @Output()
  toggleBtnStatus: boolean;

  onClick() {
    this.toggleBtnStatus = false;
  }
}
