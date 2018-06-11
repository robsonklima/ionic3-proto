import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'requirement-edt-page',
  templateUrl: 'requirement-edt.html'
})
export class RequirementEdtPage {
  constructor(
    private viewCtrl: ViewController
  ) {}

  public dismiss() {
    this.viewCtrl.dismiss();
  }
}