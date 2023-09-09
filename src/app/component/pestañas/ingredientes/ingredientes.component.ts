import { Component, OnInit } from '@angular/core';
import { IngredientesService } from 'src/app/service/ingredientes.service';
import { IngredientesModalComponent } from '../ingredientes-modal/ingredientes-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent implements OnInit{
  listaIngredientes:any[] = [];
  listaIngredientesFiltrados:any[] = [];
  btnF:any = 'TODOS';


  constructor(private ingredientesService: IngredientesService, private dialog: MatDialog){
    this.filtrar();
  }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.ingredientesService.devolverTodo().subscribe(data => {
      this.listaIngredientes = data;
      this.listaIngredientesFiltrados = data;
     });
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
