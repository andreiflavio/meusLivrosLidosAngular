import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../../../services/livro.service';
import { Livro } from '../../../dtos/livro';

@Component({
  selector: 'app-livro-detalhes',
  templateUrl: './livro-detalhes.component.html',
  styleUrls: ['./livro-detalhes.component.css']
})
export class LivroDetalhesComponent implements OnInit {

  public livro: Livro = this.livro = new Livro();;

  constructor(
    private routes: ActivatedRoute,
    private router: Router,
    private livroService: LivroService
    ) { }

  ngOnInit() {
    let id = (this.routes.snapshot.params['id']) as number;
    if (id > 0){
      this.livroService.getLivro(id)
        .subscribe((livro: Livro) => {
          this.livro = livro;
        });
    }
  }

  save(){
    if (this.livro.id){
      return this.livroService.updateLivro(this.livro)
        .subscribe(data => {
          this.livro = data;
          this.router.navigate(['/livro']);
        })
    } else {
      return this.livroService.createLivro(this.livro)
        .subscribe(data => {
          this.livro = data;
          this.router.navigate(['/livro']);
        })
    }
  }

  delete(){
    this.livroService.deleteLivro(this.livro)
      .subscribe(
        succes => {
          this.router.navigate(['/livro']);
        },
        erro => {
          //indicar com alert mensagem de erro
        }
      )
    //exibir mensagem indicando livro excluído na listagem
  }

}
