import { TestBed } from '@angular/core/testing';

import { CareerServiceObservableService } from './career-service-observable.service';

describe('CareerServiceObservableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CareerServiceObservableService = TestBed.get(CareerServiceObservableService);
    expect(service).toBeTruthy();
  });
});
