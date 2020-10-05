import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurante } from '../models/restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  public get(url: string): Observable<any> {
    return this.http.get(url);
  }

  public delete(url: string, id: number): Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }

  public post(url: string, params: object): Observable<object> {
    return this.http.post(url, params);
  }

  public patch(url: string, id: number, params: object): Observable<object> {
    return this.http.patch(`${url}/${id}`, params);
  }

}
