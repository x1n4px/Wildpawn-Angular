import { TestBed } from '@angular/core/testing';

import { PiensosService } from './piensos.service';

describe('PiensosService', () => {
  let service: PiensosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiensosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
