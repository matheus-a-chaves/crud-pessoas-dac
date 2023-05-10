import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/shared';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private httpCliente: HttpClient) {}
  BASE_URL = 'http://localhost:3000/usuarios/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  listarTodos(): Observable<Usuario[]> {
    return this.httpCliente.get<Usuario[]>(this.BASE_URL, this.httpOptions);
  }

  buscarPorId(id: number): Observable<Usuario> {
    return this.httpCliente.get<Usuario>(this.BASE_URL + id, this.httpOptions);
  }

  inserir(usuario: Usuario): Observable<Usuario> {
    return this.httpCliente.post<Usuario>(
      this.BASE_URL,
      JSON.stringify(usuario),
      this.httpOptions
    );
  }
  remover(id: number): Observable<Usuario> {
    return this.httpCliente.delete<Usuario>(
      this.BASE_URL + id,
      this.httpOptions
    );
  }
  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.httpCliente.put<Usuario>(
      this.BASE_URL + usuario.id,
      JSON.stringify(usuario),
      this.httpOptions
    );
  }
}
