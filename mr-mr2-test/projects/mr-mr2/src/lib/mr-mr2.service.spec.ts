import { TestBed } from '@angular/core/testing';

import { MrMr2Service } from './mr-mr2.service';

describe('MrMr2Service', () => {
  let service: MrMr2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MrMr2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
