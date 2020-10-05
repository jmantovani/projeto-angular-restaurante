import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-telefone-apresentacao',
  templateUrl: './telefone-apresentacao.component.html',
  styleUrls: ['./telefone-apresentacao.component.scss']
})
export class TelefoneApresentacaoComponent {
  @Input() public telefone: string;
}
