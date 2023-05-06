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

  setToken(token: string): void {
    sessionStorage.setItem('token', token);
    this.authStatus.next(true);
  }

  getToken(): string {
    return sessionStorage.getItem('token') || '';
  }

  deleteToken(): void {
    sessionStorage.removeItem('token');
    this.authStatus.next(false);
  }

  isAuth(): boolean {
    return !!this.getToken();
  }
}
