import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/enviroments/enviroment';
import { User } from '../interface/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {
   }

  postUser(user: User){
    const url: string = environment.apiUrl + 'users';
    return this.httpClient.post(url, user);
  }

  getUserById( id: string){
    const url = environment.apiUrl+ "users/" + id;
    //console.log(url);
    return this.httpClient.get(url);
  }
}
