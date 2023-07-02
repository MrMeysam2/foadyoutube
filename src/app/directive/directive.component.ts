import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss'],
})
export class DirectiveComponent implements OnInit {
  valuengIf: boolean = true;

  constructor() {}

  ngOnInit() {}

  cahngeColor(value: any) {
    switch (value) {
      case 1:
        return 'red';
      case 2:
        return 'blue';
      default:
        return 'green';
    }
  }
}
