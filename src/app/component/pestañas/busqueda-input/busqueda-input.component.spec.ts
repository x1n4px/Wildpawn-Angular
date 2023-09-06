import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaInputComponent } from './busqueda-input.component';

describe('BusquedaInputComponent', () => {
  let component: BusquedaInputComponent;
  let fixture: ComponentFixture<BusquedaInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusquedaInputComponent]
    });
    fixture = TestBed.createComponent(BusquedaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
