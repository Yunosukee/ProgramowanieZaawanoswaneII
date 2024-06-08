import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  login () {
      this.isLoggedIn = true;
      return this.isLoggedIn;
    }

  logout  () {
      this.isLoggedIn = false;
      return this.isLoggedIn;
    } 
}
