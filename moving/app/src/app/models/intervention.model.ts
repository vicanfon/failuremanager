export class Intervention {
  // composed of data coming from type of alarm, type of failure, etc
  constructor(public id: number, public solution: string, public comment: string, public timestamp: Date, public duration: number, public alarmCode: string, public alarmName: string, public alarmType: string, public machine: string, public company: string, public status: string, public alarmid: number){}
}
export interface Intervention {
  id: number;
  solution: string;
  comment: string;
  timestamp: Date;
  duration: number;
  alarmCode: string;
  alarmName: string;
  alarmType: string;
  machine: string;
  company: string;
  status: string;
  alarmid: number;
}
