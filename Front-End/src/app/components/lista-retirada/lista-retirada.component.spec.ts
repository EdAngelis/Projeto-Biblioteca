import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRetiradaComponent } from './lista-retirada.component';

describe('ListaRetiradaComponent', () => {
  let component: ListaRetiradaComponent;
  let fixture: ComponentFixture<ListaRetiradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRetiradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRetiradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
