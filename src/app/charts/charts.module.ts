import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartsComponent} from './charts.component';
import {RouterModule} from '@angular/router';
import {ChartModule} from 'angular-highcharts';
import {ChartConfigService} from './chart.config.service';
import {LinechartComponent} from './linechart/linechart.component';
import {HttpClient} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        ChartModule,
        RouterModule.forChild([{path: 'charts', component: ChartsComponent}])
    ],
    declarations: [
        ChartsComponent,
        LinechartComponent,
        HttpClient,
    ],
    providers: [ChartConfigService]
})
export class ChartsModule {
}
