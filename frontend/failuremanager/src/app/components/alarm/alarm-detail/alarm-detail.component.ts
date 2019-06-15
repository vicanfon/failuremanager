import { Component, OnInit, Input } from '@angular/core';
import { Alarm } from '../../../models/alarm.model';
import {AuthService} from '../../../services/auth.service';
import {DataService} from '../../../services/data.service';
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';
import {InterventionManualComponent} from '../../intervention/intervention-manual/intervention-manual.component';
import {InterventionDetailComponent} from '../../intervention/intervention-detail/intervention-detail.component';
import {FailureType} from '../../../models/failure-type';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-alarm-detail',
  templateUrl: './alarm-detail.component.html',
  styleUrls: ['./alarm-detail.component.css']
})
export class AlarmDetailComponent implements OnInit {

  @Input() alarm: Alarm;
  types: FailureType[];
  selectedType: FailureType;

  constructor(public authService: AuthService, private dataService: DataService, private dialogService: DialogService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }


  ngOnInit() {
    if (!this.alarm){
      this.alarm = this.config.data;
    }
    this.dataService.getFailureTypes().subscribe(failuretypes => this.types = failuretypes);
  }


  saveAlarm(form: NgForm){
    // console.log(form);
    // console.log("saving data:" + this.alarm.id + this.alarm.timestamp + this.alarm.status + this.alarm.code + this.alarm.name +"-"+ this.selectedType.id +"-"+ this.alarm.m_id + this.alarm.company + this.alarm.origin + form.value.comment);
    this.dataService.editAlarm(this.alarm.id, this.alarm.timestamp, this.alarm.status, this.alarm.code, this.selectedType.id, this.alarm.m_id, this.alarm.company, this.alarm.origin, form.value.comment).subscribe(data => {this.ref.close();});
    // send notification to mass
  }

  getLastIntervention(alarmId: number){
    this.dataService.getInterventionbyAlarm(alarmId);
  }

  changeStatusAlarm(alarmid: number, status: string){
    this.dataService.changeStatusAlarm(alarmid, status).subscribe(data => {this.ref.close();});;
  }

  createIntervention(){
    const ref = this.dialogService.open(InterventionManualComponent, {
      data: this.alarm.id,
      header: 'Create Intervention',
      width: '85%',
      contentStyle: {"max-height": "90vw", "overflow": "auto"}
    });
    ref.onClose.subscribe(x => this.ref.close());
  }

  currentIntervention(){
    const ref = this.dialogService.open(InterventionDetailComponent, {
      data: this.alarm.id,
      header: 'Intervention',
      width: '85%',
      contentStyle: {"max-height": "90vw", "overflow": "auto"}
    });
    ref.onClose.subscribe(x => this.ref.close());
  }
}
