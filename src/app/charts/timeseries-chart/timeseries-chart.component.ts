import { Component, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts';
import {TimeseriesService} from '../services/data/timeseries.service';
import {ChartConfigService} from '../chart.config.service';
 

@Component({
  selector: 'app-timeseries-chart',
  templateUrl: './timeseries-chart.component.html',
  styleUrls: ['./timeseries-chart.component.scss']
})
export class TimeseriesChartComponent implements OnInit {

  chart: Chart;
  constructor(public data: TimeseriesService, private  config: ChartConfigService) { }

  ngOnInit() {
    const config = this.config.getTimeseriesLineOtions(this.data.timeseries(), this.data.timeseries1())
    this.chart = new Chart(config);
  }

}
