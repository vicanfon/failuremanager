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
  timestamp: string;
  codes: AlarmType[];
  selectedCode: AlarmType;
  types: FailureType[];
  selectedType: FailureType;
  machines: Machine[];
  selectedMachine: Machine;
  constructor(public dataService: DataService, public authService: AuthService, private  router: Router) { }

  ngOnInit() {
    this.timestamp = JSON.stringify(new Date());
    this.dataService.getAlarmTypes().subscribe(alarmtypes => this.codes = alarmtypes);
    this.dataService.getFailureTypes().subscribe(failuretypes => this.types = failuretypes);
    this.dataService.getMachines().subscribe(machines => this.machines = machines);
  }

  createAlarm(form: NgForm){
    const timestamp = this.timestamp;
    const status = 'Activated';
    const code = this.selectedCode.code;
    const type = 1; // esto lo asigna MASS
    const machine= this.selectedMachine.id;
    const company = this.authService.getCompany();
    const origin = "manual";
    const comment = form.value.comment;
    // (id, timestamp, status, code, name, type, machine, company, origin, comment)
    this.dataService.createAlarm(timestamp, status, code, type, machine, company, origin, comment).subscribe(data => {form.reset(); this.router.navigate(['/alarms']);});
  }

}
