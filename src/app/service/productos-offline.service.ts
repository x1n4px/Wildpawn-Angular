import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosOfflineService {
  private jsonDataSubject = new BehaviorSubject<any[]>([]);
  jsonData$: Observable<any[]> = this.jsonDataSubject.asObservable();


  constructor(private http: HttpClient) {
    this.loadJSON();
  }

  private loadJSON() {
    this.http.get<any[]>('./assets/productoSinConexion.json').subscribe(data => {
      this.jsonDataSubject.next(data);
    });
  }

  devolverTodo(): Observable<any[]> {
    return this.jsonData$;
  }

  getProducts(): Observable<any> {
    return this.jsonData$;
  }
}
