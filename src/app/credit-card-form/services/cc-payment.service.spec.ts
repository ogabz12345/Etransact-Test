import { TestBed } from '@angular/core/testing';

import { CcPaymentService } from './cc-payment.service';

describe('CcPaymentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CcPaymentService = TestBed.get(CcPaymentService);
    expect(service).toBeTruthy();
  });
});
