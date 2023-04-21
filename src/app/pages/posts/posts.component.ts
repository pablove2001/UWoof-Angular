import { Component } from '@angular/core';

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

  constructor(private postService: PostService) {
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
}
