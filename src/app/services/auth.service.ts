import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean {
    // needed to check if window is not undefined because the angular
    // app is running in server side first
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token') ? true : false;
    }
    return false;
  }

}
