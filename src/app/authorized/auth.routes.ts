import {Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "../auth.guard";
import {DashboardComponent} from "../shared/modules/dashboard/components/dashboard.component";
import {MainRoutes} from "../app.routes";

enum AuthorizedRoutes {
  DASHBOARD = 'dashboard'
}

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: AuthorizedRoutes.DASHBOARD },
      { path: AuthorizedRoutes.DASHBOARD, component: DashboardComponent },
    ],
  },

];
