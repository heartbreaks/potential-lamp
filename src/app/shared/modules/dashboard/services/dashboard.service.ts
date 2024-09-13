import {Injectable} from "@angular/core";
import {delay, of} from "rxjs";
import {DASHBOARD_STUB} from "../stubs/dashboard.stub";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public getTasks() {
    return of(DASHBOARD_STUB).pipe(delay(5000));
  }
}
