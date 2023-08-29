import { Component } from '@angular/core';
import { IngredientesService } from 'src/app/service/ingredientes.service';
import { IngredientesModalComponent } from '../ingredientes-modal/ingredientes-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent {
  listaIngredientes:any[] = [];
  listaIngredientesFiltrados:any[] = [];
  btnF:any = 'TODOS';


  constructor(private ingredientesService: IngredientesService, private dialog: MatDialog){
    this.listaIngredientes = ingredientesService.devolverTodo();
    this.filtrar();
  }

  btnSelector(selector: any) {
    this.btnF = selector;
     this.filtrar();
  }

  filtrar() {
    if(this.btnF === 'TODOS'){
      this.listaIngredientesFiltrados = this.listaIngredientes;
    }else{
        this.listaIngredientesFiltrados = this.listaIngredientes.filter(item => item.tags === this.btnF);
    }
  }

  openIngredient(ing: any) {
    const dialogRef = this.dialog.open(IngredientesModalComponent, { data: {ingrediente: ing} });
  }

}
