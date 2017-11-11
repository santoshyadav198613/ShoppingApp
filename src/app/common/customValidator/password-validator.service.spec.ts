import { TestBed, inject } from '@angular/core/testing';

import { PasswordValidatorService } from './password-validator.service';

describe('PasswordValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswordValidatorService]
    });
  });

  it('should be created', inject([PasswordValidatorService], (service: PasswordValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
