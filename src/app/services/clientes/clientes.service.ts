import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../modelo/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private apiServer="http://localhost:8080/clientes";

  constructor(private httpClient: HttpClient) {
  }


  public getAllClientes(): Observable<any> {

    return this.httpClient.get<any>(this.apiServer);
  }

  public saveCliente(cliente:Cliente): Observable<any> {

    return this.httpClient.post<any>(this.apiServer,cliente);
  }

  deleteCliente(id: any): Observable<any> {
    return this.httpClient.delete<any>(this.apiServer + "/" + id);

  }
}
