import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/class/product';
import { ControladorCestaService } from 'src/app/service/controlador-cesta.service';
import { PiensosService } from 'src/app/service/piensos.service';

@Component({
  selector: 'app-busqueda-input',
  templateUrl: './busqueda-input.component.html',
  styleUrls: ['./busqueda-input.component.css']
})
export class BusquedaInputComponent {
  resultados: Product[] = [];

  constructor(private piensosService: PiensosService, private route: ActivatedRoute, private router: Router, private viewportScroller: ViewportScroller,
    private cesta: ControladorCestaService) {
  }

  ngOnInit() {
    let nombre;

    this.route.params.subscribe(params => {
      const { familia, tipoComida, referencia, nombre, id } = params;

      let busqueda = params['busqueda'];

      console.log(busqueda);
      this.piensosService.getBusqueda(busqueda).subscribe(
        (data) => {
          this.resultados = data;
         }, (error) => {
          console.error("Error");
        }
      );

    });

  }


  verProducto(articulo: Product) {
    const referencia = articulo.reference;
    const nombre = articulo.name;
    const familia = articulo.animal;
    const tipoComida = articulo.food_type;
    const id = articulo.id;
    this.router.navigate([familia, tipoComida, referencia, nombre], { queryParams: { id: id } });

  }
}
