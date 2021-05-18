import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadDataService } from '../load-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private loaddataservice: LoadDataService) {}

  goToPlan = () => {
    // this.router.navigate(['/plan'])
    this.loaddataservice.toggleViewMode();
  }
}
