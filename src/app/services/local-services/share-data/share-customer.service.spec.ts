import { TestBed } from '@angular/core/testing';

import { ShareCustomerService } from './share-customer.service';

describe('ShareCustomerService', () => {
  let service: ShareCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
