import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { LoginComponent } from './pages/login/login.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { TopBarComponent } from './layouts/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SinglePostComponent } from './pages/single-post/single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatsComponent,
    CreatePostComponent,
    LoginComponent,
    PostsComponent,
    ProfileComponent,
    SignUpComponent,
    FooterComponent,
    TopBarComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
