import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesServiceService {

  /**
   * URL base del servidor local para realizar las peticiones HTTP del módulo de clientes.
   */
  private baseUrl = 'http://localhost:7070/api/clientes';

  /** 
   * Cabeceras HTTP por defecto que configuran el intercambio de datos en formato JSON.
   */
  private headers: HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});

  constructor(private httpClient: HttpClient) { }

  /**
   * Esta funcion permite  consumir el servicio de consultar clientes
   * @returns 
   */
  consultarClientes() : Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/allClients`);
  }

  /**
   * Esta funcion permite  consumir el servicio de consultar un cliente específico
   * @param id 
   * @returns 
   */
  consultarCliente(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/client`, { params: { id: id } });
  }

  /**
   * Esta funcion permite  consumir el servicio de crear un nuevo cliente
   * @param cliente 
   * @returns 
   */
  crearCliente(cliente: any): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/createClient`, cliente, { headers: this.headers });
  }

  /**
   * Esta funcion permite  consumir el servicio de actualizar un cliente existente
   * @param cliente 
   * @returns 
   */
  actualizarCliente(cliente: any): Observable<any> {
    return this.httpClient.put<any>(`${this.baseUrl}/updateClient`, cliente, { headers: this.headers });
  }
}
