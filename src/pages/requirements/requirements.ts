import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-requirements',
  templateUrl: 'requirements.html'
})
export class RequirementsPage {
  items: String[] = [
    'Requirement A',
    'Requirement B',
    'Requirement C',
    'Requirement D',
    'Requirement E'
  ]

  constructor(
    private navCtrl: NavController
  ) {}
}