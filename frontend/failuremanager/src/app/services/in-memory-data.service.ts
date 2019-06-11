import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Alarm } from '../models/alarm.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const alarms = [
      { id: 11, timestamp: new Date(), status: 'Detected', code: '12', name: 'alarm 12', type: '1X', machine: 'M1', company: 'SIS', origin: 'automatic', comment: 'It broke like doing X' },
      { id: 12, timestamp: new Date(), status: 'Activated', code: '12', name: 'alarm 12', type: '1X', machine: 'M1', company: 'SIS', origin: 'automatic', comment: 'It broke like doing X' },
      { id: 13, timestamp: new Date(), status: 'Dismissed', code: '11', name: 'alarm 11', type: '1X', machine: 'M1', company: 'SIS', origin: 'automatic', comment: 'It broke like doing X' },
      { id: 14, timestamp: new Date(), status: 'Detected', code: '12', name: 'alarm 12', type: '1X', machine: 'M1', company: 'SIS', origin: 'automatic', comment: 'It broke like doing X' },
      { id: 15, timestamp: new Date(), status: 'Intervened', code: '12', name: 'alarm 12', type: '1X', machine: 'M1', company: 'SIS', origin: 'automatic', comment: 'It broke like doing X' },
      { id: 16, timestamp: new Date(), status: 'Detected', code: '12', name: 'alarm 12', type: '1X', machine: 'M1', company: 'SIS', origin: 'automatic', comment: 'It broke like doing X' },
      { id: 17, timestamp: new Date(), status: 'Accepted', code: '12', name: 'alarm 12', type: '1X', machine: 'M1', company: 'SIS', origin: 'automatic', comment: 'It broke like doing X' },
      { id: 18, timestamp: new Date(), status: 'Rejected', code: '12', name: 'alarm 12', type: '1X', machine: 'M1', company: 'SIS', origin: 'automatic', comment: 'It broke like doing X' }
    ];
    const interventions = [
      { id: 11, solution: "press A", comment: 'You have to press A to solve the problem', timestamp: new Date(), duration: 0.5, alarmCode: '15', alarmName: 'alarm 15', alarmType: '12', machine: 'M1', company: 'SIS', status: 'open', alarmid: 15 },
      { id: 12, solution: "press B", comment: 'You have to press B to solve the problem', timestamp: new Date(), duration: 0.5, alarmCode: '10', alarmName: 'alarm 11', alarmType: '11', machine: 'M2', company: 'SIS', status: 'close', alarmid: 18  }
    ];

    const alarmtypes= [
      { code: 11, name: "name 1" },
      { code: 12, name: "name 2" },
      { code: 13, name: "name 3" }
    ];

    const machines = [
      { id: 1, name: "M1" },
      { id: 2, name: "M2" },
      { id: 3, name: "M3" }
    ];
    const failuretypes = [
      { id: 1, name: "Failure 1" },
      { id: 2, name: "Failure 2" },
      { id: 3, name: "Failure 3" }
    ];

    const stats = [{
      nDetected: 2,
      nActivated: 5,
      nIntervened: 3,
      nDismissed: 2,
      nRejected: 1,
      avgSolvingTime: 1.5,
      company: 'sis',
      frequentfailuretypes: {
        codes: ['12','11','15'],
        frequencies: [0.3,0.6,0.1]
      }
    }];


    const users = [
      { mail: 'pepe@mass.com', name: 'Pepe Pons', role: 'mass', company: 'mass' },
      { mail: 'juan@mass.com', name: 'Juan Garcia', role: 'mass', company: 'mass' },
      { mail: 'antonio@sis.com', name: 'AntonioPerez', role: 'sis', company: 'sis' }
    ];

    return {alarms, interventions, stats, alarmtypes, machines, failuretypes, users};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(alarms: Alarm[]): number {
    return alarms.length > 0 ? Math.max(...alarms.map(alarm => alarm.id)) + 1 : 11;
  }
}
