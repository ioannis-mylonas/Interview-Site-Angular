import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Usuario } from './Model/usuario';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  url: string = "https://localhost:44342//api/Usuario";

  constructor(
    private http: HttpClient
  ) { }

  send_cadastro(usuario: Usuario): Observable<string> {
    const headers = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    var result = this.http.post<Usuario>(this.url, JSON.stringify(usuario), headers)
      .pipe(catchError(err => {
        console.log(err);
        return of(null);
      }));
    return result;
  }
}
