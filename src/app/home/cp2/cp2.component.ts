import { Component, OnInit } from '@angular/core';
import {UiWizardStepInterface} from '../../ui-wizard/interfaces';

@Component({
  selector: 'app-cp2',
  templateUrl: './cp2.component.html',
  styleUrls: ['./cp2.component.scss'],
})
export class Cp2Component implements OnInit, UiWizardStepInterface {

  constructor() { }

  ngOnInit() {}

  isValid: boolean;

  getData(): any {
    console.log('cp222222 getData');

  }

  init(data?: any): void {
    console.log('cp2 init');
  }

  rollback(): void {
  }

  valid(): void {
  }

}
