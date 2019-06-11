import { TestBed } from '@angular/core/testing';

import { RfidreaderService } from './rfidreader.service';

describe('RfidreaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RfidreaderService = TestBed.get(RfidreaderService);
    expect(service).toBeTruthy();
  });
});
