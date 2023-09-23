import { TestBed } from '@angular/core/testing';

import { ProductosOfflineService } from './productos-offline.service';

describe('ProductosOfflineService', () => {
  let service: ProductosOfflineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosOfflineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
