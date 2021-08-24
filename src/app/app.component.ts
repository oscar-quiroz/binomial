import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'binomial';
  nVariables: number = 2;
  cantidad: number = 10;
  n: number = 1;
  p: number = 0.5;
  random = Math.random();
  isLoad=false;

  lista: number[] = [];

  generar() {
    this.isLoad=true;
    

    setTimeout(() => {
      this.generarNumeros();
    }, 400);
  }

  generarNumeros(){
    this.lista=[]
    let valor: number = 0;
    let x = 0;
    let random = 0;
    for (var i = 1; i < 21; i++) {
      if (i <= this.n) {
        random = Math.random();
        console.log(random)
        if (random <= this.p) {
          x= x+1;
        }
      }else{
        valor = x;
      }
      this.lista.push(valor);
    }

    this.isLoad=false
  }


  imprimir() {
    let i = 1;
    this.lista.forEach((element) => {
      console.log(i + '   ' + element);
      i++;
    });

    /**
     *   let random = Math.random()
    if(random <= 0.5){
      console.log("es menor o igual a 0,5")
    }else{
      console.log("es mayor a 0,5")
    }
     */
  }
}
