import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {Cp1Component} from './cp1/cp1.component';
import {UiWizardModule} from '../ui-wizard/ui-wizard.module';
import {Cp2Component} from './cp2/cp2.component';
import {Cp3Component} from './cp3/cp3.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UiWizardModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    Cp1Component,
    Cp2Component,
    Cp3Component
  ]
})
export class HomePageModule {}
