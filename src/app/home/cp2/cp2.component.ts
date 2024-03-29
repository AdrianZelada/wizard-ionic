import { Component, OnInit } from '@angular/core';
import {UiWizardStepInterface} from '../../ui-wizard/interfaces';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-cp2',
  templateUrl: './cp2.component.html',
  styleUrls: ['./cp2.component.scss'],
})
export class Cp2Component implements OnInit, UiWizardStepInterface {

  private $isValid: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  // private $isValid: Subject<any> = new Subject<any>();
  isValid: Observable<any> = this.$isValid.asObservable();
  constructor() { }

  ngOnInit() {}

  getData(): any {
    console.log('cp222222 getData');

  }

  init(data?: any): void {
    console.log('cp2 init');
  }

  rollback(): void {
  }

  valid(): Observable<any> {
    return this.isValid;
  }

}
