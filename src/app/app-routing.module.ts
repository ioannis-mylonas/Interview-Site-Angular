import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SeletorCursoComponent } from './seletor-curso/seletor-curso.component';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'lista-cursos', component: SeletorCursoComponent},
  {path: 'cadastro/:id', component: CadastroComponent},
  {path: 'detalhes/:id', component: CursoDetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
