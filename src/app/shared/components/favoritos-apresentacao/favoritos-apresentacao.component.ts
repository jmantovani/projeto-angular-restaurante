import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Restaurante } from '../../models/restaurante';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos-apresentacao.component.html',
  styleUrls: ['./favoritos-apresentacao.component.scss']
})
export class FavoritosApresentacaoComponent {
  @Input() public favoritos: Restaurante[];

  verificarTipo(tipo) {
    return tipo === 'entrega' ? true : false;
  }
}
