import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroLivroFormsComponent } from './cadastro-livro-forms.component';

describe('CadastroLivroFormsComponent', () => {
  let component: CadastroLivroFormsComponent;
  let fixture: ComponentFixture<CadastroLivroFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroLivroFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroLivroFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
