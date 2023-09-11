import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ControladorCestaService } from 'src/app/service/controlador-cesta.service';
import { ControladorUsuarioService } from 'src/app/service/controlador-usuario.service';
import { EventServiceService } from 'src/app/service/event-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showMenu: boolean = false;
  rutaCompleta: string = '';
  articulosLon: any;
  cestaO: any;
  cestaVacia: boolean = true;
  cantidadObjetos: number = 0;

  busquedaInput: any;


  constructor(private controladorUsuario: ControladorUsuarioService, private router: Router, private cesta: ControladorCestaService,
    private evenService: EventServiceService,
    private cestaController: ControladorCestaService) {
    this.cestaO = this.cesta.obtenercesta();
    this.calcularValorCesta();

  }

  calcularValorCesta() {
    this.cantidadObjetos = this.cestaController.logintudCesta();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  gestorUsuario(disp: any) {
    const isLoggedIn = this.controladorUsuario.getToken();

    if (isLoggedIn) {
      this.router.navigate(['dashboard']);
    } else {
      this.router.navigate(['login']);
    }

    if (disp === 'sidebar') {
      this.toggleMenu();
    }
  }


  buscar() {
    const busqueda = this.busquedaInput;
    this.router.navigate(['busqueda'], { queryParams: { busqueda } });
    this.showMenu = !this.showMenu;
  }

}
