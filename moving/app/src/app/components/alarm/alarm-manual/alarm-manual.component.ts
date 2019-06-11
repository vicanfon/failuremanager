import { Component, OnInit } from '@angular/core';
import { Alarm } from '../../../models/alarm.model';
import {NgForm} from '@angular/forms';
import {DataService} from '../../../services/data.service';
import {AlarmType} from '../../../models/alarm-type.model';
import {FailureType} from '../../../models/failure-type';
import {Machine} from '../../../models/machine.model';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-alarm-manual',
  templateUrl: './alarm-manual.component.html',
  styleUrls: ['./alarm-manual.component.css']
})
export class AlarmManualComponent implements OnInit {
  timestamp: Date = new Date();
  codes: AlarmType[];
  selectedCode: AlarmType;
  types: FailureType[];
  selectedType: FailureType;
  machines: Machine[];
  selectedMachine: Machine;
  constructor(public dataService: DataService, public authService: AuthService, private  router: Router) { }

  ngOnInit() {
    this.dataService.getAlarmTypes().subscribe(alarmtypes => this.codes = alarmtypes);
    this.dataService.getFailureTypes().subscribe(failuretypes => this.types = failuretypes);
    this.dataService.getMachines().subscribe(machines => this.machines = machines);
  }

  createAlarm(form: NgForm){
    console.log(form.value);
    const timestamp = form.value.timestamp;
    const status = 'Activated';
    const code = form.value.code.code;
    const name = form.value.code.name;
    const type = ""; // esto lo asigna MASS
    const machine= form.value.machine;
    const company = this.authService.getCompany();
    const origin = "manual";
    const comment = form.value.comment;
    // (id, timestamp, status, code, name, type, machine, company, origin, comment)
    this.dataService.createAlarm(timestamp, status, code, name, type, machine, company, origin, comment);
    form.reset();
    this.router.navigate(['/alarms']);
  }

}
