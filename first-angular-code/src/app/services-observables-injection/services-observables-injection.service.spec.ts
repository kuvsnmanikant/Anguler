import { TestBed } from '@angular/core/testing';

import { ServicesObservablesInjectionService } from './services-observables-injection.service';

describe('ServicesObservablesInjectionService', () => {
  let service: ServicesObservablesInjectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesObservablesInjectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
