import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cp3Component } from './cp3.component';

describe('Cp3Component', () => {
  let component: Cp3Component;
  let fixture: ComponentFixture<Cp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cp3Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
