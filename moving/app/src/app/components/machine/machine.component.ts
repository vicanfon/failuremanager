import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataService } from '../../services/data.service';
import { Machine } from '../../models/machine.model';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit {
  machine: Machine;

  constructor(private route: ActivatedRoute, private dataService: DataService, private location: Location) { }

  ngOnInit() {
    this.getMachine();
  }

  getMachine(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getMachine(id).subscribe(machine => this.machine = machine);
  }

}
