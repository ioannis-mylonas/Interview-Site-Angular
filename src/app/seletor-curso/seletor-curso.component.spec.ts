import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletorCursoComponent } from './seletor-curso.component';

describe('SeletorCursoComponent', () => {
  let component: SeletorCursoComponent;
  let fixture: ComponentFixture<SeletorCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeletorCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeletorCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
