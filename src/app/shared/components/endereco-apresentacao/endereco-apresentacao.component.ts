import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-endereco-apresentacao',
  templateUrl: './endereco-apresentacao.component.html',
  styleUrls: ['./endereco-apresentacao.component.scss']
})
export class EnderecoApresentacaoComponent {
  @Input() public endereco: string;
  @Input() public regiao: string;
}
