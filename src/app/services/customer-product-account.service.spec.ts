import { TestBed } from '@angular/core/testing';

import { CustomerProductAccountService } from './customer-product-account.service';

describe('CustomerProductAccountService', () => {
  let service: CustomerProductAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerProductAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
