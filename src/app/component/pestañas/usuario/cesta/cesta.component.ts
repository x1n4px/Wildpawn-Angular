import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/class/product';
import { ControladorCestaService } from 'src/app/service/controlador-cesta.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {
  cestaCompleta: Product[] = [];
  cantidadCesta: any;
  subtotal:any = 0;


  constructor(private cesta: ControladorCestaService, private router: Router, private dataService: DataService, private cdr: ChangeDetectorRef) {
    this.cestaCompleta = this.cesta.obtenercesta();
    console.log(this.cestaCompleta);
    }
  ngOnInit(): void {
    this.cantidadCesta = this.cesta.cantidadObjetos();
    this.calcularSubTotal();
  }

  calcularSubTotal() {

    let calculo = 0;
    for (let i = 0; i < this.cestaCompleta.length; i++) {
      calculo += (this.cestaCompleta[i].cantidad) * parseFloat(this.cestaCompleta[i].price);
    }
    this.subtotal = calculo;
    }

  eliminar(producto: any) {

    const indice = this.cestaCompleta.indexOf(producto);
    if (indice !== -1) {
      this.cesta.eliminarElemento(indice);
    }
    this.calcularSubTotal();
  }

  aumentarCantidad(producto: any) {
    this.cesta.aniadirProductoCesta(producto);
    this.calcularSubTotal();
  }
  reducirCantidad(producto: any) {
    const indice = this.cestaCompleta.indexOf(producto);
    if (indice !== -1) {
      this.cesta.quitarElementoDeCesta(indice);
    }
    this.calcularSubTotal();
  }


  verObjeto(producto: any) {
    this.router.navigate([producto.animal, producto.caracteristicas.tipo, producto.nombre]);
  }
}
