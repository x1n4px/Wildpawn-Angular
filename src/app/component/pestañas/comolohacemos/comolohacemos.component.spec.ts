import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComolohacemosComponent } from './comolohacemos.component';

describe('ComolohacemosComponent', () => {
  let component: ComolohacemosComponent;
  let fixture: ComponentFixture<ComolohacemosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComolohacemosComponent]
    });
    fixture = TestBed.createComponent(ComolohacemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
