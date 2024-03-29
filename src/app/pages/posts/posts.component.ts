import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PetPost } from 'src/app/shared/interface/pet-post.model'
import { SearchFor } from 'src/app/shared/interface/search-for';
import { PostService } from 'src/app/shared/services/post.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: Array<PetPost> = [];

  constructor(private postService: PostService, private router: Router) {
    this.getPosts();
  }

  specie: string = 'all';

  getPosts() {
    console.log(this.specie);
    this.postService.getPosts(this.specie).subscribe((response: any) => {
      this.posts = response;
      console.log('this.posts:', this.posts);
    });
  }

  setPetPost(petPost: PetPost) {
    this.postService.setPost(petPost);
    this.router.navigate(['/single-post']);
    
    console.log('hola mundo esto es un click', petPost);
  }
}
