import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css'],
})
export class SuccessAlertComponent implements OnInit {
  @Input('btnStatus')
  successAlertBtnDisabled: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    alert('Success!');
    this.successAlertBtnDisabled = true;
  }

  get isSuccessBtnDisabled() {
    return this.successAlertBtnDisabled;
  }
}
