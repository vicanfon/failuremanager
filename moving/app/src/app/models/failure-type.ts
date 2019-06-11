export class FailureType {
  // composed of data coming from type of alarm, type of failure, etc
  constructor(public id: string, public name: string){}
}
export interface FailureType {
  id: string;
  name: string;
}
