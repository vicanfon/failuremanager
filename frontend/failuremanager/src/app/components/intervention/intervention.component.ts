import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {Intervention} from '../../models/intervention.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AlarmDetailComponent} from '../alarm/alarm-detail/alarm-detail.component';
import {DialogService} from 'primeng/api';
import {InterventionDetailComponent} from './intervention-detail/intervention-detail.component';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.css']
})
export class InterventionComponent implements OnInit {

  interventions: Intervention[];
  cols: any[];
  selectedIntervention: Intervention;

  constructor(private dataService: DataService, public dialogService: DialogService) { }

  ngOnInit() {
    this.getInterventions();

    this.cols = [
      { field: 'timestamp', header: 'Timestamp' },
      { field: 'solution', header: 'Solution' },
      { field: 'duration', header: 'Duration' },
      { field: 'alarmCode', header: 'Alarm Code' },
      { field: 'alarmName', header: 'Alarm Name' },
      { field: 'alarmType', header: 'Alarm Type' },
      { field: 'machine', header: 'Machine' },
      { field: 'company', header: 'Company' },
      { field: 'status', header: 'State' }
    ];
  }

  show(event) {
    const ref = this.dialogService.open(InterventionDetailComponent, {
      data: event.data,
      header: 'Intervention detail',
      width: '85%'
    });
    ref.onClose.subscribe(x => console.log(x));
  }

  getInterventions(): void {
    this.dataService.getInterventions().subscribe(interventions => this.interventions = interventions);
  }

}
