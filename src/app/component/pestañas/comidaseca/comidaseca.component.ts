import { Component, OnInit } from '@angular/core';
import { PiensosService } from 'src/app/service/piensos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Product } from 'src/app/class/product';

@Component({
  selector: 'app-comidaseca',
  templateUrl: './comidaseca.component.html',
  styleUrls: ['./comidaseca.component.css']
})
export class ComidasecaComponent implements OnInit {
  currentIndex: number = 0;
  piensos: Product[] = [];
  tipoComida: any;
  familia: any;
  imageSelect!:string;



  constructor(private piensosService: PiensosService, private route: ActivatedRoute, private router: Router) {


  }
  ngOnInit() {

    this.route.params.subscribe(params => {
      this.familia = params['familia'];
      this.tipoComida = params['tipo-comida'];
      this.obtenerProductos(this.familia, this.tipoComida);

       if(this.tipoComida === 'comida-húmeda-natural'){
        this.imageSelect = '../assets/comidaHumeda.jpg';
      }else{
        this.imageSelect = '../assets/comidaSeca.jpg';
      }
    });
  }




  verProducto(referencia: any, nombre: any, id:any) {
     this.router.navigate([this.familia, this.tipoComida, referencia, nombre], { queryParams: { id: id } });
  }


  products: any[] = [];
  obtenerProductos(animal: string, food_type: string) {
    let tipo = 'dry';
    if (food_type.includes('comida-húmeda-natural')) {
      tipo = 'Wet';
    } else {
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
}
