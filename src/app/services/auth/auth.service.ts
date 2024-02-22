import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  router = new Router();
  constructor() { }

  isAuthenticated(): boolean {
    // needed to check if window is not undefined because the angular
    // app is running in server side first
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token') ? true : false;
    }
    return false;
  }

  login(credentials: {email: string, password: string, rememberMe: boolean}): boolean {
    // for now, just log the credentials
    if (typeof window !== 'undefined') {
      localStorage.setItem('email', credentials.email);
      return true;
    }
    // return false if window is undefined
    return false;
  }

  redirectToHome(): void {
    this.router.navigateByUrl('/');
  }

  redirectToLogin(): void {
      this.router.navigateByUrl('/login');
  }

  redirectToRecoverPassword(): void {
    this.router.navigateByUrl('/recover-password');
  }

  redirectToRegister(): void {
    this.router.navigateByUrl('/register');
  }
}
