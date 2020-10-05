import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {
  constructor(private restService: RestService) {}

  public getRestaurantes(): Observable<any> {
    return this.restService.get(environment.api.restaurantes);
  }

  public atualizarRestaurante(id: number, params): Observable<any> {
    return this.restService.patch(environment.api.restaurantes, id, params);
  }
}
