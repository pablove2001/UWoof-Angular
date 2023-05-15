import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './pages/chats/chats.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: 'chats', canActivate: [AuthGuard], component: ChatsComponent },
  { path: 'create-post', canActivate: [AuthGuard], component: CreatePostComponent },
  { path: 'single-post', component: SinglePostComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'profile/:id', canActivate: [AuthGuard], component: ProfileComponent },
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
  { path: 'sign-up', component: SignUpComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
