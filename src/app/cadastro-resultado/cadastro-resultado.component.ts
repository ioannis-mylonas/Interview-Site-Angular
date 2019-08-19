import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cadastro-resultado',
  templateUrl: './cadastro-resultado.component.html',
  styleUrls: ['./cadastro-resultado.component.scss']
})
export class CadastroResultadoComponent implements OnInit {
  @Input() mensagem: string;
  @Input() titulo: string;

  constructor() { }

  ngOnInit() {
  }

}
