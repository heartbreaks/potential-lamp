import {Component} from "@angular/core";
import {TuiInputModule, TuiIslandModule} from "@taiga-ui/kit";
import {TuiButtonModule} from "@taiga-ui/core";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";
import {MainRoutes} from "../app.routes";

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.component.html',
  styleUrls: ['login-form.component.scss'],
  standalone: true,
  imports: [
    TuiIslandModule,
    TuiButtonModule,
    TuiInputModule,
    ReactiveFormsModule
  ]
})
export class LoginFormComponent {
  public formGroup: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(private _authService: AuthService, private _router: Router) {

  }

  login() {
    this._authService.login(this.formGroup.getRawValue()).subscribe((res) => {
      this._router.navigate([MainRoutes.AUTHORIZED])
    })
  }
}
