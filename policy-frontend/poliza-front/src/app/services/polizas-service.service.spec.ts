import { TestBed } from '@angular/core/testing';

import { PolizasServiceService } from './polizas-service.service';

describe('PolizasServiceService', () => {
  let service: PolizasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolizasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
