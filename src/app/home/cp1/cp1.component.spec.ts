import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cp1Component } from './cp1.component';

describe('Cp1Component', () => {
  let component: Cp1Component;
  let fixture: ComponentFixture<Cp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cp1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
