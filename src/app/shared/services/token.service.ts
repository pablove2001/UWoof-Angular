import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  authStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { 
    this.authStatus.next(this.isAuth());
  }

  setToken(token: string, userId: string): void {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('userId', userId);
    this.authStatus.next(true);
  }

  getToken(): string {
    return sessionStorage.getItem('token') || '';
  }

  getUserId(): string {
    return sessionStorage.getItem('userId') || '';
  }

  deleteToken(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    this.authStatus.next(false);
  }

  isAuth(): boolean {
    return !!this.getToken();
  }
}
