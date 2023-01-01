import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesObservablesInjectionComponent } from './services-observables-injection.component';

describe('ServicesObservablesInjectionComponent', () => {
  let component: ServicesObservablesInjectionComponent;
  let fixture: ComponentFixture<ServicesObservablesInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesObservablesInjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesObservablesInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
