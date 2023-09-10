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
export class HomeComponent implements OnInit {

  currentImageIndex = 0;
  images: string[] = [
    'assets/dachshund-1519374_1280.webp',
    'assets/img1.webp',
     'assets/maltese-1123016_1280.webp',
    'assets/img3.webp',
    'assets/img4.webp',
    'assets/img5.webp',
    'assets/img6.webp',
    'assets/img7.webp',
    'assets/img8.webp',
    'assets/img9.webp'
  ]
  currentImage!: string;

  constructor(private cestaC: ControladorCestaService, private ingredientesService: IngredientesService, private piensosService: PiensosService, private router: Router) {
    this.currentImage = this.images[Math.floor(Math.random() * 10)];
  }

  ngOnInit() {
     setInterval(() => this.changeImage(), 5000);

  }

  changeImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentImageIndex];

  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }





  verProducto(referencia: any, nombre: any, id: any, familia: any, tipoComida: any) {
    this.router.navigate([familia, tipoComida, referencia, nombre], { queryParams: { id: id } });
  }
}
