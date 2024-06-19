import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthgardService implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    routerSnapshot: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if(localStorage.getItem('token')) {
      return true;
    } else {
      // Navigate to '/login'
      return this.router.createUrlTree(['/signin']);
    }
  }
}
