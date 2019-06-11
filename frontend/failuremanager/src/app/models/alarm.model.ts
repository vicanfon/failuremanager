export class Alarm {
  // composed of data coming from type of alarm, type of failure, etc
  constructor(public id: number, public timestamp: Date, public status: string, public code: string, public name: string, public type: string, public machine: string, public company: string, public origin: string, public comment: string){}
}
export interface Alarm {
  id: number;
  timestamp: Date;
  status: string;
  code: string;
  name: string;
  type: string;
  machine: string;
  company: string;
  origin: string;
  comment: string;
}
