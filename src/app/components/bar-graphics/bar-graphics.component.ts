import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-graphics',
  templateUrl: './bar-graphics.component.html',
  styleUrls: ['./bar-graphics.component.css'],
})
export class BarGraphicsComponent implements OnInit {
  @Input() labels: Label[] = [];
  @Input() data: number[] = [];

  
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  
  public barChartLabels: Label[] = [];
  //['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [];


  constructor() {}

  ngOnInit(): void {
    this.barChartLabels = this.labels;
    this.barChartData = [
      {
        data: this.data,
        label: 'Frecuencias',
        backgroundColor: '#0e8ad17c',
        hoverBackgroundColor: '#0e8ad1',
      },
    ]
  }

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {}
}
