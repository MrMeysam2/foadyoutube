import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  allowDis = true;
  lastName = "";
  constructor() {
    setTimeout(() => {
      this.allowDis = false;
    }, 3000);
  }
}
