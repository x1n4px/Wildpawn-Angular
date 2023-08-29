import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidasecaComponent } from './comidaseca.component';

describe('ComidasecaComponent', () => {
  let component: ComidasecaComponent;
  let fixture: ComponentFixture<ComidasecaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComidasecaComponent]
    });
    fixture = TestBed.createComponent(ComidasecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
