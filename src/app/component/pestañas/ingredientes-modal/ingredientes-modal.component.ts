import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ingredientes-modal',
  templateUrl: './ingredientes-modal.component.html',
  styleUrls: ['./ingredientes-modal.component.css']
})
export class IngredientesModalComponent {

  constructor(
    public dialogRef: MatDialogRef<IngredientesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    }
}
