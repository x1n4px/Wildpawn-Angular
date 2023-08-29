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
  slide = [
    {
      id: 1,
      title: 'Original',
      decription: 'Con carne o pescado deshuesado como ingrediente principal en nuestras recetas, combinado con frutas y verduras',
      img: 'https://www.naturesvariety.com/on/demandware.static/Sites-Natures-es-Site/-/default/dwe97dd343/img/ingredientes-original.png',
      mancha: '../../../../assets/manchaPerro.webp'
    },
    {
      id: 2,
      title: 'Selected',
      decription: 'Nuestra mayor gama con el mayor contenido de carne dehuesada: pollo campero o salmón noruego como ingrediente principal, recetas sin cereales con las que combinamos frutas, verduras y superfoods',
      img: 'https://www.naturesvariety.com/on/demandware.static/Sites-Natures-es-Site/-/default/dw0eb8ec3b/img/ingredientes-selected.png',
      mancha: '../../../../assets/manchaGato.webp'
    }
  ]

  slideHumedo = [
    {
      id: 1,
      title: 'Original Paté',
      description: 'Nuestras recetas húmedas de paté se elaboran con proteína de alta calidad y sin cereales con cocción al vapor para preservar mejor los nutrientes',
      img: 'https://www.naturesvariety.com/on/demandware.static/Sites-Natures-es-Site/-/default/dwa65c96df/img/ingredientes-pate-dog.png'
    }
  ]

  constructor(private piensosService: PiensosService, private route: ActivatedRoute, private router: Router) {
    // ...
    setInterval(() => {
      this.changeObject();
    }, 15000); // Cambiar cada 15 segundos (15000 ms)

  }
  ngOnInit() {

    this.route.params.subscribe(params => {
      this.familia = params['familia'];
      this.tipoComida = params['tipo-comida'];
      this.obtenerProductos(this.familia, this.tipoComida);

    });
  }


  changeObject(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slide.length;
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
        console.log(this.piensos);
       }, (error) => {
        console.error("Error");
      }
    );

  }
}
