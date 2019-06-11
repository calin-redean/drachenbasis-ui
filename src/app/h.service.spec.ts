import { TestBed, inject } from '@angular/core/testing';

import { HService } from './h.service';

describe('HService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HService]
    });
  });

  it('should be created', inject([HService], (service: HService) => {
    expect(service).toBeTruthy();
  }));
});
