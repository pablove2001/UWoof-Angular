import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetPost } from 'src/app/shared/interface/pet-post.model';
import { PostService } from 'src/app/shared/services/post.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/interface/user.model';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent {
  postId: string = 'Error';
  dateDay: string = '0';
  dateMonth: string = '0';
  dateYear: string = '0';
  post: PetPost = {
    _id: 'Error',
    kind_animal: 'Error',
    images: ['https://th.bing.com/th/id/R.e21ba7b8fc4646074e7e4e1bec8b175d?rik=O9alnujr2q6ksw&pid=ImgRaw&r=0'],
    user_id: 'Error',
    purpose: 'Error'
  };
  error: any;
  user: User = {
    name: 'No Encontrado',
    last_name: '| Inicia Sesion',
    email: '',
    password: '',
    birthday: new Date()
  }
  userId: string = 'Error';
  userFullname = '';

  constructor(private postService: PostService, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.postId = params.get('id') || 'Error';
      console.log(this.postId);
      this.getPost();
    });
  }

  getPost() {
    if (this.postId != 'Error') {
      this.postService.getPost(this.postId).subscribe(
        (response: any) => {
          this.post = response;
          this.dateMonth = this.post.publication_date?.toString().substring(5, 7) || '0';
          this.dateDay = this.post.publication_date?.toString().substring(8, 10) || '0';
          this.dateYear = this.post.publication_date?.toString().substring(0, 4) || '0';
          console.log(this.post.publication_date?.toString());
          console.log(this.post);
          this.userId = this.post.user_id;
          console.log("userId: " + this.userId);
          this.getUser();
        },
        (error) => {
          console.log(error);
          this.error = error;
          this.post = {
            _id: 'Error',
            kind_animal: 'Error',
            images: ['https://images.clarin.com/2021/07/02/pantallazo-azul-un-error-historico___1KUNaHYjz_1256x620__1.jpg'],
            user_id: 'Error',
            purpose: 'Error'
          };
        }
      );
    } else {
      console.log('Id Error');
    }
  }

  getUser() {
    if (this.userId != 'Error') {
      console.log("get user");
      this.userService.getUserById(this.userId).subscribe(
        (response: any) => {
          this.user = response;
          this.userFullname = this.user.name + " " + this.user.last_name;
          console.log(this.user);
        }
      )
    }
  }

}
