import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolutionListComponent } from './devolution-list.component';

describe('DevolutionListComponent', () => {
  let component: DevolutionListComponent;
  let fixture: ComponentFixture<DevolutionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevolutionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolutionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
