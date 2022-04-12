import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>
        <h3>La base es: <strong>5</strong></h3>

        <button (click)="acumular(base)"> + {{base}} </button>
        
        <span> {{numero}} </span>
        
        <button (click)="acumular(- base)"> - {{base}} </button>
    `
})

export class ContadorComponent {
    
    title: string = 'Contador App';
    numero: number = 0;
    base: number = 5;

    //metodo operacion (sumar/restar)
    acumular(valor: number) {
    this.numero += valor
  }
}