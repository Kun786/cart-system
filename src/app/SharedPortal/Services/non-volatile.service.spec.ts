import { TestBed } from '@angular/core/testing';

import { NonVolatileService } from './non-volatile.service';

describe('NonVolatileService', () => {
  let service: NonVolatileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonVolatileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
