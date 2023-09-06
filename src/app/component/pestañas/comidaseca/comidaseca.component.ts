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
  pagina: number = 1;
  resultadosXPagina: number = 6;
  longitudDatos: number = 0;

  constructor(private piensosService: PiensosService, private route: ActivatedRoute, private router: Router) {


  }
  ngOnInit() {

    this.route.params.subscribe(params => {
      this.familia = params['familia'];
      this.tipoComida = params['tipo-comida'];
      this.obtenerProductos();

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
  obtenerProductos() {
    let tipo = 'dry';
    if (this.tipoComida.includes('comida-húmeda-natural')) {
      tipo = 'Wet';
    } else {
      tipo = 'Dry';
    }
    this.piensosService.getProducts(this.familia, tipo, this.pagina, this.resultadosXPagina).subscribe(
      (data) => {
        this.piensos = [...this.piensos, ...data.data];
        this.longitudDatos = data.longitud_Total;
         }, (error) => {
        console.error("Error");
      }
    );

  }


  cargar() {
    this.pagina = this.pagina + 1;
    this.obtenerProductos();
  }
}
