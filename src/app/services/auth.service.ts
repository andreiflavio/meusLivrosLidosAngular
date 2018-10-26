import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Usuario } from '../dtos/usuario'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiContext: string;

  constructor(
    private http: HttpClient
   ) {
    this.apiContext = environment.apiContext;
  }

  autenticar(usuario: Usuario){
    return this.http.post(this.apiContext + "login/",
      {
        "username": usuario.username,
        "password": usuario.password
      });
  }

  logout(){
    if (this.getToken() != null){
      localStorage.removeItem(this.getKeyUsuario());
    }
  }

  usuarioLogado(){
    return this.getToken() != null;
  }

  getToken(){
    return localStorage.getItem(this.getKeyUsuario());
  }

  getKeyUsuario(){
    return 'token_mll';
  }
}
