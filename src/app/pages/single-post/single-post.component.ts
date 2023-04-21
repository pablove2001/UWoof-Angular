import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetPost } from 'src/app/shared/interface/pet-post.model'
import { PostService } from 'src/app/shared/services/post.service'

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent {
  postId: string = 'Error';
  post: PetPost = {
    _id: 'Error',
    kind_animal: 'Error',
    images: ['https://images.clarin.com/2021/07/02/pantallazo-azul-un-error-historico___1KUNaHYjz_1256x620__1.jpg'],
    user_id: 'Error',
    purpose: 'Error'
  };
  error: any;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

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
          console.log(this.post);
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

}
