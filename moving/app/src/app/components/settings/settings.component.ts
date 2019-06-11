import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Alarm} from '../../models/alarm.model';
import {AlarmType} from '../../models/alarm-type.model';
import {FailureType} from '../../models/failure-type';
import {Machine} from '../../models/machine.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  alarmtypes: AlarmType[];
  cols_at: any[];
  selectedAlarmType: AlarmType;
  failuretypes: FailureType[];
  cols_ft: any[];
  selectedFailureType: FailureType;
  machines: Machine[];
  cols_m: any[];
  selectedMachine: Machine;

  newAlarmType: boolean;
  newFailureType: boolean;
  newMachine: boolean;
  /*alarmtype: AlarmType;
  failuretype: FailureType;
  machine: Machine;*/
  alarmtype: any;
  failuretype: any;
  machine: any;
  displayDialog_at: boolean;
  displayDialog_ft: boolean;
  displayDialog_m: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlarmTypes().subscribe(alarmtypes => this.alarmtypes = alarmtypes);
    this.dataService.getFailureTypes().subscribe(failuretypes => this.failuretypes = failuretypes);
    this.dataService.getMachines().subscribe(machines => this.machines = machines);

    this.cols_at = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' }
    ];

    this.cols_ft = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' }
    ];

    this.cols_m = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' }
    ];
  }

  showDialogToAdd_at() {
    this.newAlarmType = true;
    this.alarmtype = {};
    this.displayDialog_at = true;
  }

  showDialogToAdd_ft() {
    this.newFailureType = true;
    this.failuretype = {};
    this.displayDialog_ft = true;
  }

  showDialogToAdd_m() {
    this.newMachine = true;
    this.machine = {};
    this.displayDialog_m = true;
  }
  create_at() {
    this.dataService.createAlarmType(this.alarmtype.code, this.alarmtype.name);
    this.displayDialog_at = false;
  }
  save_at() {
    this.dataService.editAlarmType(this.alarmtype.code, this.alarmtype.name);
    this.displayDialog_at = false;
  }

  delete_at() {
    this.dataService.deleteAlarmType(this.alarmtype.code);
    this.displayDialog_at = false;
  }
  create_ft() {
    this.dataService.createFailureType(this.failuretype.name);
    this.displayDialog_ft = false;
  }
  save_ft() {
    this.dataService.editFailureType(+this.failuretype.id, this.failuretype.name);
    this.displayDialog_ft = false;
  }

  delete_ft() {
    this.dataService.deleteFailureType(+this.failuretype.id);
    this.displayDialog_ft = false;
  }
  create_m() {
    this.dataService.createMachine(this.machine.name);
    this.displayDialog_m = false;
  }
  save_m() {
    this.dataService.editMachine(+this.machine.id, this.machine.name);
    this.displayDialog_m = false;
  }

  delete_m() {
    this.dataService.deleteMachine(+this.machine.id);
    this.displayDialog_m = false;
  }

  onRowSelect_ft(event) {
    this.newFailureType = false;
    this.failuretype = this.cloneObject(event.data);
    this.displayDialog_ft = true;
  }

  onRowSelect_at(event) {
    this.newAlarmType = false;
    this.alarmtype = this.cloneObject(event.data);
    this.displayDialog_at = true;
  }

  onRowSelect_m(event) {
    this.newMachine = false;
    this.machine = this.cloneObject(event.data);
    this.displayDialog_m = true;
  }

  cloneObject(c: any): any {
    let o = {};
    for (let prop in c) {
      o[prop] = c[prop];
    }
    return o;
  }

}
