import { TestBed } from '@angular/core/testing';

import { CareersAsyncService } from './careers-async.service';

describe('CareersAsyncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CareersAsyncService = TestBed.get(CareersAsyncService);
    expect(service).toBeTruthy();
  });
});
