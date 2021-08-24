import { Component } from '@angular/core';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  labels: Label[] = [];
  data: number[];
  isVoid: boolean = true;

  constructor() {}

  title = 'binomial';
  nVariables: number = 2;
  cantidad: number = 10;
  n: number = 1;
  p: number = 0.5;
  random = Math.random();
  isLoad = false;
  lista: number[] = [];

  generar() {
    this.lista = [];
    this.labels = [];
    this.isVoid = true;
    this.isLoad = true;
    setTimeout(() => {
      this.generarNumeros();
      
      this.llenarTabla();
    }, 400);
  }

  generarNumeros() {
    
    let valor: number = 0;
    let x:number = 0;
    let random:number = 0;

    for (var i = 0; i < this.cantidad * this.nVariables; i++) {
      if (i <= this.n) {
        random = Math.random();
        console.log(random);
        if (random >= this.p) {
          x = x + 1;
        }
      } else {
        valor = x;
      }
      this.lista.push(valor);
      let indice = i ;
    }

    this.isLoad = false;
  }

  calcularFrecuencias(lista) {
    var x = lista;
    var indices = new Array(this.labels.length); // colocar en vez de 8 el max del array "x"
    indices.fill(0);
    for (var i = 0; i < indices.length; i++) {
      for (var j = 0; j < x.length; j++) {
        if (i == x[j]) {
          indices[i] = indices[i] + 1;
        }
      }
    }
    console.log(indices)
  return indices;

  
}
obtenerLabels(){
  for (var i = 0; i <= this.n; i++) {
    this.labels.push(i+"");
  }

}
  llenarTabla() {
this.obtenerLabels();
    this.data = this.calcularFrecuencias(this.lista);

    this.isVoid = false;
  }
}
