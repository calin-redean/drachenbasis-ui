import { TestBed, inject } from '@angular/core/testing';

import { WebcamsService } from './webcams.service';

describe('WebcamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebcamsService]
    });
  });

  it('should be created', inject([WebcamsService], (service: WebcamsService) => {
    expect(service).toBeTruthy();
  }));
});
