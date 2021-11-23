import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './tarefas/cadastro/cadastro.component';
import { ListaComponent } from './tarefas/lista/lista.component';

const routes: Routes = [
  {path: "", component : ListaComponent},
  {path: "tarefas", component: ListaComponent},
  {path: "tarefas/cadastro", component : CadastroComponent},
  {path: "tarefas/:id/editar", component : CadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
