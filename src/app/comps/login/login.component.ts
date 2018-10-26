import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../dtos/usuario';
import { Auth } from '../../dtos/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  login(){
    var keyUsuario = this.authService.getKeyUsuario();
    this.authService.autenticar(this.usuario)
      .subscribe((auth: Auth) => {
         localStorage.setItem(keyUsuario, auth.token);
         this.router.navigate(['livro']);
      },
      erro => {
        //verifica status de erro e exibe mensagem tratada ao usuário (usar alert do foundation)
      });
  }

  logout(){
    this.authService.logout();
  }
}
