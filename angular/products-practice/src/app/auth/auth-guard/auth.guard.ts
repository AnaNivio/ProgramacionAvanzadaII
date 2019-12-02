import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UserAsyncService } from 'src/app/user/services/user-asyncService/user-async.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserAsyncService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const url: string = state.url;
      return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
      const token = localStorage.getItem('token');
      console.log('AuthGuard token: ' + token);

      if (token) { return true; }

      // Store the attempted URL for redirecting
      this.userService.redirectUrl = url;

      // Navigate to the login page with extras
      this.router.navigate(['/login']);
      return false;
    }
}



