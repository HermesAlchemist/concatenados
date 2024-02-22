import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  // create a new router
  const router = new Router();
  const authService = new AuthService();

  // check if the user is logged in
  if (authService.isAuthenticated()) {
    return true;
  }

  // redirect and return false by default
  authService.redirectToLogin();
  return false;
};
