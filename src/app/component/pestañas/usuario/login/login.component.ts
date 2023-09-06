import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/class/user-register';
import { Userlogin } from 'src/app/class/userlogin';
import { ControladorUsuarioService } from 'src/app/service/controlador-usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: boolean = true;
  seleccionado: 'login' | 'register' = 'login'; // Establecer uno por defecto
  clienteLogin: Userlogin = new Userlogin('', '');
  clienteRegister: UserRegister = new UserRegister('', '', '', '', '');


  constructor(private router: Router, private controladorUsuario: ControladorUsuarioService) {

  }



  validarLogin() {
    this.controladorUsuario.validateToken(this.clienteLogin.email, this.clienteLogin.password).subscribe(
      (response) => {
        this.controladorUsuario.setToken(response.token);
        this.controladorUsuario.setCurrentUser(response.user);
        this.router.navigate(['dashboard']);
      }, (error) => {
        console.log(error);
      });
  }



  seleccionar(opcion: 'login' | 'register') {
    console.log(opcion);
    this.seleccionado = opcion;
  }


  register() {
     this.controladorUsuario.registerUser(this.clienteRegister).subscribe(
      (response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });

  }

}
