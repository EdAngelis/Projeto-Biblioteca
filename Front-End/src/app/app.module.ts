import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';
import { Error404Component } from './error404/error404.component';
import { CadastroLivroFormsComponent } from './components/cadastro-livro-forms/cadastro-livro-forms.component';
import { ListaLivrosComponent } from './components/lista-livros/lista-livros.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroFormsComponent } from './cadastro-usuario/components/cadastro-forms/cadastro-forms.component';
import { RetiradaComponent } from './retirada/retirada.component';
import { FormsRetiradaComponent } from './components/forms-retirada/forms-retirada.component';
import { ListaRetiradaComponent } from './components/lista-retirada/lista-retirada.component';
import { DevolutionListComponent } from './components/devolution-list/devolution-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CadastroLivroComponent,
    Error404Component,
    CadastroLivroFormsComponent,
    ListaLivrosComponent,
    CadastroUsuarioComponent,
    CadastroFormsComponent,
    RetiradaComponent,
    FormsRetiradaComponent,
    ListaRetiradaComponent,
    DevolutionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
