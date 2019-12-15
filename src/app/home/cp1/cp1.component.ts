import { Component, OnInit } from '@angular/core';
import {UiWizardStepInterface} from '../../ui-wizard/interfaces';

@Component({
  selector: 'app-cp1',
  templateUrl: './cp1.component.html',
  styleUrls: ['./cp1.component.scss'],
})
export class Cp1Component implements OnInit, UiWizardStepInterface {

  constructor() { }

  ngOnInit() {}


  isValid: boolean;

  getData(): any {
    console.log('cp11111 getData');

  }

  init(data?: any): void {
    console.log('cp11111 init');

  }

  rollback(): void {
  }

  valid(): void {
  }

}
