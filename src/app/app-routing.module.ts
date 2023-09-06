import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { IngredientesComponent } from './component/pestañas/ingredientes/ingredientes.component';
import { ComidasecaComponent } from './component/pestañas/comidaseca/comidaseca.component';
import { ProductoIndividualComponent } from './component/pestañas/producto-individual/producto-individual.component';
import { CestaComponent } from './component/pestañas/usuario/cesta/cesta.component';
import { LoginComponent } from './component/pestañas/usuario/login/login.component';
import { UserHomeComponent } from './component/pestañas/usuario/user-home/user-home.component';
import { BusquedaInputComponent } from './component/pestañas/busqueda-input/busqueda-input.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ingredientes', component: IngredientesComponent },
  { path: 'cesta', component: CestaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: UserHomeComponent },
  { path: 'busqueda/:busqueda', component: BusquedaInputComponent },
  { path: ':familia/:tipo-comida/:referencia/:nombre', component: ProductoIndividualComponent },
  { path: ':familia/:tipo-comida', component: ComidasecaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
