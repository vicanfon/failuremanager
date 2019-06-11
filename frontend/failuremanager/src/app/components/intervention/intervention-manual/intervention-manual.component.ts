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

  timestamp: Date = new Date();
  alarmid: number;

  constructor(public dataService: DataService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }


  ngOnInit() {
      this.alarmid = this.config.data.id;
  }

  createIntervention(form: NgForm){
    const timestamp = form.value.timestamp;
    const status = 'Open';
    const duration = form.value.code;
    const solution = form.value.name;
    this.dataService.createIntervention(solution,timestamp,duration,this.alarmid,status);
    form.reset();
    this.ref.close();
  }
  close(){
    this.ref.close();
  }

}
