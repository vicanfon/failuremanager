export class Stats {
  // composed of data coming from type of alarm, type of failure, etc
  constructor(public nDetected: number, public nActivated: number, public nIntervened: number, public nDismissed: number, public nRejected: number, public avgSolvingTime: number, public frequentfailuretypes: FrequentFailures, public company: string){}
  // constructor(public statRows: aggregatedData[]){}
}
/*export interface Stats {
  nDetected: number;
  nActivated: number;
  nIntervened: number;
  nDismissed: number;
  nRejected: number;
  avgSolvingTime: number;
  frequentFailureTypes: FrequentFailures;
  company: string;
}*/

export class FrequentFailures{
  constructor(public codes: string[], public frequencies: number[]){}
}

export class aggregatedData{
  constructor(public status: string, public count: number){}
}
