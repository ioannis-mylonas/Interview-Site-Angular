import { Component, OnInit, SecurityContext } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Curso } from '../Model/curso';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-detalhes',
  templateUrl: './curso-detalhes.component.html',
  styleUrls: ['./curso-detalhes.component.scss']
})
export class CursoDetalhesComponent implements OnInit {
  curso: Curso;
  safe_url: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private curso_service: CursoService,
    private location: Location,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.get_curso();
  }

  map_curso(input : any, curso : Curso) : void{
    var parsed_input = JSON.parse(input)
    for (let key in parsed_input) {
      curso[key] = parsed_input[key];
    }
  }

  // Pede curso à API usando id da url
  get_curso() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.curso_service.get_curso(id).subscribe(curso => {
      this.curso = new Curso();
      this.map_curso(curso, this.curso);
      this.safe_url = this.sanitizer.bypassSecurityTrustResourceUrl(this.curso.video_intro_url);
    });
  }

  voltar(): void {
    this.location.back();
  }

}
