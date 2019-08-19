import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Curso } from './Model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  cursos_url: string = "https://localhost:44342//api/Curso";

  constructor(
    private http: HttpClient
    ) { }

  get_cursos(): Observable<string> {
    var result = this.http.get<string>(this.cursos_url);
    return result;
  }

  get_curso(id: number): Observable<string> {
    return this.http.get<string>(this.cursos_url + "/" + id.toString());
  }
}
