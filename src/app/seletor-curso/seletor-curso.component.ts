import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

import { Curso } from '../Model/curso';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-seletor-curso',
  templateUrl: './seletor-curso.component.html',
  styleUrls: ['./seletor-curso.component.scss']
})
export class SeletorCursoComponent implements OnInit {

  cursos: Curso[] = [];
  constructor(
    private curso_service: CursoService
  ) { }

  ngOnInit() {
    this.curso_service.get_cursos().subscribe(cursos => {this.deserialize(cursos);} );
  }

  deserialize(input : string) : void {
    let array = JSON.parse(input);
    for (let i in array) {
      var novo_curso = new Curso();
      this.map_curso(array[i], novo_curso);
      this.cursos.push(novo_curso);
    }
  }

  map_curso(input : any, curso : Curso) : void {
    for (let key in input) {
      curso[key] = input[key];
    }
  }

  ngAfterViewInit() {
    anime({
      autoplay: "true",
      targets: document.querySelectorAll(".grid-container .cell"),
      delay: anime.stagger(50),
      easing: "easeInQuad",
      opacity: [0, 1],
      translateX: [-20, 0],
      duration: 200
    });
  }

}
