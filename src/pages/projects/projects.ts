import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProjectPage } from './project';

@Component({
  selector: 'page-home',
  templateUrl: 'projects.html'
})
export class ProjectsPage {
  items: string[] = ['Project Alpha', 'Project Beta', 'Project Charlie', 'Project Gama']

  constructor(
    private navCtrl: NavController
  ) {}

  private onLoadProject() {
    this.navCtrl.push(ProjectPage);
  }
}
