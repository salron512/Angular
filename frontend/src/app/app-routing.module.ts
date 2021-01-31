import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAlbunsComponent } from './components/lista-albuns/lista-albuns.component';
const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "cadastro",
    component: CadastroComponent
  },{
    path: "lista-albuns",
    component: ListaAlbunsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
