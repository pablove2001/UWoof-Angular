import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';
import { PetPost } from '../interface/pet-post.model';
import { SearchFor } from '../interface/search-for';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  getPosts(url: string, searchFor: SearchFor): Observable<any> {
    const headers = new HttpHeaders({
      'token': this.tokenService.getToken(),
      'species': searchFor.species,
      'vaccinated': searchFor.vaccinated,
      'castrated': searchFor.castrated,
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
