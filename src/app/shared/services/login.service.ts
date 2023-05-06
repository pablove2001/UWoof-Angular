import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credenciales } from '../interface/credenciales';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(credenciales: Credenciales): Observable<any> {
    return this.httpClient.post('http://localhost:3000/login', credenciales);
  }

  googleLogin(idToken: string): Observable<any> {
    const url = 'http://localhost:3000/login/google';
    return this.httpClient.post(url, {googleToken: idToken})
  }
}
