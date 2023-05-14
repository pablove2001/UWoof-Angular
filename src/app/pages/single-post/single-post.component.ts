import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetPost } from 'src/app/shared/interface/pet-post.model';
import { PostService } from 'src/app/shared/services/post.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/interface/user.model';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent {
  post: PetPost;

  user: User = {
    name: 'No Encontrado',
    last_name: '',
    email: '',
    password: '',
    birthday: new Date(),
    profile_picture: 'https://user-images.githubusercontent.com/52970365/236649830-c54ba9e3-7620-41f9-9ecb-ff3b512a558f.png',
  }

  constructor(private postService: PostService, private userService: UserService) {
    this.post = this.postService.getPost();
  }

  ngOnInit() {
    this.getUserPost();
  }

  getUserPost() {
    this.userService.getUserById(this.post.user_id).subscribe(
      (response: any) => {
        this.user = response;
        console.log(this.user);
      }
    )
  }

}
