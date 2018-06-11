import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'requirement-add-page',
  templateUrl: 'requirement-add.html'
})
export class RequirementAddPage {
  constructor(
    private viewCtrl: ViewController
  ) {}

  public dismiss() {
    this.viewCtrl.dismiss();
  }
}