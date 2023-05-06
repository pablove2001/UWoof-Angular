import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credenciales } from '../interface/credenciales';

import { Observable } from 'rxjs';
import { User } from '../interface/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private httpClient: HttpClient) { }

  signUp(user: User): Observable<any>{
    return this.httpClient.post('http://localhost:3000/registro', user);
  }
}
