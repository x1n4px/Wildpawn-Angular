import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamaProductosComponent } from './gama-productos.component';

describe('GamaProductosComponent', () => {
  let component: GamaProductosComponent;
  let fixture: ComponentFixture<GamaProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamaProductosComponent]
    });
    fixture = TestBed.createComponent(GamaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
