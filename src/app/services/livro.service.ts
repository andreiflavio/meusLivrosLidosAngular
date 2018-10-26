import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Livro } from '../dtos/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private apiContext: string;

  constructor(
    private http: HttpClient) {
    this.apiContext = environment.apiContext + "livro/";
  }

  getlivros(){
     return this.http.get<Array<Livro>>(this.apiContext);
   }

   getLivro(id: number){
     return this.http.get<Livro>(this.apiContext + id);
   }

   updateLivro(livro: Livro){
     return this.http.put<Livro>(this.apiContext + livro.id + '/', livro);
   }

   createLivro(livro: Livro){
     return this.http.post<Livro>(this.apiContext, livro);
   }

   deleteLivro(livro: Livro){
     return this.http.delete<Livro>(this.apiContext + livro.id + '/');
   }
}
