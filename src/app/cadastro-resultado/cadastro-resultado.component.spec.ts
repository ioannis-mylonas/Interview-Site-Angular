import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroResultadoComponent } from './cadastro-resultado.component';

describe('CadastroResultadoComponent', () => {
  let component: CadastroResultadoComponent;
  let fixture: ComponentFixture<CadastroResultadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroResultadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
