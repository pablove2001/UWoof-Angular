import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PetPost } from 'src/app/shared/interface/pet-post.model'
import { PostService } from 'src/app/shared/services/post.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: Array<PetPost> = [];
  filteredPosts: Array<PetPost> = [];

  constructor(private postService: PostService, private router: Router) {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe((response: any) => {
      this.posts = response;
      this.filteredPosts = this.posts;
      console.log('response:');
      console.log(response);
      console.log(this.posts);
    });
  }

  setPetPost(petPost: PetPost) {
    this.postService.setPost(petPost);
    this.router.navigate(['/single-post']);
    
    console.log('hola mundo esto es un click', petPost);
  }
}
