import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/enviroments/enviroment';
import { User } from '../interface/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) { }

  postUser(user: User){
    const url: string = environment.urlNewUser;
    return this.httpClient.post(url, user);
  }
}
