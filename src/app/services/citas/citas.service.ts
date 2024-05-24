import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from '../../modelo/cita';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private apiServer="http://localhost:8080/citas";

  constructor(private httpClient: HttpClient) {
  }


  public getAllCitas(): Observable<any> {

    return this.httpClient.get<any>(this.apiServer);
  }

  public saveCita(cita:Cita): Observable<any> {

    return this.httpClient.post<any>(this.apiServer,cita);
  }

  deleteCita(id: any): Observable<any> {
    return this.httpClient.delete<any>(this.apiServer + "/" + id);

  }
}
