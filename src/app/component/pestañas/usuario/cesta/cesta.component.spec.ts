import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CestaComponent } from './cesta.component';

describe('CestaComponent', () => {
  let component: CestaComponent;
  let fixture: ComponentFixture<CestaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CestaComponent]
    });
    fixture = TestBed.createComponent(CestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
