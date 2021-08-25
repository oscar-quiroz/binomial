import { Component } from '@angular/core';
import { Label } from 'ng2-charts';

interface Dato {
  label: Label;
  numero: string;
}

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
    let x: number = 0;
    for (var j = 0; j < this.cantidad * this.nVariables; j++) {
      x = 0;
      for (var i = 1; i <= this.n; i++) {
        if (i <= this.n) {
          x += this.bernoulli();
        }
      }
      this.lista.push(x);
    }
    this.isLoad = false;
  }

  bernoulli() {
    let random = 0;
    let x = 0;
    random = Math.random();
    x = random <= this.p ? x + 1 : x;
    return x;
  }

  calcularFrecuencias(lista) {
    var x = lista;
    console.log('frecuencias', x);
    var indices = new Array(this.labels.length); // colocar en vez de 8 el max del array "x"
    indices.fill(0);
    for (var i = 0; i < indices.length; i++) {
      for (var j = 0; j < x.length; j++) {
        if (i == x[j]) {
          indices[i] = indices[i] + 1;
        }
      }
    }
    console.log(indices);
    return indices;
  }

  obtenerLabels() {
    for (var i = 0; i <= this.n; i++) {
      this.labels.push(i + '');
    }

    console.log('labels ', this.labels);
  }

  llenarTabla() {
    this.obtenerLabels();
    this.data = this.calcularFrecuencias(this.lista);
    this.isVoid = false;
  }
}
