import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoIndividualComponent } from './producto-individual.component';

describe('ProductoIndividualComponent', () => {
  let component: ProductoIndividualComponent;
  let fixture: ComponentFixture<ProductoIndividualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoIndividualComponent]
    });
    fixture = TestBed.createComponent(ProductoIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
