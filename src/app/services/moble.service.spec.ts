import { TestBed } from '@angular/core/testing';

import { MobleService } from './moble.service';

describe('MobleService', () => {
  let service: MobleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
