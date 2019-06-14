import { Component, OnInit, Input } from '@angular/core';
import { Intervention } from '../../../models/intervention.model';
import {AuthService} from '../../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {DataService} from '../../../services/data.service';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-intervention-detail',
  templateUrl: './intervention-detail.component.html',
  styleUrls: ['./intervention-detail.component.css']
})
export class InterventionDetailComponent implements OnInit {
  // @Input() intervention: Intervention;
  intervention: Intervention;
  fromAlarms: boolean;
  checkoutForm;

  constructor(public authService: AuthService, private dataService: DataService, private route: ActivatedRoute, private location: Location, public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
  }

  ngOnInit() {
    /*if (this.config.data && !this.intervention){
      this.intervention= this.config.data;
    }*/
    this.dataService.getInterventionbyAlarm(this.config.data).subscribe(intervention => {this.intervention = intervention; console.log("intervention: " + JSON.stringify(this.intervention));});
  }

  acceptIntervention(form: NgForm) {
    this.dataService.editInterventionState(this.intervention.id, "Closed", form.value.comment).subscribe(data=>{
      this.dataService.changeStatusAlarm(this.config.data,"Accepted").subscribe(data2=> this.ref.close());
    });
  }

  rejectIntervention(form: NgForm) {
    this.dataService.editInterventionState(this.intervention.id, "Open", form.value.comment).subscribe(data=>{
      this.dataService.changeStatusAlarm(this.config.data,"Rejected").subscribe(data2=> this.ref.close());
    });
  }

  editIntervention(form: NgForm) {
    console.log("edit data:" + this.intervention.id +"-"+ this.intervention.solution+"-"+this.intervention.timestamp+"-"+this.intervention.duration+"-"+this.config.data+"-"+ this.intervention.status+"-"+ form.value.comment)
    this.dataService.editIntervention(this.intervention.id, this.intervention.solution,this.intervention.timestamp,this.intervention.duration,this.config.data, this.intervention.status, form.value.comment).subscribe(data=>{this.ref.close()});;
  }


}
