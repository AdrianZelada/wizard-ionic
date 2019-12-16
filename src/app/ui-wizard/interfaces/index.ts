export interface UiWizardInterface {
  next(): void;
  previus(): void;
  finish(): void;
  toStep(step: any): boolean;
}

export interface UiWizardStepInterface {
  // titleStep: string;
  isValid: boolean;
  init(data?: any): void;
  valid(): void;
  getData(): any;
  rollback(): void;
}

export abstract class UiWizardStepAbstract implements UiWizardStepInterface{
  isValid: boolean;


  getData(): any {
    return {};
  }

  init(data?: any): void {
  }

  rollback(): void {
  }

  valid(): void {
  }

}
