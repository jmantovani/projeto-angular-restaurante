import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurante } from '../models/restaurante';
import { RestService } from './rest.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {
  constructor(private restService: RestService) {}
  static emitirFavoritos = new EventEmitter<boolean>();

  private url = environment.api.favoritos;

  public getFavoritos(): Observable<Restaurante> {
    return this.restService.get(this.url);
  }

  public addFavoritos$(restaurante: Restaurante): Observable<any> {
    return this.restService.post(this.url, restaurante);
  }

  public removerFavoritos$(id: number): Observable<any> {
    return this.restService.delete(this.url, id);
  }

  public adicionarRestauranteFavorito(restaurante: Restaurante) {
    this.addFavoritos$(restaurante).subscribe(() =>
      FavoritoService.emitirFavoritos.emit(true)
    );
  }

  public removerRestauranteFavorito(id) {
    this.removerFavoritos$(id).subscribe(() =>
      FavoritoService.emitirFavoritos.emit(true)
    );
  }
}
