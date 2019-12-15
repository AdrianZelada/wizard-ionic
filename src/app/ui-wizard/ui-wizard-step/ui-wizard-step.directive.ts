import {AfterContentInit, ComponentRef, Directive, ElementRef, Host, Optional, Self, ViewContainerRef} from '@angular/core';
import {UiWizardStepAbstract, UiWizardStepInterface} from '../interfaces';

@Directive({
  selector: '[uiWizardStep]'
})
export class UiWizardStepDirective implements UiWizardStepInterface, AfterContentInit{

  component: UiWizardStepInterface;
  element: HTMLElement;
  constructor(private el: ElementRef, private _viewContainerRef: ViewContainerRef) {
    this.element = this.el.nativeElement;
    this.element.style.display = 'none';
  }

  isValid: boolean;

  getData(): any {
    this.element.style.display = 'none';
    return this.component.getData();
  }

  init(data?: any): void {
    this.element.style.display = 'block';
    this.component.init(data);
  }

  rollback(): void {
    this.element.style.display = 'none';
  }

  valid(): void {
  }

  ngAfterContentInit(): void {
    this.component = this._viewContainerRef['_data'].componentView.component;
  }

}
