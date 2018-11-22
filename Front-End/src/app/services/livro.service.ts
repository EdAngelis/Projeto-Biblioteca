import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livro } from '../models/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {


  readonly URL_SERVER = "http://localhost:3000/livros";
  readonly URL_NOTIFICATION = 'http://localhost:3000/notification';
  SelectLivro: Livro;
  Livros: Livro[];

  constructor(private HttpClient: HttpClient) {
    this.SelectLivro = new Livro;
   }

  postLivro(Livro: Livro){
    return this.HttpClient.post(this.URL_SERVER, Livro);
  }

  getLivro(){
    return this.HttpClient.get(this.URL_SERVER);
  }
  
  sendNotification(){
    this.HttpClient.get(this.URL_NOTIFICATION);
  }
}
