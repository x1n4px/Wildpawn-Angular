import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/class/product';
import { ControladorCestaService } from 'src/app/service/controlador-cesta.service';
import { PiensosService } from 'src/app/service/piensos.service';

@Component({
  selector: 'app-producto-individual',
  templateUrl: './producto-individual.component.html',
  styleUrls: ['./producto-individual.component.css']
})
export class ProductoIndividualComponent {
  constructor(private piensosService: PiensosService, private route: ActivatedRoute, private router: Router, private viewportScroller: ViewportScroller,
    private cesta: ControladorCestaService) {
  }
  familia: any;
  producto!: Product;
  productosCompletos: any[] = [];
  tipoComida: any;
  piensos: Product[] = [];
  nombrePienso: any;
  sacoSeleccionado: any;
  pesos: any[] = [];
  id: any;


  ngOnInit() {
    let nombre;

    this.route.params.subscribe(params => {
      const { familia, tipoComida, nombre, id } = params;
      this.familia = familia;
      this.tipoComida = tipoComida;
      this.nombrePienso = nombre;
      this.id = id;

      this.onScrollToTop();
      this.route.queryParams.subscribe(params => {
        this.id = params['id'];
        this.obtenerProductoPorId(this.id);
      });
    });
    this.obtenerProductos(this.familia, this.tipoComida);
  }

  obtenerProductos(animal: string, food_type: string) {
    let tipo = 'Wet';
    if (food_type === 'comida-seca-natural') {
      tipo = 'Dry';
    }
    this.piensosService.getProducts(animal, tipo).subscribe(
      (data) => {
        this.piensos = data;
      }, (error) => {
        console.error("Error");
      }
    );

  }

  obtenerProductoPorId(id: any) {
    this.piensosService.devolverProducto(id).subscribe(
      (data) => {
        this.producto = data;
        this.pesos = Object.values(this.producto.otherSize);
      }, (error) => {
        console.error("Error");
      }
    );
  }

  change(referencia: any, id: any) {
    this.router.navigate([this.familia, this.tipoComida, referencia, this.nombrePienso], { queryParams: { id: id } });

  }

  onScrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }


  volverA() {
    this.router.navigate([this.familia, this.tipoComida]);
  }





  verProducto(nombre: any) {
    this.router.navigate([this.familia, this.tipoComida, nombre]);
  }

  aniadirCesta() {
    this.cesta.aniadirProductoCesta(this.producto);
  }
}
