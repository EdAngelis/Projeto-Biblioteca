import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly USER_URL = 'http://localhost:3000/usuarios';

  selectUser: User;
  

  constructor(private HttpClient: HttpClient) {
    this.selectUser = new User();
   }

  postUser(User:User){
   return this.HttpClient.post(this.USER_URL, User);
  }
}
