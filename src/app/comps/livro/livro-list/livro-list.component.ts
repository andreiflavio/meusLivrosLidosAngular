import { Component, OnInit } from '@angular/core';
import { Livro } from '../../../dtos/livro';
import { LivroService } from '../../../services/livro.service';

@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrls: ['./livro-list.component.css']
})
export class LivroListComponent implements OnInit {

  livros: Livro[];

  columnsToDisplay = ['id','nome'];

  constructor(
    private livroService: LivroService) { }

  ngOnInit() {
    this.livroService.getlivros()
      .subscribe(
      data => this.livros = data);
  }

}
