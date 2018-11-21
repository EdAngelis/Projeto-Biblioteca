import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-forms',
  templateUrl: './cadastro-forms.component.html',
  styleUrls: ['./cadastro-forms.component.css'],
  providers: [UsersService]
})
export class CadastroFormsComponent implements OnInit {

  constructor(private UsersService: UsersService) { }

  ngOnInit() {
  }
  
  addUser(form: NgForm){
    this.UsersService.postUser(form.value)
    .subscribe(res=>  {
      console.log(res);
    })
    
  }
  
 ResetForm(form?: NgForm){
   form.reset();
   this.UsersService.selectUser = new User();
 }
}
