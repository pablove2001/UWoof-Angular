import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/enviroments/enviroment';
import { User } from '../interface/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  postUser(user: User){
    const url: string = environment.apiUrl + '/';
    return this.httpClient.post(url, user);
  }

  getUserById( id: string){
    const url = "http://localhost:3000/users/" + id;
    //console.log(url);
    return this.httpClient.get(url);
  }
}
