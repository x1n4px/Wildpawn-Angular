import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Address, UserDate } from 'src/app/class/user-date';
import { ControladorUsuarioService } from 'src/app/service/controlador-usuario.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  user: UserDate = new UserDate();
  email!: string;


   constructor(private controlarUsuario: ControladorUsuarioService, private router:Router) {
    this.user = this.controlarUsuario.getSaveCurrentUser();
   }

  selectedButton: number = 2;

  selectButton(buttonNumber: number): void {
    this.selectedButton = buttonNumber;
  }

  selectedBox:number = 1;
  selectBox(buttonNumber: number): void {
    this.selectedBox = buttonNumber;
  }

  logout(){
    this.controlarUsuario.logout();
    this.router.navigate(['']);
  }

   cambiarDirFav(index: number) {
    this.controlarUsuario.changeAdressFav(index, this.user.id).subscribe(data => {
     const newAdd = data;
      this.newASingament(data);
    }, err => {
      console.log(err);
    })
  }

  newASingament(date:any) {
    this.user.address = date;
    this.controlarUsuario.setCurrentUser(this.user);
  }
}
