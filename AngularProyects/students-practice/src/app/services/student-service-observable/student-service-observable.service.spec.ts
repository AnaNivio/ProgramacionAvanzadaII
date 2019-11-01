import { TestBed } from '@angular/core/testing';

import { StudentServiceObservableService } from './student-service-observable.service';

describe('StudentServiceObservableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentServiceObservableService = TestBed.get(StudentServiceObservableService);
    expect(service).toBeTruthy();
  });
});
