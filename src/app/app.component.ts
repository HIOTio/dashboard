import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Observable } from 'rxjs/Observable';
import * as shape from 'd3-shape';

import { GuageService } from './services/guage.service';
@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  curveType: 'Linear';
  curve: any = shape.curveLinear;
  view: any[];
  hierarchialGraph = {
    nodes: [
      {
        id: 'start',
        label: 'start'
      }, {
        id: '1',
        label: 'Query ThreatConnect',
      }, {
        id: '2',
        label: 'Query XForce',
      }, {
        id: '3',
        label: 'Format Results'
      }, {
        id: '4',
        label: 'Search Splunk'
      }, {
        id: '5',
        label: 'Block LDAP'
      }, {
        id: '6',
        label: 'Email Results'
      }
    ],
    links: [
      {
        source: 'start',
        target: '1',
        label: 'links to'
      }, {
        source: 'start',
        target: '2'
      }, {
        source: '1',
        target: '3',
        label: 'related to'
      }, {
        source: '2',
        target: '4'
      }, {
        source: '2',
        target: '6'
      }, {
        source: '3',
        target: '5'
      }
    ]
  };
  data = [];
  reading = {
    name: '',
    value: 0
  };
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  constructor(private _guage: GuageService) {

  }
  applyDimensions() {
    this.view = [700, 300];
  }
  onSelect(event) {
    console.log(event);
  }
  addReading() {
    this._guage.add(this.reading);
    this.reading = {
      name: '',
      value: 0
    };
  }
  ngOnInit() {
    this._guage.getData()
      .subscribe(data => {
        this.data.push(data);
        this.data = [...this.data];
      }
      );
  }
}
