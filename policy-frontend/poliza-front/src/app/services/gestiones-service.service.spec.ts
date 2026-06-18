import { TestBed } from '@angular/core/testing';

import { GestionesServiceService } from './gestiones-service.service';

describe('GestionesServiceService', () => {
  let service: GestionesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
