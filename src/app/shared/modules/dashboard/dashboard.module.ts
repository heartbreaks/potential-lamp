import {NgModule} from "@angular/core";
import {CdkDrag, CdkDropList, DragDropModule} from "@angular/cdk/drag-drop";
import {DashboardComponent} from "./components/dashboard.component";
import {CommonModule} from "@angular/common";
import {TuiLoaderModule} from "@taiga-ui/core";
import {TuiLetModule} from "@taiga-ui/cdk";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CdkDropList,
    DragDropModule,
    CdkDrag,
    TuiLoaderModule,
    TuiLetModule,
  ]
})
export class DashboardModule {}
