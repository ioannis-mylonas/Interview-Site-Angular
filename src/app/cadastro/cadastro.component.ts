import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Curso } from '../Model/curso';
import { Usuario } from '../Model/usuario';
import { CursoService } from '../curso.service';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  curso: Curso;
  usuario: Usuario = new Usuario();
  resultado: string;

  constructor(
    private curso_service: CursoService,
    private cadastro_service: CadastroService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.get_curso();
  }

  voltar(): void {
    this.location.back();
  }

  enviar() : void {
    this.cadastro_service.send_cadastro(this.usuario).subscribe(
      resultado => {
        this.resultado = resultado;
      });
  }

  map_curso(input : any, curso : Curso) : void{
    var parsed_input = JSON.parse(input)
    for (let key in parsed_input) {
      curso[key] = parsed_input[key];
    }
  }

  get_curso() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.curso_service.get_curso(id).subscribe(curso => {
      this.curso = new Curso();
      this.map_curso(curso, this.curso);
      this.usuario.curso_id = this.curso.id;
    });
  }

}
