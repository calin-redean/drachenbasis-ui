import { TestBed, inject } from '@angular/core/testing';

import { QrcodesService } from './qrcodes.service';

describe('QrcodesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QrcodesService]
    });
  });

  it('should be created', inject([QrcodesService], (service: QrcodesService) => {
    expect(service).toBeTruthy();
  }));
});
