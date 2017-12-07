import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as Highcharts from 'highcharts';
import {Timeseries} from './services/data/timeseries.service';

@Injectable()
export class ChartConfigService {
    optionsMap = {
        barchart: this.getBarOPtions(),
        linechart: this.getLineOptions(),
        plotchart: this.getPlotChart(),
    };

    // constructor(@Inject('HttpClient') private  http: HttpClient) {
    //     const url = "";
    //     this.http.get(url).subscribe(console.log);
    // }

    getBarOPtions() {
        return {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Fruit Consumption'
            },
            xAxis: {
                categories: ['Apples', 'Bananas', 'Oranges']
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: [{
                name: 'Jane',
                data: [1, 0, 4]
            }, {
                name: 'John',
                data: [5, 7, 3]
            }]
        };
    }

    getLineOptions() {
        return {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Linechart'
            },
            credits: {
                enabled: true
            },
            series: [{
                name: 'Line 1',
                data: [1, 2, 3]
            },
                {
                    name: 'Shocker',
                    data: [10, 20, 30]
                }],
            allowPointSelect: true
        };
    }

    getPlotChart() {
        return {
            chart: {
                zoomType: 'x'
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                        // stops: [
                        //     [0, Highcharts.getOptions().colors[0]],
                        //     [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        // ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null,
                    allowPointSelect: true
                }
            }
        };
    }

    getTimeseriesLineOtions(d: Timeseries, d1: Timeseries) {

        return {
            chart: {
                zoomType: 'x',
                type: 'line'
            },
            title: {
                text: 'USD to EUR exchange rate over time'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime',
                title: 'Huffington Post'
            },
            yAxis: {
                title: {
                    text: 'Exchange rate'
                }
            },
            legend: {
                enabled: true
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[1]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 8
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'USD to EUR',
                data: d
            },
                {
                    type: 'area',
                    name: 'USD to ZZZ',
                    data: d1
                }
            ]
        };

    }

}
