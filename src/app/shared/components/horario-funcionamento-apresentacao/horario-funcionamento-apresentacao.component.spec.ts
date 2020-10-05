import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioFuncionamentoApresentacaoComponent } from './horario-funcionamento-apresentacao.component';

describe('HorarioFuncionamentoApresentacaoComponent', () => {
  let component: HorarioFuncionamentoApresentacaoComponent;
  let fixture: ComponentFixture<HorarioFuncionamentoApresentacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioFuncionamentoApresentacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioFuncionamentoApresentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
