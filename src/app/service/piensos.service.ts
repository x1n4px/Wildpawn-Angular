import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ProductosOfflineService } from './productos-offline.service';


@Injectable({
  providedIn: 'root'
})
export class PiensosService {






  constructor(private http: HttpClient, private productoOff: ProductosOfflineService) { }


  getProducts(animal: string, food_type: string, pagina:number, resultadosXPagina:number): Observable<any> {
    const queryParams = `?animal=${animal}&food_type=${food_type}&pagina=${pagina}&resultadosXPagina=${resultadosXPagina}`;
    return this.http.get<any>(`${environment.apiUrl}/productos${queryParams}`);
  }
  devolverProducto(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/producto/${id}`);
   }
   getBusqueda(busqueda:any): Observable<any> {
    const queryParams = `?busqueda=${busqueda}`;
    return this.http.get<any>(`${environment.apiUrl}/busqueda${queryParams}`);
  }

   getSimilarProduct(id: any, datosPedidos: any, numeroPagina: any, datosPagina: any): Observable<any> {
    const url = `${environment.apiUrl}/productos/similar`;

    // Crear parámetros de consulta
    const requestBody = {
      productId: id,
      datosPedidos: datosPedidos,
      numero_pagina: numeroPagina,
      datos_pagina: datosPagina
    };


    // Realizar la solicitud GET con parámetros de consulta
    return this.http.post<any>(url, requestBody);
  }





}
