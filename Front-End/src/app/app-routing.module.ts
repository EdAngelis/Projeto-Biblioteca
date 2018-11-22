import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { CadastroLivroComponent } from '../app/cadastro-livro/cadastro-livro.component';
import { Error404Component } from '../app/error404/error404.component';
import { CadastroUsuarioComponent } from '../app/cadastro-usuario/cadastro-usuario.component';
import { RetiradaComponent } from './retirada/retirada.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'CadastroLivro', component: CadastroLivroComponent},
  {path: 'CadastroUsuario', component: CadastroUsuarioComponent},
  {path: 'Retirada', component: RetiradaComponent},
  {path: '**', component: Error404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
