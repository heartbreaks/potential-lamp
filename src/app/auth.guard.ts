import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import { AuthService } from "./shared/services/auth.service";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this._authService.token) {
      return true;
    }
    this._router.navigate(['/login'])
    return false;
  }

}
