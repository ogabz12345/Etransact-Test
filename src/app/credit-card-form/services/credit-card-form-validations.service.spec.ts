import { TestBed } from '@angular/core/testing';

import { CreditCardFormValidationsService } from './credit-card-form-validations.service';

describe('CreditCardFormValidationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditCardFormValidationsService = TestBed.get(CreditCardFormValidationsService);
    expect(service).toBeTruthy();
  });
});
