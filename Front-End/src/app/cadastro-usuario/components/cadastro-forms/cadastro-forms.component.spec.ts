import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFormsComponent } from './cadastro-forms.component';

describe('CadastroFormsComponent', () => {
  let component: CadastroFormsComponent;
  let fixture: ComponentFixture<CadastroFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
