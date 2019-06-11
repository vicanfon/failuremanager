export class AlarmType {
  // composed of data coming from type of alarm, type of failure, etc
  constructor(public code: string, public name: string){}
}
export interface AlarmType {
  code: string;
  name: string;
}
