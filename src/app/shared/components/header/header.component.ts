import {Component} from "@angular/core";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  standalone: true,
})
export class HeaderComponent {

  constructor(private _authService: AuthService) {
  }
  public logout() {
    this._authService.token = null;
  }
}
