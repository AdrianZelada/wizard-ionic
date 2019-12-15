import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiWizardComponent} from './ui-wizard/ui-wizard.component';
import { UiWizardStepDirective } from './ui-wizard-step/ui-wizard-step.directive';
import {IonicModule} from '@ionic/angular';




@NgModule({
  declarations: [
      UiWizardComponent,
      UiWizardStepDirective,
  ],
  exports: [
    UiWizardComponent,
    UiWizardStepDirective
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class UiWizardModule { }
