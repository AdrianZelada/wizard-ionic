import { Component, OnInit } from '@angular/core';
import {UiWizardStepInterface} from '../../ui-wizard/interfaces';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-cp3',
  templateUrl: './cp3.component.html',
  styleUrls: ['./cp3.component.scss'],
})
export class Cp3Component implements OnInit, UiWizardStepInterface {
  private $isValid: BehaviorSubject<any> = new BehaviorSubject<any>(false);

  // private $isValid: Subject<any> = new Subject<any>();
  isValid: Observable<any> = this.$isValid.asObservable();
  constructor() { }

  ngOnInit() {}

  getData(): any {
    console.log('cp 33333  getData');
  }

  init(data?: any): void {
    console.log('cp 33333 init');
}

  rollback(): void {
  }

  valid(): Observable<any> {
    console.log("cpppppp 333 vaid")
    return this.isValid;
  }

}
