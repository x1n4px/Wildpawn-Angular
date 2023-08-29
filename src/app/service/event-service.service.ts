import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  private cestaActualizadaSource = new Subject<void>();

  cestaActualizada$ = this.cestaActualizadaSource.asObservable();

  actualizarCesta() {
    this.cestaActualizadaSource.next();
  }
}
