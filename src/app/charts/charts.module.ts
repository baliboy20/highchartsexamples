import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartsComponent} from './charts.component';
import {RouterModule} from '@angular/router';
import {ChartModule} from 'angular-highcharts';
import {ChartConfigService} from './chart.config.service';
import {LinechartComponent} from './linechart/linechart.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { TimeseriesChartComponent } from './timeseries-chart/timeseries-chart.component';
import {TimeseriesService} from './services/data/timeseries.service';


@NgModule({
    imports: [
        CommonModule,
        ChartModule,
        RouterModule.forChild([{path: 'charts', component: ChartsComponent}]),
        HttpModule,HttpClientModule,
    ],
    declarations: [
        ChartsComponent,
        LinechartComponent,
        TimeseriesChartComponent,
       ],
    providers: [ChartConfigService, TimeseriesService]
})
export class ChartsModule {
}
