import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoadDataService } from '../load-data.service';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.scss'],
})
export class AddeventComponent implements OnInit {

  private customPickerOptions: any = {};
  private mYear: number = 2021;
  private mMonth: number = 4;
  private mDay: number = 21;
  private mHour: number = 14;
  private mMin: number = 30;
  private mSecond: number = 0;
  public datetime: any = new Date().toISOString();

  constructor(
    public modalController: ModalController,
    private loaddataservice: LoadDataService
  ) { 
    
  }

  private now: string = (new Date()).toString();
  ngOnInit() {

  }

  Dismiss = () => {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  Add = () => {
    this.loaddataservice.addEventToPlan();
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  updateMyDate = (value) => {
    this.datetime = value;
  }
}
