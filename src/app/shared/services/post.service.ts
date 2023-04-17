import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    const url: string = environment.apiUrl + 'pets';
    return this.httpClient.get(url);
  }
}
