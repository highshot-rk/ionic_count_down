import { Component, Input, OnInit } from '@angular/core';
import { LoadDataService } from '../load-data.service';

@Component({
  selector: 'app-remain-time',
  templateUrl: './remain-time.component.html',
  styleUrls: ['./remain-time.component.scss'],
})
export class RemainTimeComponent implements OnInit {

  @Input()
  datetime: string = "";
  @Input()
  eventid: number = -1;
  lastdatetime: string = "";

  private timer: any = null;

  constructor(private loaddataservice: LoadDataService) { }

  ngOnInit() {
    this.timer = setInterval(() => {
      const seconds = Math.floor((+new Date(this.datetime) - +new Date()) / 1000);
      if (seconds > 0) {
        this.lastdatetime =  `${Math.floor(seconds/3600)} : ${Math.floor(seconds%3600/60)} : ${seconds%60}`;
      } else {
        this.loaddataservice.removeEvent(this.eventid);
        clearInterval(this.timer);
      }
    }, 1000)
  }

}
