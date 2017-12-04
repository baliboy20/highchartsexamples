import {Component, OnInit} from '@angular/core';
import {Chart} from 'angular-highcharts';
import {ChartConfigService} from '../chart.config.service';

@Component({
    selector: 'app-linechart',
    templateUrl: './linechart.component.html',
    styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {

    


    constructor(private chartoptions: ChartConfigService) {
        const opts = this.chartoptions.getLineOptions();
        this.chart = new Chart(opts);
    }

    ngOnInit() {
    }


// view methods
    optionChanged(ev) {
        const Options: op;
        console.log('event clicked', this.chartoptions.optionsMap[ev]);
        this.chart = new Chart( this.chartoptions.optionsMap[ev]);
    }
}
