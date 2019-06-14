import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import {Machine} from '../../models/machine.model';
import {FrequentFailures, Stats} from '../../models/stats.model';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  machines: Machine[];
  stats: Stats;
  data: any;
  
  // hellomsg : any;

  constructor(private dataService: DataService, public authService: AuthService) { }

  ngOnInit() {
    console.log(this.authService.getCompany());
    // uncomment this -- this.dataService.getStatsbyCompany(this.authService.getCompany()).subscribe(stats => {this.stats = stats[0]; this.showChart(stats[0].frequentfailuretypes);});
    // this.dataService.getHello().subscribe(response => {this.hellomsg = response},err=>{console.log(err)});
  }

  showChart(ff: FrequentFailures){
    this.data = {
      labels: ff.codes,
      datasets: [
        {
          data: ff.frequencies,
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
  }
}
