import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Withdraw } from '../models/withdraw';

@Injectable({
  providedIn: 'root'
})
export class RetiradaService {

  readonly URL_WITHDRAW = 'http://localhost:3000/retirarLivro';
  readonly URL_NOTIFICATION = 'http://localhost:3000/notification';
  SelectWithdraw: Withdraw;
  Withdraws: Withdraw[];

  constructor(private Http: HttpClient) { 
    this.SelectWithdraw = new Withdraw;
  }

  getWithdraw(){
    return this.Http.get(this.URL_WITHDRAW);
  }

  postWithdraw(withdraw: Withdraw){
    return this.Http.post(this.URL_WITHDRAW, withdraw);

  }

  getNotification(){
    return this.Http.get(this.URL_NOTIFICATION);
  }

}
