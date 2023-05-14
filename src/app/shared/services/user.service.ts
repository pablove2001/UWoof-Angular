import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/enviroments/enviroment';
import { User } from '../interface/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userIdStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) {
    this.userIdStatus.next(this.isUserId());
   }

  postUser(user: User){
    const url: string = environment.apiUrl + '/';
    return this.httpClient.post(url, user);
  }

  getUserById( id: string){
    const url = environment.apiUrl+ "users/" + id;
    //console.log(url);
    return this.httpClient.get(url);
  }

  setUserId(userId: string): void {
    sessionStorage.setItem('userId', userId);
    this.userIdStatus.next(true);
  }

  getUserId(): string {
    return sessionStorage.getItem('userId') || '';
  }

  deleteUserId(): void {
    sessionStorage.removeItem('userId');
    this.userIdStatus.next(false);
  }

  isUserId(): boolean {
    return !!this.getUserId();
  }
}
