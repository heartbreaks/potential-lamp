import {Injectable} from "@angular/core";
import {of, tap} from "rxjs";
import {CookieService} from "./cookie.service";
import {Router} from "@angular/router";
import {MainRoutes} from "../../app.routes";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _token: string | null = null;

  constructor(private _cookieService: CookieService, private _router: Router) {
  }

  public get token() {
    const cookieToken = this._cookieService.getCookie('token');
    return cookieToken || this._token;
  }

  public set token(token: string | null) {
    if (token === null) {
      this._cookieService.deleteCookie('token');
      this._token = null;
      this._router.navigate([MainRoutes.LOGIN])
      return
    }
    this._cookieService.setCookie('token', token, 1);
    this._token = token;
  }

  public login(credentials: { email: string, password: string }) {
    return of({ token: 'sadasdsadsad' }).pipe(
      tap((res) => ( this.token = res.token ))
    )
  }
}
