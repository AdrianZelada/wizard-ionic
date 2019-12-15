import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cp2Component } from './cp2.component';

describe('Cp2Component', () => {
  let component: Cp2Component;
  let fixture: ComponentFixture<Cp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cp2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
