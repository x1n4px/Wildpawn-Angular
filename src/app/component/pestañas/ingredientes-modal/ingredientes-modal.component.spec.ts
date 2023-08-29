import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientesModalComponent } from './ingredientes-modal.component';

describe('IngredientesModalComponent', () => {
  let component: IngredientesModalComponent;
  let fixture: ComponentFixture<IngredientesModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientesModalComponent]
    });
    fixture = TestBed.createComponent(IngredientesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
