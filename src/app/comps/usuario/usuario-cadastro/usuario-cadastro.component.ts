import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../dtos/usuario';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  public password: string;
  public password2: string;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
    ) { }

  ngOnInit() {

  }

  cadastrar(){
    if (this.password === this.password2){
      this.usuario.password = this.password
    } else {
      //Mensagem indicando passwords diferentes
    }

    this.usuarioService.cadastrar(this.usuario)
      .subscribe( sucesso => {
        //Mensagem indicando sucesso no cadastro e sugegindo ao usuário fazer login
        this.router.navigate(['/']);
      },
      erro => {
        //indicar qual erro retornado
      })
  }

}
