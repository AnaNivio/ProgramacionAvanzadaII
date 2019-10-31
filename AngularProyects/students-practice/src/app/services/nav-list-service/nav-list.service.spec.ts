import { TestBed } from '@angular/core/testing';

import { NavListService } from './nav-list.service';

describe('NavListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavListService = TestBed.get(NavListService);
    expect(service).toBeTruthy();
  });
});
