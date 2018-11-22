import { Component, OnInit } from '@angular/core';
import { RetiradaService } from 'src/app/services/retirada.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-retirada',
  templateUrl: './forms-retirada.component.html',
  styleUrls: ['./forms-retirada.component.css'],
  providers: [RetiradaService]
})
export class FormsRetiradaComponent implements OnInit {

  constructor(private RetiradaService: RetiradaService) { }

  ngOnInit() {
  }

  submitWithdraw(form: NgForm){
    this.RetiradaService.postWithdraw(form.value)
    .subscribe(res=>  {
      console.log(res);
    });

  }
}
