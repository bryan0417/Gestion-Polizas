import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolizasServiceService {

  private baseUrl = 'http://localhost:7070/api/polizas';

  private headers: HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});

  constructor(private httpClient: HttpClient) { }

  /**
   * Esta funcion permite  consumir el servicio de consultar las polizas
   * @returns 
   */
  consultarPolizas() : Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/allPolizas`);
  }

  /**
   * Esta funcion permite  consumir el servicio de consultar una poliza específica segun el cliente
   * @param id 
   * @returns 
   */
  consultarPolizaPorCliente(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/polizaByCliente`, { params: { clienteId: id } });
  }

  /**
   * Esta funcion permite  consumir el servicio de crear un nueva poliza
   * @param poliza 
   * @returns 
   */
  crearPoliza(poliza: any, tipoGestion: string): Observable<any> {
    const params = new HttpParams().set('tipoGestion', tipoGestion);
    return this.httpClient.post<any>(`${this.baseUrl}/createPoliza`,
      poliza,
      { headers: this.headers, params });
  }

  /**
   * Esta funcion permite  consumir el servicio de actualizar una poliza existente
   * @param poliza 
   * @returns 
   */
  actualizarPoliza(poliza: any, tipoGestion: string, resultado: string): Observable<any> {
    const params = new HttpParams()
                                  .set('tipoGestion', tipoGestion)
                                  .set('resultado', resultado);
    return this.httpClient.put<any>(`${this.baseUrl}/updatePoliza`,
       poliza, 
       { headers: this.headers, params });
  }
}
