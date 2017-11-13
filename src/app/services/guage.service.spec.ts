import { TestBed, inject } from '@angular/core/testing';

import { GuageService } from './guage.service';

describe('GuageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuageService]
    });
  });

  it('should be created', inject([GuageService], (service: GuageService) => {
    expect(service).toBeTruthy();
  }));
});
