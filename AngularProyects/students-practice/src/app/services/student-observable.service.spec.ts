import { TestBed } from '@angular/core/testing';

import { StudentObservableService } from './student-observable.service';

describe('StudentObservableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentObservableService = TestBed.get(StudentObservableService);
    expect(service).toBeTruthy();
  });
});
