import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {Intervention} from '../../models/intervention.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AlarmDetailComponent} from '../alarm/alarm-detail/alarm-detail.component';
import {DialogService} from 'primeng/api';
import {InterventionDetailComponent} from './intervention-detail/intervention-detail.component';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.css']
})
export class InterventionComponent implements OnInit {

  interventions: Intervention[];
  cols: any[];
  selectedIntervention: Intervention;

  constructor(public authService: AuthService, private dataService: DataService, public dialogService: DialogService) { }

  ngOnInit() {
    this.getInterventions();

    this.cols = [
      { field: 'timestamp', header: 'Timestamp' },
      { field: 'solution', header: 'Solution' },
      { field: 'duration', header: 'Duration' },
      { field: 'alarmcode', header: 'Alarm Code' },
      { field: 'alarmname', header: 'Alarm Name' },
      { field: 'alarmtype', header: 'Alarm Type' },
      { field: 'machine', header: 'Machine' },
      { field: 'company', header: 'Company' },
      { field: 'status', header: 'State' }
    ];
  }

  show(event) {
    const ref = this.dialogService.open(InterventionDetailComponent, {
      data: this.selectedIntervention.idalarm,
      header: 'Intervention detail',
      width: '85%'
    });
    ref.onClose.subscribe(x => this.getInterventions());
  }

  getInterventions(): void {
    this.dataService.getInterventionsbyCompany(this.authService.getCompany()).subscribe(interventions => this.interventions = interventions);
  }

}
