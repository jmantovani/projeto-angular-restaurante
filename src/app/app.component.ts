import { Component, ViewChild, OnChanges, OnInit } from '@angular/core';
import { Restaurante } from './shared/models/restaurante';
import { RetiradaContainerComponent } from './modules/retirada/retirada-container/retirada-container.component';
import { FavoritoService } from './shared/services/favorito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  constructor(private favoritoService: FavoritoService) {}
  public favoritos;

  public navLinks = [
    { path: '/entrega', label: 'Entrega' },
    { path: '/retirada', label: 'Retirada' }
  ];

  ngOnChanges(): void {}

  ngOnInit(): void {
    this.buscarFavoritos();
    FavoritoService.emitirFavoritos.subscribe(() => this.buscarFavoritos());
  }

  public exibirFavorito(): boolean {
    return this.favoritos && this.favoritos.length > 0 ? true : false;
  }

  private buscarFavoritos() {
    this.favoritoService.getFavoritos().subscribe({
      next: data => {
        this.favoritos = data;
        console.log(this.favoritos);
      },
      error: () => {},
      complete: () => {}
    });
  }
}
