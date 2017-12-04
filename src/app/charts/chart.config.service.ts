import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ChartConfigService {
    optionsMap = {
        barchart: this.getBarOPtions(),
        linechart: this.getLineOptions(),
        plotchart: this.getPlotChart(),
    };

    constructor(@Inject('HttpClient') private  http: HttpClient) {
        const url = "";
        this.http.get(url).subscribe(console.log);
    }

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

    getCandlestickData() {

    }

}
