import { Component, OnInit, EventEmitter } from '@angular/core';
import { RestaurantesService } from 'src/app/shared/services/restaurantes.service';
import { FavoritoService } from 'src/app/shared/services/favorito.service';
import { Restaurante } from 'src/app/shared/models/restaurante';

@Component({
  selector: 'app-entrega-container',
  templateUrl: './entrega-container.component.html',
  styleUrls: ['./entrega-container.component.scss']
})
export class EntregaContainerComponent implements OnInit {
  public cards: Restaurante[];
  public icone = 'fastfood';
  public tipo = 'entrega';
  public emitirFavorito = new EventEmitter<Restaurante>();

  constructor(
    private restaurantesService: RestaurantesService,
    private favoritoService: FavoritoService
  ) {}

  ngOnInit(): void {
    this.buscarRestaurantes();
  }

  private buscarRestaurantes() {
    this.restaurantesService.getRestaurantes().subscribe({
      next: data => this.buscarRestaurantesSucesso(data),
      error: () => this.buscarRestaurantesError(),
      complete: () => this.buscarRestaurantesComplete()
    });
  }

  private buscarRestaurantesSucesso(data: Restaurante[]) {
    this.cards = data.filter(restaurante => {
      return restaurante.tipo === this.tipo;
    });
  }

  private buscarRestaurantesError() {}

  private buscarRestaurantesComplete() {}

  public onRestauranteSelecionado(restaurante: Restaurante) {
    this.atualizarRestaurante(restaurante);
  }

  private atualizarRestaurante(restaurante: Restaurante) {
    const params = { selecionado: restaurante.selecionado };
    this.restaurantesService
      .atualizarRestaurante(restaurante.id, params)
      .subscribe({
        next: data => {
          if (restaurante.selecionado) {
            this.favoritoService.adicionarRestauranteFavorito(restaurante);
          } else {
            this.favoritoService.removerRestauranteFavorito(restaurante.id);
          }
        },
        error: () => this.buscarRestaurantesError(),
        complete: () => this.buscarRestaurantesComplete()
      });
  }
}
