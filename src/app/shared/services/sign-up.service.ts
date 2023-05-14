import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credenciales } from '../interface/credenciales';
import { environment } from 'src/enviroments/enviroment';

import { Observable } from 'rxjs';
import { User } from '../interface/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private httpClient: HttpClient) { }

  signUp(user: User): Observable<any>{
    return this.httpClient.post(environment.apiUrl+'registro', user);
  }
}
