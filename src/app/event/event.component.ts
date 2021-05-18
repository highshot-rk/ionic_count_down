import { Component, Input, OnInit } from '@angular/core';
import { LoadDataService } from '../load-data.service';
import { ModalController } from '@ionic/angular';
import { AddeventComponent } from '../addevent/addevent.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {

  private title: string = "";
  private date: string = "";
  private time: string = "";
  private marginTop: string = "50px";
  private marginTop_gaptime: string = "25px";
  private gap_date: string = "";
  private gap_time: string = "";
  private id: number = -1;
  private isFirstItem: boolean = false;

  @Input()
  eventdata: any = {};
  @Input()
  totallist: any = "";

  constructor(private loaddataservice: LoadDataService, public modalController: ModalController) { }

  ngOnInit() {
    this.id = this.eventdata.value.id;
    if (this.eventdata.key === "0") this.isFirstItem = true;
    let datetime = new Date(this.eventdata.value.datetime);
    let prevtime = new Date();
    if (this.eventdata.key > 0) {
      prevtime = new Date(this.totallist[this.eventdata.key - 1].datetime)
    }
    this.title = this.eventdata.value.title;
    this.date = `${datetime.getMonth()} / ${datetime.getDate()}`;
    this.time = `${datetime.getHours()} : ${datetime.getMinutes()} : ${datetime.getSeconds()}`
    setInterval(() => {
      if (this.loaddataservice.getViewMode()) {
        const seconds = Math.floor((+datetime - +prevtime) / 1000);
        this.marginTop = `${seconds / 432}px`;
        this.marginTop_gaptime = `${seconds / 432 / 2 - 8}px`;
        let datte = Math.floor((+datetime - +prevtime) / 1000 / 3600 / 24);
        this.gap_date = datte === 0 ? "" : `${datte}d`;
        this.gap_time = `${Math.floor((+datetime - +prevtime) / 1000 / 3600 % 24)} : ${Math.floor((+datetime - +prevtime) / 1000 / 60 % 60)} : ${Math.floor((+datetime - +prevtime) / 1000 % 60)}`;
      } else {
        this.marginTop = "20px";
        this.marginTop_gaptime = "2px";
      }
    }, 1000);
  }

  openEditEventModal = async () => {
    const modal = await this.modalController.create({
      component: AddeventComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'mode': 'edit',
      }
    });
    return await modal.present();
  }

}
