import { TestBed } from '@angular/core/testing';

import { ControladorUsuarioService } from './controlador-usuario.service';

describe('ControladorUsuarioService', () => {
  let service: ControladorUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControladorUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
