import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../load-data.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {

  private slideOpts: object = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private loaddataservice: LoadDataService) { }

  private plans: Array<any> = [];
  ngOnInit() {
    this.plans = this.loaddataservice.getPlans();
  }

}
