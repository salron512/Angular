import { CadastroComponent } from './components/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAlbunsComponent } from './components/lista-albuns/lista-albuns.component';
const routes: Routes = [
  {
    path: "",
    component: ListaAlbunsComponent
  },{
    path:"lista-albuns",
    component: ListaAlbunsComponent
  },
  {
    path: "cadastro",
    component: CadastroComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
