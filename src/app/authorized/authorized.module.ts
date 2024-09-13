import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {HomeComponent} from "./components/home/home.component";
import {TuiActionModule, TuiBadgeModule, TuiMarkerIconModule, TuiRadioModule} from "@taiga-ui/kit";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {TuiButtonModule} from "@taiga-ui/core";
import {RouterModule} from "@angular/router";
import {routes} from "./auth.routes";
import {HeaderComponent} from "../shared/components/header/header.component";
import {MainWrapperComponent} from "../shared/components/main-wrapper/main-wrapper.component";
import {DashboardComponent} from "../shared/modules/dashboard/components/dashboard.component";
import {CdkDrag, CdkDropList, DragDropModule} from "@angular/cdk/drag-drop";
import {DashboardModule} from "../shared/modules/dashboard/dashboard.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(routes),
    TuiBadgeModule,
    TuiActionModule,
    TuiMarkerIconModule,
    TuiRadioModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TuiButtonModule,
    // Components
    HeaderComponent,
    MainWrapperComponent,

    // Modules
    DashboardModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AuthorizedModule {}
