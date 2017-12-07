import {Component, OnInit} from '@angular/core';
import {Chart} from 'angular-highcharts';
import {ChartConfigService} from '../chart.config.service';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {TimeseriesService} from '../services/data/timeseries.service';

@Component({
    selector: 'app-linechart',
    templateUrl: './linechart.component.html',
    styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {

    chart: Chart;


    constructor(private chartoptions: ChartConfigService,
                private tmData: TimeseriesService,
                public http: Http) {
        const opts = this.chartoptions.getLineOptions();
        this.chart = new Chart(opts);
        const url = 'http://app/charts/data_ohcl.json';
        this.http.get(url).map(a => a.json()).subscribe(console.log);
    }

    ngOnInit() {
    }


// ===========> controller methods methods
    optionChanged(ev) {
        const options = ev === 'time series' ?
            this.chartoptions.getTimeseriesLineOtions(this.tmData.timeseries(), this.tmData.timeseries1())
            : this.chartoptions.optionsMap[ev];

        this.chart = new Chart(options);
    }
}
