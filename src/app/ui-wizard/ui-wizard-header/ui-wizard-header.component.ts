import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-wizard-header',
  templateUrl: './ui-wizard-header.component.html',
  styleUrls: ['./ui-wizard-header.component.scss'],
})
export class UiWizardHeaderComponent implements OnInit {

  indexStep: number = 0;
  size: string = '0%';
  @Input() steps: Array<any> = [];
  // @Input() currentStep: number = 0;
  @Input() get currentStep() {
    return this.indexStep;
  }
  set currentStep(i: number) {
    this.indexStep = i;
    this.calculeSize();
  }

  constructor() { }

  ngOnInit() {}
  private calculeSize() {
    if (this.steps.length  > 0 && this.indexStep !== 0) {
      this.size = `${(this.indexStep * 100) / this.steps.length-1}%`;
    } else {
      this.size = '0%';
    }
  }

}
