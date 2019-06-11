import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import {Alarm} from '../../models/alarm.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DialogService} from 'primeng/api';
import {AlarmDetailComponent} from './alarm-detail/alarm-detail.component';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})
export class AlarmComponent implements OnInit {

  alarms: Alarm[];
  cols: any[];
  selectedAlarm: Alarm;
  closeResult: string;
  display: boolean;



constructor(private dataService: DataService, public authService: AuthService, public dialogService: DialogService) { }

  ngOnInit() {
    this.getAlarms();

    this.cols = [
      { field: 'timestamp', header: 'Timestamp' },
      { field: 'status', header: 'Status' },
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'type', header: 'Type' },
      { field: 'machine', header: 'Machine' },
      { field: 'company', header: 'Company' },
      { field: 'origin', header: 'Origin' }
    ];
  }

  show(event) {
    const ref = this.dialogService.open(AlarmDetailComponent, {
      data: event.data,
      header: 'Alarm detail',
      width: '85%',
      contentStyle: {'max-height': '95vw', 'overflow': 'auto'}
    });
    ref.onClose.subscribe(x => console.log(x));
  }

  getAlarms(): void {
    this.dataService.getAlarmsbyCompany(this.authService.getCompany()).subscribe(alarms => this.alarms = alarms);
  }
}
