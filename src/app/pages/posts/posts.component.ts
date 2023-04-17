import { Component } from '@angular/core';

import { PetPost } from 'src/app/shared/interface/pet-post.model'
import { PostService } from 'src/app/shared/services/post.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  // constructor(private http: HttpClient) {
  //   this.getPets();
  // }

  // getPets() {
  //   this.http.get('http://localhost:3000/pets').subscribe((data) => {
  //     console.log(data);
  //   });
  // }



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

  // filter() {
  //   console.log('cliiiickkkk ' + this.buscar);
  //   const buscar = this.buscar.toLowerCase();
  //   this.tareasFiltradas = this.tareas.filter((item: Tarea) => {
  //     return item.title?.toLowerCase().includes(buscar);
  //   });
  // }

}
