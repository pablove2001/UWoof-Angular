import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/enviroments/enviroment';
import { PetPost } from '../interface/pet-post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    const url: string = environment.apiUrl + 'pets';
    return this.httpClient.get(url);
  }

  getPost(id: string) {
    const url: string = environment.apiUrl + 'pets/' + id;
    return this.httpClient.get(url);
  }

  postPost(post: PetPost) {
    const url: string = environment.apiUrl + 'pets';
    return this.httpClient.post(url, post);
  }
}
