import { Component, OnInit } from '@angular/core';
import { Intervention } from '../../../models/intervention.model';
import {NgForm} from '@angular/forms';
import {DataService} from '../../../services/data.service';
import {AuthService} from '../../../services/auth.service';
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';

@Component({
  selector: 'app-intervention-manual',
  templateUrl: './intervention-manual.component.html',
  styleUrls: ['./intervention-manual.component.css']
})
export class InterventionManualComponent implements OnInit {

  timestamp: Date;
  alarmid: number;

  constructor(public dataService: DataService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }


  ngOnInit() {
      this.timestamp = new Date();
      this.alarmid = this.config.data;
  }

  createIntervention(form: NgForm){
    const timestamp = this.timestamp.toLocaleString();
    const status = 'Open';
    const duration = form.value.duration;
    const solution = form.value.solution;
    console.log("createIntervention data:"+solution+"-"+ timestamp+"-"+duration+"-"+this.alarmid+"-"+status);
    this.dataService.createIntervention(solution, timestamp, duration,this.alarmid, status).subscribe(data => {
      form.reset();
      this.dataService.changeStatusAlarm(this.alarmid,'Intervened').subscribe(data2 => this.close());
    });
  }
  close(){
    this.ref.close();
  }

}
