import { Component, OnInit } from '@angular/core';
import { RetiradaService } from 'src/app/services/retirada.service';
import { Withdraw } from 'src/app/models/withdraw';

@Component({
  selector: 'app-devolution-list',
  templateUrl: './devolution-list.component.html',
  styleUrls: ['./devolution-list.component.css'],
  providers: [RetiradaService]
})
export class DevolutionListComponent implements OnInit {

  constructor(private RetiradaService: RetiradaService) { }

  ngOnInit() {
    this.getWithdraw();
  }

  getWithdraw(){
    this.RetiradaService.getWithdraw()
    .subscribe(res =>{
      this.RetiradaService.Withdraws = res as Withdraw[];
      console.log(res);
    });
  }

}
