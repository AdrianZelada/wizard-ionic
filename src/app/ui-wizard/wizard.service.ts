import { Injectable } from '@angular/core';
import {UiWizardInterface} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class WizardService implements UiWizardInterface{

  constructor() { }

  finish(): void {
  }

  next(): void {
  }

  previus(): void {
  }

  toStep(step: any): boolean {
    return false;
  }
}
