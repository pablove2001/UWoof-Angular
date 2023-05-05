import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpCliente: HttpClient, private tokenServicio: TokenService) { }

  get(url: string){
    const headers = new HttpHeaders({
      'Authorization': this.tokenServicio.getToken()
    });

    return this.httpCliente.get(url, { headers });
  }
}
