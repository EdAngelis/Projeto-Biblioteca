import { Component, OnInit, Input } from '@angular/core';
import { LivroService} from '../../services/livro.service';
import { NgForm } from '@angular/forms';
import { Livro } from 'src/app/models/livro';
import { ListaLivrosComponent } from '../lista-livros/lista-livros.component';

@Component({
  selector: 'app-cadastro-livro-forms',
  templateUrl: './cadastro-livro-forms.component.html',
  styleUrls: ['./cadastro-livro-forms.component.css'],
  providers: [LivroService, ListaLivrosComponent]
})
export class CadastroLivroFormsComponent implements OnInit {

  @Input() AtualizarLista: ListaLivrosComponent;

  constructor(private LivroService: LivroService) { }

  ngOnInit() {
    
  }

  addLivro(form: NgForm){
     this.LivroService.postLivro(form.value)
    .subscribe(res=>  {
      console.log(res);
    })
    this.resetForm(form);
    this.AtualizarLista.getLivro();
  }

  resetForm(form?: NgForm ){
    form.reset();
    this.LivroService.SelectLivro = new Livro();
  }

}
