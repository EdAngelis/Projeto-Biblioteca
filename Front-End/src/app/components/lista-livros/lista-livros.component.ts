import { Component, OnInit } from '@angular/core';
import { LivroService} from '../../services/livro.service';
import { NgForm } from '@angular/forms';
import { Livro } from 'src/app/models/livro';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
  providers: [LivroService]
})
export class ListaLivrosComponent implements OnInit {

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
