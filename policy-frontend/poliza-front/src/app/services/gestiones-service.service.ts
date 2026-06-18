import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionesServiceService {

  private baseUrl = 'http://localhost:7070/api/gestiones';

  private headers: HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});

  constructor(private httpClient: HttpClient) { }

  /**
  * Esta funcion permite  consumir el servicio de consultar el historial específica segun la poliza
  * @param id 
  * @returns 
  */
  consultarHistorialPorPoliza(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/historialByPoliza`, { params: { polizaId: id } });
  }
}
