import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { Product } from 'src/app/class/product';
import { ControladorCestaService } from 'src/app/service/controlador-cesta.service';
import { IngredientesService } from 'src/app/service/ingredientes.service';
import { PiensosService } from 'src/app/service/piensos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  perroImagen: boolean = true;
  mostrarManchaPerro = false;
  mostrarManchaGato= false;
  listaIngredientes: any[] = [];
  c1Data: Product[] = [];
  c2Data: Product[] = [];
  c3Data: Product[] = [];

  constructor(private cestaC:ControladorCestaService, private ingredientesService: IngredientesService, private piensosService: PiensosService, private router: Router){
    this.listaIngredientes = ingredientesService.devolverListaASeleccion(4);
   }

  ngOnInit() {
    this.obtenerProductos('Perro','Dry', 1 );
    this.obtenerProductos('Perro','Wet', 2 );
    this.obtenerProductos('gato','Dry', 3 );

  }

  obtenerProductos(animal: string, food_type: string, colum:any) {

    this.piensosService.getProducts(animal, food_type).subscribe(
      (data) => {
         if(colum === 1){
          this.c1Data = data;
         }else if(colum === 2) {
          this.c2Data = data;
        }else if(colum === 3) {
          this.c3Data = data;
        }

      }, (error) => {
        console.error("Error");
      }
    );

  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  mostrarMancha(animal: string) {
    if(animal === 'P'){
      this.mostrarManchaPerro = true;

    }else{
      this.mostrarManchaGato = true;

    }
  }

  ocultarMancha(animal: string) {
    if(animal === 'P'){
      this.mostrarManchaPerro = false;

    }else{
      this.mostrarManchaGato = false;

    }

  }

  verProducto(referencia: any, nombre: any, id:any, familia: any, tipoComida: any) {
    this.router.navigate([familia,tipoComida, referencia, nombre], { queryParams: { id: id } });
  }
}
