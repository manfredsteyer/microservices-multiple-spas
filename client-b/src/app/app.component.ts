import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root-b',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app v' + VERSION.full;
}
