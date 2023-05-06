import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';
import { PetPost } from '../interface/pet-post.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  get(url: string): Observable<any> {
    const headers = new HttpHeaders({
      'token': this.tokenService.getToken()
    });

    return this.httpClient.get(url, { headers });
  }

  postPetPost(url: string, post: PetPost) {
    const headers = new HttpHeaders({
      'token': this.tokenService.getToken()
    });
    return this.httpClient.post(url, post, { headers });
  }

  put() {}
}
