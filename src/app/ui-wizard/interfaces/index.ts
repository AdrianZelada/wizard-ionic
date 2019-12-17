import {Observable, of} from 'rxjs';

export interface UiWizardInterface {
  next(): void;
  previus(): void;
  finish(): void;
  toStep(step: any): boolean;
}

export interface UiWizardStepInterface {
  // titleStep: string;
  isValid: boolean | Observable<any> ;
  init(data?: any): void;
  valid(): Observable<any> | void;
  getData(): any;
  rollback(): void;
}

export abstract class UiWizardStepAbstract implements UiWizardStepInterface{
  isValid: boolean | Observable<any>;

  getData(): any {
    return {};
  }

  init(data?: any): void {
  }

  rollback(): void {
  }

  valid(): Observable<any> {
    return of([]);
  }

}
