import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroResultadoComponent } from './cadastro-resultado/cadastro-resultado.component';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SeletorCursoComponent } from './seletor-curso/seletor-curso.component';
import { ValidaIdadeDirective } from './valida-idade.directive';
import { ValidaNomeDirective } from './valida-nome.directive';
import { ValidaFoneDirective } from './valida-fone.directive';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    CadastroResultadoComponent,
    CursoDetalhesComponent,
    FooterComponent,
    HomePageComponent,
    NavBarComponent,
    SeletorCursoComponent,
    ValidaIdadeDirective,
    ValidaNomeDirective,
    ValidaFoneDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
