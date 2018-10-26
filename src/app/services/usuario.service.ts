import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Usuario } from '../dtos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiContext: string;

  constructor(
    private http: HttpClient
  ) {
    this.apiContext = environment.apiContext;
  }

  cadastrar(usuario: Usuario){
    return this.http.post<Usuario>(this.apiContext + 'usuario/', usuario);
  }
}
