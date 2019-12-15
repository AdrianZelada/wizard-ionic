import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  OnInit,
  Output,
  QueryList
} from '@angular/core';
import {UiWizardStepDirective} from '../ui-wizard-step/ui-wizard-step.directive';
import {UiWizardStepAbstract, UiWizardStepInterface} from '../interfaces';

@Component({
  selector: 'ui-wizard',
  templateUrl: './ui-wizard.component.html',
  styleUrls: ['./ui-wizard.component.scss'],
})
export class UiWizardComponent implements OnInit, AfterContentInit {
  private index = 0;
  private components: Array<UiWizardStepInterface> = [];
  @Output() stateWizard: EventEmitter<any> = new EventEmitter<any>();
  @ContentChildren(UiWizardStepDirective) uiSteps: QueryList<UiWizardStepAbstract>;
  constructor() { }

  ngOnInit() {}

  ngAfterContentInit(): void {
    this.uiSteps.toArray().forEach((data) => {
      this.components.push(data);
    });
    this.moveStep({});
  }

  next() {
    if (this.index < this.components.length - 1) {
      const data = this.components[this.index].getData();
      this.index++;
      this.moveStep(data);
    }
  }

  previus() {
    if (this.index > 0) {
      this.components[this.index].rollback();
      this.index--;
      this.moveStep({});
    }
  }

  moveStep(data) {
    this.components[this.index].init(data);
    this.stateWizard.emit({
      index: this.index,
      data
    });
  }

}
