import { Component, OnInit } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';
import { Livro } from 'src/app/models/livro';

@Component({
  selector: 'app-lista-retirada',
  templateUrl: './lista-retirada.component.html',
  styleUrls: ['./lista-retirada.component.css'],
  providers: [LivroService]
})
export class ListaRetiradaComponent implements OnInit {

  constructor(private LivroService: LivroService) { }

  ngOnInit() {
    this.getLivro();
    
  }

  getLivro(){
    this.LivroService.getLivro()
    .subscribe(res =>{
      this.LivroService.Livros = res as Livro[];
      console.log(res);
    })
  }

}
