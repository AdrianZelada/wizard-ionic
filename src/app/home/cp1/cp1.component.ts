import { Component, OnInit } from '@angular/core';
import {UiWizardStepInterface} from '../../ui-wizard/interfaces';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {WizardService} from "../../ui-wizard/wizard.service";

@Component({
  selector: 'app-cp1',
  templateUrl: './cp1.component.html',
  styleUrls: ['./cp1.component.scss'],
  providers: [WizardService]
})
export class Cp1Component implements OnInit, UiWizardStepInterface {

  private $isValid: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  // private $isValid: Subject<any> = new Subject<any>();
  isValid: Observable<any> = this.$isValid.asObservable();
  constructor(private wizardService: WizardService) { }

  ngOnInit() {
    console.log(this.wizardService);
    setTimeout(() => {
      console.log('wizard')
      this.wizardService.next();
    }, 7000)
  }

  getData(): any {
    console.log('cp11111 getData');

  }

  init(data?: any): void {
    console.log('cp11111 init');
    setTimeout(() => {
      console.log('run obs');
      this.$isValid.next(true)
    }, 3000)
  }

  rollback(): void {
  }

  valid(): Observable<any> {
    return this.isValid;
  }

}
