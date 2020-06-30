import { ListaComponent } from './lista/lista.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'Cadastro', component: CadastrosComponent},
  {path: 'Lista', component: ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
