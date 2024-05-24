import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Trabajador } from '../../modelo/trabajador';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {
  private apiServer="http://localhost:8080/trabajadores";

  constructor(private httpClient: HttpClient) {
  }


  public getAllTrabajadores(): Observable<any> {

    return this.httpClient.get<any>(this.apiServer);
  }

  public saveTrabajador(trabajador:Trabajador): Observable<any> {

    return this.httpClient.post<any>(this.apiServer,trabajador);
  }

  deleteTrabajador(id: any): Observable<any> {
    return this.httpClient.delete<any>(this.apiServer + "/" + id);

  }

}