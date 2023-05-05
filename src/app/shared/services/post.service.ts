import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/enviroments/enviroment';
import { PetPost } from '../interface/pet-post.model';

import { BehaviorSubject } from 'rxjs';

import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  observablePetPost: BehaviorSubject<PetPost>;

  petPostSelected: PetPost = {
    kind_animal: '',
    race: '',
    name: '',
    age: 0,
    images: [''],
    vaccinated: false,
    castrated: false,
    description: '',
    height_cm: 0,
    long_cm: 0,
    weight_kg: 0,
    user_id: '',
    purpose: '',
    publication_date: new Date(),
    purpose_achieved: false,
    deleted: false
  }

  constructor(private httpServicio: HttpService, private httpClient: HttpClient) {
    this.observablePetPost = new BehaviorSubject(this.petPostSelected);
  }

  getPosts() {
    const url: string = environment.apiUrl + 'pets';
    return this.httpServicio.get(url);
  }

  getPost(): PetPost {
    return this.petPostSelected;
  }

  
  postPost(post: PetPost) {
    const url: string = environment.apiUrl + 'pets';
    return this.httpClient.post(url, post);
  }


  setPost(petPost: PetPost): void {
    this.petPostSelected = petPost;
    this.observablePetPost.next(petPost);
  }
}
