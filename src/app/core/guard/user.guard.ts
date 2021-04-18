import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(
    private route: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let role = localStorage.getItem("role");
    if (role === '-1') {
      return true;
    } else if (role === '1') {
      this.route.navigate(["admin"]);
      return false;
    }

    else {
      this.route.navigate(["auth/login"]);
      return false;
    }
  }

}
