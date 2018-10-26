export class Livro{
  //usuário será o logado, não precisando mapeá-lo no DTO
  id: number;
  nome: String;
  autor: String;
  serie: String;
  num_paginas: number;
  inicio: Date;
  fim: Date;
  nota: number;
  ebook: boolean = false;
  obs: String;
}
