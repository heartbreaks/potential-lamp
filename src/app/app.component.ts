import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TuiRootModule} from "@taiga-ui/core";
import {TuiBadgeModule} from "@taiga-ui/kit";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TuiRootModule,
    RouterOutlet,
    TuiBadgeModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo';
}
