import { Component, OnInit } from '@angular/core';
import { RetiradaService } from '../services/retirada.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RetiradaService]
})
export class HomeComponent implements OnInit {

  constructor(private RetiradaService: RetiradaService) { }

  ngOnInit() {
    this.getNotification();
  }

  getNotification(){
    this.RetiradaService.getNotification()
    .subscribe(res=>{
      console.log(res);
    })

    
    
  }
}
