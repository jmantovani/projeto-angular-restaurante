import { Component, OnInit, Input } from '@angular/core';
import { HorarioOperacao } from '../../models/horario-operacao';

@Component({
  selector: 'app-horario-funcionamento-apresentacao',
  templateUrl: './horario-funcionamento-apresentacao.component.html',
  styleUrls: ['./horario-funcionamento-apresentacao.component.scss']
})
export class HorarioFuncionamentoApresentacaoComponent implements OnInit {
  @Input() public horarioFuncionamento: HorarioOperacao;

  constructor() {}

  ngOnInit(): void {}
}
