import { Routes } from '@angular/router';
import { LoginFormComponent } from "./login-form/login-form.component";
import {AuthGuard} from "./auth.guard";
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";

export enum MainRoutes {
  AUTHORIZED = 'authorized',
  LOGIN = 'login',
  NOT_FOUND = 'not-found'
}

export const routes: Routes = [
  {
    path: MainRoutes.AUTHORIZED,
    loadChildren: () => import('./authorized/authorized.module').then(r => r.AuthorizedModule),
    canActivate: [AuthGuard],
  },
  { path:  MainRoutes.LOGIN, component: LoginFormComponent },

  { path: MainRoutes.NOT_FOUND, component: NotFoundComponent },
  { path: '**', redirectTo: MainRoutes.NOT_FOUND }
];
