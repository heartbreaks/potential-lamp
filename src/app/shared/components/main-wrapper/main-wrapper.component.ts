import {Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'main-wrapper',
  templateUrl: 'main-wrapper.component.html',
  styleUrls: ['main-wrapper.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet
  ]
})
export class MainWrapperComponent {

}
