import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoApresentacaoComponent } from './endereco-apresentacao.component';

describe('EnderecoApresentacaoComponent', () => {
  let component: EnderecoApresentacaoComponent;
  let fixture: ComponentFixture<EnderecoApresentacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderecoApresentacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoApresentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
