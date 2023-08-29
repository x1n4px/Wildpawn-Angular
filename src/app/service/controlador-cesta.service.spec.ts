import { TestBed } from '@angular/core/testing';

import { ControladorCestaService } from './controlador-cesta.service';

describe('ControladorCestaService', () => {
  let service: ControladorCestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControladorCestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
