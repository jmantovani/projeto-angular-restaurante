import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneApresentacaoComponent } from './telefone-apresentacao.component';

describe('TelefoneApresentacaoComponent', () => {
  let component: TelefoneApresentacaoComponent;
  let fixture: ComponentFixture<TelefoneApresentacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefoneApresentacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneApresentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
