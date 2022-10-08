import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<div><button (click)="onClick()">Warning Alert</button></div>`,
  styles: [
    `
      button {
        margin-bottom: 1rem;
        color: red;
      }
    `,
  ],
})
export class WarningAlertComponent {
  onClick() {
    alert('Warning!');
  }
}
