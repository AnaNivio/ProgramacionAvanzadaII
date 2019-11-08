import { TestBed } from '@angular/core/testing';

import { UserAsyncService } from './user-async.service';

describe('UserAsyncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserAsyncService = TestBed.get(UserAsyncService);
    expect(service).toBeTruthy();
  });
});
