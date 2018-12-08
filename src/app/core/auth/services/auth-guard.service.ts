
import { Injectable } from '@angular/core';
import {
  Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot
} from '@angular/router';

import { AuthenticationService } from '@app/core/auth/services/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.authenticationService.userValue;

    console.log('AuthGuard');

    if (user && user.token) {
      return true;
    }

    this.router.navigate(
      ['/login'],
      { queryParams: { returnUrl: state.url }}
    );
    return false;
  }
}
