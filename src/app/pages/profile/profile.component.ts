import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/interface/user.model';
import { PostService } from 'src/app/shared/services/post.service';
import { PetPost } from 'src/app/shared/interface/pet-post.model';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userId: string = 'Error';
  user:User = {
    name: 'No Encontrado',
    last_name: '| Inicia Sesion',
    email: '',
    password: '',
    birthday: new Date()
  }

  posts: Array<PetPost> = [];

  constructor(private userService: UserService, private route: ActivatedRoute, private postService: PostService, private router: Router){ }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id') || 'Error';
      this.getUser();
      this.getUserPost();
    });
  }

  getUser(){
    if(this.userId != 'Error'){
      this.userService.getUserById(this.userId).subscribe(
        (response: any) => {
          this.user = response;
          console.log(this.user);
        }
      )
    }
  }

  getUserPost(){
    this.postService.getUserPosts(this.userId).subscribe((response: any) => {
      this.posts = response;
      console.log('this.posts:', this.posts);
    });
  }

  setPetPost(petPost: PetPost) {
    this.postService.setPost(petPost);
    this.router.navigate(['/single-post']);
  }

  borrarPost(postId: string | undefined){
    console.log('borrar post', postId);
    if (postId == undefined) return console.log('id del post undefined');
    this.postService.deletePost(postId).subscribe((response: any) => {
      console.log('response borrarPost', response)
      this.getUserPost();
    }, (error: any) => {
      // console.error('Error al borrar el post:', error);
      this.getUserPost();
    });
  }
}
