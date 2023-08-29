import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControladorCestaService {
  @Output() marcarElementoEvent: EventEmitter<any> = new EventEmitter();
  private cesta: any[] = [];


  constructor() {
    this.recuperarCestaDelLocalStorage();

  }

  aniadirProductoCesta(producto: any): void {
     const indice = this.cesta.findIndex(item => item.reference === producto.reference);

    if (indice !== -1) {
      // Ya existe un producto con la misma referencia en la cesta, aumentar la cantidad en 1
      this.cesta[indice].cantidad += 1;
    } else {
      producto.cantidad = 1;
      this.cesta.push(producto);
    }

    this.guardarCestaEnLocalStorage();
  }

  quitarElementoDeCesta(index: number) {
    if (index >= 0 && index < this.cesta.length) {
      if (this.cesta[index].cantidad > 1) {
        this.cesta[index].cantidad -= 1;
      } else {
        this.cesta.splice(index, 1);
      }
      this.guardarCestaEnLocalStorage();
    }
  }

  eliminarElemento(index: number) {
    this.cesta.splice(index, 1);
    this.guardarCestaEnLocalStorage();
  }

  obtenercesta() {
    return this.cesta;
  }



  private guardarCestaEnLocalStorage() {
    localStorage.setItem('cesta', JSON.stringify(this.cesta));
  }

  // Recuperar la cesta del localStorage
  private recuperarCestaDelLocalStorage() {
    const cestaGuardada = localStorage.getItem('cesta');
    if (cestaGuardada) {
      this.cesta = JSON.parse(cestaGuardada);
    } else {
      this.cesta = [];
    }
  }

  logintudCesta() {
    let total = 0;
    for(let i = 0; i < this.cesta.length; i++){
      console.log(this.cesta);
      total += parseInt(this.cesta[i].cantidad);
    }
    return total;
  }

  cantidadObjetos() {
    let sumaCantidades = 0;
    for (const producto of this.cesta) {
        sumaCantidades += producto.cantidad;
    }
    return sumaCantidades;
  }


}
