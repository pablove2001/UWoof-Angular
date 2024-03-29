import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

import { PetPost } from 'src/app/shared/interface/pet-post.model';
import { PostService } from 'src/app/shared/services/post.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  logueado: boolean = false;
  petPost: PetPost;
  userId: string = '';

  constructor(
    postService: PostService,
    private tokenService: TokenService,
    private router: Router,
    private socialAuthService: SocialAuthService,
    private loginService: LoginService,
    private userService: UserService
  ) {
    this.petPost = postService.getPost();
    postService.observablePetPost.subscribe((petPost: PetPost) => {
      this.petPost = petPost;
    });

    this.tokenService.authStatus.subscribe((status: boolean) => {
      this.logueado = status;
      this.userId = this.tokenService.getUserId();
    })

    this.socialAuthService.authState.subscribe((user: SocialUser) => {
      console.log('Hay cambios en el inicio de sesion');
      if(user){
        const currentDate = new Date();
        console.log('Usuario de google',currentDate, Date, user);
        this.loginService.googleLogin(user).subscribe(response => {
          console.log('token que se guarda2', response.token);
          this.userId = response.userId;
          console.log('response2', response);
          this.tokenService.setToken(response.token, response.userId);
          this.router.navigate(['/posts']);
        });
      }
    })
  }

  links: any = {
    'home': '/',
    'posts': '/posts'
  }

  logOut() {
    this.tokenService.deleteToken();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    const menuToggle = document.querySelector(".menu-toggle");
    if (menuToggle !== null) {
      menuToggle.addEventListener("click", function () {
        const nav = document.querySelector(".nav");
        if (nav !== null) {
          nav.classList.toggle("mobile-nav");
          menuToggle.classList.toggle("is-active");
        }
      });
    }
  }
}
