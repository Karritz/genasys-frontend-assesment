import { TestBed } from '@angular/core/testing';

import { QuoteManagementService } from './quote-management.service';

describe('QuoteManagementService', () => {
  let service: QuoteManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
