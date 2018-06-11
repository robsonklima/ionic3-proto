import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { RequirementAddPage } from './requirement-add';

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
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  public onLoadAddRequirement() {
    this.navCtrl.push(RequirementAddPage);
  }

  public onRemoveRequirement(requirement: any) {
    this.exibirToast(`${requirement} removed successfully.`);
  }

  private exibirToast(mensagem: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const toast = this.toastCtrl.create({
        message: mensagem, duration: 3000, position: 'bottom'
      });

      resolve(toast.present());
    });
  }
}