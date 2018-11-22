import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsRetiradaComponent } from './forms-retirada.component';

describe('FormsRetiradaComponent', () => {
  let component: FormsRetiradaComponent;
  let fixture: ComponentFixture<FormsRetiradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsRetiradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsRetiradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
