import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<div>
    <button
      (click)="onClick()"
      class="btn btn-warning"
      [disabled]="isWarningBtnDisabled"
    >
      Warning Alert
    </button>
  </div>`,
  // styles: [
  //   `
  //     button {
  //       margin-bottom: 1rem;
  //       /* color: red; */
  //     }
  //   `,
  // ],
  styleUrls: ['./warning-alert.component.css'],
})
export class WarningAlertComponent {
  @Input('btnStatus')
  warningAlertBtnDisabled: boolean = false;

  onClick() {
    alert('Warning!');
    this.warningAlertBtnDisabled = true;
  }

  get isWarningBtnDisabled() {
    return this.warningAlertBtnDisabled;
  }
}
