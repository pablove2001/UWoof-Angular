import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileUserService {

  constructor(private httpCliente: HttpClient) { }

  getUserById( id: string){
    const url = "http://localhost:3000/users/" + id;
    //console.log(url);
    return this.httpCliente.get(url);
  }
}
