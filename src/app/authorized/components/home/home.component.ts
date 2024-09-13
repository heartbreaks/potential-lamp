import {Component} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  testForm = new FormGroup({
    testValue1: new FormControl('One'),
    testValue2: new FormControl({ value: 'One', disabled: true }),
  });
}
