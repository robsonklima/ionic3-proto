import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RequirementsPage } from '../requirements/requirements';

@Component({
  selector: 'project-page',
  templateUrl: 'project.html'
})
export class ProjectPage {
  projectName: string = 'Project A';

  constructor(
    private navCtrl: NavController
  ) {}

  public onLoadRequirements() {
    this.navCtrl.push(RequirementsPage);
  }
}