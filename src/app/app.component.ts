import { Component, OnInit } from '@angular/core';
import { DatetimeService } from './Services/datetime.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private datetimeservice: DatetimeService) {}
  title = 'foadyoutube';
  dateTime: any;

  ngOnInit(): void {
    this.dateTime = this.datetimeservice.datetimeShow();
  }
}
