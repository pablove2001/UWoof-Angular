import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

import { PetPost } from 'src/app/shared/interface/pet-post.model';
import { PostService } from 'src/app/shared/services/post.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  logueado: boolean = false;
  petPost: PetPost;

  constructor(
    postService: PostService,
    private tokenService: TokenService,
    private router: Router,
    private socialAuthService: SocialAuthService,
    private loginService: LoginService
  ) {
    this.petPost = postService.getPost();
    postService.observablePetPost.subscribe((petPost: PetPost) => {
      this.petPost = petPost;
    });

    this.tokenService.authStatus.subscribe((status: boolean) => {
      this.logueado = status;
    })

    this.socialAuthService.authState.subscribe((user: SocialUser) => {
      if(user){
        console.log('Usuario de google', user);
        this.loginService.googleLogin(user.idToken).subscribe(response => {
          this.tokenService.setToken(response.token);
          this.router.navigate(['/tareas']);
        });
      }
    })
  }

  links: any = {
    'home': '/',
    'tareas': '/tareas'
  }

  cerrarSesion() {
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
