import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { RestaurantesService } from 'src/app/shared/services/restaurantes.service';
import { FavoritoService } from 'src/app/shared/services/favorito.service';
import { Restaurante } from 'src/app/shared/models/restaurante';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-entrega-container',
  templateUrl: './entrega-container.component.html',
  styleUrls: ['./entrega-container.component.scss'],
})
export class EntregaContainerComponent implements OnInit, OnDestroy  {
  public cards: Restaurante[];
  public icone = 'fastfood';
  public tipo = 'entrega';
  public emitirFavorito = new EventEmitter<Restaurante>();
  private subscricoes: Subscription = new Subscription();

  constructor(
    private restaurantesService: RestaurantesService,
    private favoritoService: FavoritoService
  ) {}

  ngOnInit(): void {
    this.buscarRestaurantes();
  }

  ngOnDestroy(): void {
    this.subscricoes.unsubscribe();
  }

  private buscarRestaurantes(): void {
    this.subscricoes.add(
      this.restaurantesService.getRestaurantes().subscribe({
        next: (data) => this.buscarRestaurantesSucesso(data),
        error: () => this.buscarRestaurantesError(),
        complete: () => this.buscarRestaurantesComplete(),
      })
    );
  }

  private buscarRestaurantesSucesso(data: Restaurante[]): void {
    this.cards = data.filter((restaurante) => {
      return restaurante.tipo === this.tipo;
    });
  }

  private buscarRestaurantesError(): void {}

  private buscarRestaurantesComplete(): void {}

  public onRestauranteSelecionado(restaurante: Restaurante): void {
    this.atualizarRestaurante(restaurante);
  }

  private atualizarRestaurante(restaurante: Restaurante): void {
    const params = { selecionado: restaurante.selecionado };
    this.subscricoes.add(
      this.restaurantesService
        .atualizarRestaurante(restaurante.id, params)
        .subscribe({
          next: (data) => {
            if (restaurante.selecionado) {
              this.favoritoService.adicionarRestauranteFavorito(restaurante);
            } else {
              this.favoritoService.removerRestauranteFavorito(restaurante.id);
            }
          },
          error: () => this.buscarRestaurantesError(),
          complete: () => this.buscarRestaurantesComplete(),
        })
    );
  }
}
