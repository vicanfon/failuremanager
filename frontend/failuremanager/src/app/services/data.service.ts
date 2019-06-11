import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import {Alarm} from '../models/alarm.model';
import {MACHINES} from '../models/mock-machines';
import {Machine} from '../models/machine.model';
import {Intervention} from '../models/intervention.model';
import {Stats} from '../models/stats.model';
import {AlarmType} from '../models/alarm-type.model';
import {FailureType} from '../models/failure-type';
import {User} from '../models/user.model';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  // URLS to DB remote methods
  private alarmsUrl = 'api/alarms';  // URL to web api
  private interventionUrl = 'api/interventions';  // URL to web api
  private statsUrl = 'api/stats';  // URL to web api
  private failureTypesUrl = 'api/failuretypes';  // URL to web api
  private machinesUrl = 'api/machines';  // URL to web api
  private alarmTypesUrl = 'api/alarmtypes';  // URL to web api
  private usersUrl = 'api/users';  // URL to web api

  constructor(private http: HttpClient) {
  }

    //get hello test
    getHello(): Observable<any> {
        return this.http.get(environment.apiUrl + '/sayhello')
        }

  // Alarm methods

  getAlarms(): Observable<Alarm[]> {
    return this.http.get<Alarm[]>(environment.apiUrl + '/alarms');
  }

  getAlarmsbyCompany(company: string): Observable<Alarm[]> {
    if(company === 'mass'){
      return this.http.get<Alarm[]>(environment.apiUrl + '/alarms');
    }else{
      return this.http.get<Alarm[]>(environment.apiUrl + '/alarms?company=' + company);
    }
  }

  getAlarm(id: number): Observable<Alarm> {
    return this.http.get<Alarm>(environment.apiUrl + '/alarms?id=' + id);
  }

  changeStatusAlarm(id: number, status: string) {
    return this.http.patch(environment.apiUrl + '/alarms?id=' + id, {status: status});
  }

  createAlarm(timestamp: Date, status: string, code: string, name: string, type: string, machine: string, company: string, origin: string, comment: string) {
    return this.http.post(environment.apiUrl + '/alarms', {
      timestamp: timestamp,
      status: status,
      code: code,
      name: name,
      type: type,
      machine: machine,
      company: company,
      origin: origin,
      comment: comment
    });
  }

  editAlarm(id: number, timestamp: Date, status: string, code: string, name: string, type: string, machine: string, company: string, origin: string, comment: string) {
    return this.http.patch(environment.apiUrl + '/alarms?id=' + id, {
      timestamp: timestamp,
      status: status,
      code: code,
      name: name,
      type: type,
      machine: machine,
      company: company,
      origin: origin,
      comment: comment
    });
  }

  deleteAlarm(id: number) {
    return this.http.delete(environment.apiUrl + '/alarms?id=' + id);
  }

  // get interventions

  getInterventions(): Observable<Intervention[]> {
    return this.http.get<Intervention[]>(environment.apiUrl + '/interventions');
  }

  getInterventionsbyCompany(company: string): Observable<Intervention[]> {
    return this.http.get<Intervention[]>(environment.apiUrl + '/interventions?company=' + company);
  }

  getIntervention(id: number): Observable<Intervention> {
    return this.http.get<Intervention>(environment.apiUrl + '/interventions?id=' + id);
  }

  getInterventionbyAlarm(alarmid: number): Observable<Intervention> {
    return this.http.get<Intervention>(environment.apiUrl + '/interventions?alarmid=' + alarmid);
  }

  createIntervention(solution: string, timestamp: Date, duration: number, alarmid: number, status: string) {
    return this.http.post(environment.apiUrl + '/interventions', {
      solution: solution,
      timestamp: timestamp,
      duration: duration,
      alarmid: alarmid,
      status: status,
      comment: ''
    });
  }

  editIntervention(id: number, solution: string, timestamp: Date, duration: number, alarmid: number, status: string, comment: string) {
    return this.http.patch(environment.apiUrl + '/interventions?id=' + id, {
      solution: solution,
      timestamp: timestamp,
      duration: duration,
      alarmid: alarmid,
      status: status,
      comment: comment
    });
  }

  deleteIntervention(id: number) {
    return this.http.delete(environment.apiUrl + '/interventions?id=' + id);
  }

  // data structures

  getAlarmTypes(): Observable<AlarmType[]> {
    return this.http.get<AlarmType[]>(environment.apiUrl + '/alarmtypes');
  }

  createAlarmType(code: string, name: string) {
    return this.http.post(environment.apiUrl + '/alarmtypes', {
      code: code,
      name: name
    });
  }

  editAlarmType(code: string, name: string) {
    return this.http.post(environment.apiUrl + '/alarmtypes?code=' + code, {
      name: name
    });
  }

  deleteAlarmType(code: string) {
    this.http.delete(environment.apiUrl + '/alarmtypes?code=' + code);
  }

  getFailureTypes(): Observable<FailureType[]> {
    return this.http.get<FailureType[]>(environment.apiUrl + '/failuretypes');
  }

  createFailureType(name: string) {
    return this.http.post(environment.apiUrl + '/failuretypes', {name: name});
  }

  editFailureType(id: number, name: string) {
    return this.http.patch(environment.apiUrl + '/failuretypes?id='+id, {name: name});
  }

  deleteFailureType(id: number) {
    return this.http.delete(environment.apiUrl + '/failuretypes?id='+id);
  }

  // get stats

  getStatsbyCompany(company: string): Observable<Stats[]> {
    //return this.http.get<Stats>(environment.apiUrl + '/stats');
    if (company === 'mass') {
      return this.http.get<Stats[]>(environment.apiUrl + '/stats');
    } else {
      return this.http.get<Stats[]>(environment.apiUrl + '/stats?company=' + company);
    }
  }

  // get machines

  getMachines(): Observable<Machine[]> {
    return this.http.get<Machine[]>(environment.apiUrl + '/machines');
  }

  getMachine(id: number): Observable<Machine> {
    return this.http.get<Machine>(environment.apiUrl + '/machines?id=' + id);
  }

  createMachine(name: string) {
    return this.http.post(environment.apiUrl + '/machines', {name: name});
  }

  editMachine(id: number, name: string) {
    return this.http.patch(environment.apiUrl + '/machines?id='+id, {name: name});
  }

  deleteMachine(id: number) {
    return this.http.delete(environment.apiUrl + '/machines?id='+id);
  }

  // get users

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl + '/users');
  }

  getUser(mail: string): Observable<User> {
    return this.http.get<User>(environment.apiUrl + '/users?mail=' + encodeURIComponent(mail));
  }

  createUser(mail: string, name: string, role: string, company: string) {
    return this.http.post(environment.apiUrl + '/users',{
      mail: mail,
      name: name,
      role: role,
      company: company
    });
  }

  editUser(mail: string, name: string, role: string, company: string) {
    return this.http.patch(environment.apiUrl + '/users?mail=' + mail,{
      mail: mail,
      name: name,
      role: role,
      company: company
    });
  }

  deleteUser(mail: string) {
    return this.http.delete(environment.apiUrl + '/users?mail='+ mail);
  }

}
