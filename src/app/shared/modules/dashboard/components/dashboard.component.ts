import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from "@angular/core";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {DashboardService} from "../services/dashboard.service";
import {map, Observable, shareReplay, startWith, Subject, takeUntil, tap} from "rxjs";
import {Dashboard} from "../types/dashboard";

type ConnectedList = `cdk-drop-list-${number}`;

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {

  public dashboard$: Observable<Dashboard[]> = this._dashboardService.getTasks().pipe(
    tap(dashboard => (this.connectedDropLists = dashboard.map((_, index): ConnectedList => `cdk-drop-list-${index}`))),
  )
  public connectedDropLists: Array<`cdk-drop-list-${number}`> = [];
  constructor(private _dashboardService: DashboardService, private _cdr: ChangeDetectorRef) {}

  public drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
