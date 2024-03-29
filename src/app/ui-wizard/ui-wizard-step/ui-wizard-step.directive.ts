import {AfterContentInit, ComponentRef, Directive, ElementRef, Host, Input, Optional, Self, ViewContainerRef} from '@angular/core';
import {UiWizardStepAbstract, UiWizardStepInterface} from '../interfaces';
import {Observable} from 'rxjs';

@Directive({
  selector: '[uiWizardStep]'
})
export class UiWizardStepDirective implements UiWizardStepInterface, AfterContentInit{

  component: UiWizardStepInterface;
  element: HTMLElement;
  @Input() titleStep: string = '';

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

  valid(): Observable<any> | void {

    console.log("directive")
    return this.component.valid();
  }

  ngAfterContentInit(): void {
    this.component = this._viewContainerRef['_data'].componentView.component;
  }

}
