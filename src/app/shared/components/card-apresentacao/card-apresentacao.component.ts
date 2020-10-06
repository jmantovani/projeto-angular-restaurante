import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Restaurante } from '../../models/restaurante';

@Component({
  selector: 'app-card-apresentacao',
  templateUrl: './card-apresentacao.component.html',
  styleUrls: ['./card-apresentacao.component.scss']
})
export class CardApresentacaoComponent implements OnInit {
  @Input() public icone: string;
  @Input() public card: Restaurante;
  @Output() emitirCardSelecionado = new EventEmitter<Restaurante>();

  public contemDados: boolean = true;
  public panelOpenState: boolean = false;

  ngOnInit(): void {
    if (!this.card) {
      this.contemDados = false;
    }
  }

  public cardSelecionado(card: Restaurante): void {
    if (card.selecionado === true) {
      card.selecionado = false;
    } else {
      card.selecionado = true;
    }

    this.emitirCardSelecionado.emit(card);
  }
}
