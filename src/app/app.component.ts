import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

import { Label } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
  public barChartLabels: Label[] = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    {
      data: [
        1, 17, 107, 476, 1431, 3763, 7416, 12092, 15803, 17471, 16059, 12072,
        7534, 3673, 1504, 444, 115, 19, 2, 1,
      ],
      label: 'Series A', backgroundColor:'#0e8ad17c', hoverBackgroundColor: '#0e8ad1', 
    },
  ];

  title = 'binomial';
  nVariables: number = 2;
  cantidad: number = 10;
  n: number = 1;
  p: number = 0.5;
  random = Math.random();
  isLoad = false;

  lista: number[] = [];

  generar() {
    this.isLoad = true;

    setTimeout(() => {
      this.generarNumeros();
    }, 400);
  }

  generarNumeros() {
    this.lista = [];
    let valor: number = 0;
    let x = 0;
    let random = 0;
    for (var i = 1; i < 21; i++) {
      if (i <= this.n) {
        random = Math.random();
        console.log(random);
        if (random <= this.p) {
          x = x + 1;
        }
      } else {
        valor = x;
      }
      this.lista.push(valor);
    }
    this.isLoad = false;
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

  public randomize(): void {
   
  }
}
