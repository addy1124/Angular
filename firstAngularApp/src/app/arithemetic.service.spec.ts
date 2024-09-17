import { TestBed } from '@angular/core/testing';

import { ArithemeticService } from './arithemetic.service';

describe('ArithemeticService', () => {
  let service: ArithemeticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArithemeticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
