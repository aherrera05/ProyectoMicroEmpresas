import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

interface IBisuteria {
  name: string,
  description: string,
  price: number,
  highlight?: boolean,
}

@Component({
  selector: 'app-bisuteria',
  templateUrl: './bisuteria.component.html',
  styleUrls: ['./bisuteria.component.css']
})
export class BisuteriaComponent  {
  query: string;
  bisuteria: IBisuteria[];
  constructor() { 

   this.query = 'Anillos';
    this.bisuteria = [
      {
        "name":"anillos",
        "price":1500,
        "description":"Collar hecho de material reciclado"
        
      },
      {
        "name":"aretes",
        "price":2500,
        "description":"Aretes de acero"
      },
      { "name":"pulsera",
      "price":2500,
      "description":"Pulsera de acero inoxidable"
      },
      {
        "name":"aretes1",
        "price":5000,
        "description":"Tres pares de aretes de acero"
      },
      {
        "name":"pulsera",
        "price":2500,
        "description":"Pulsera de piedritas finas"
      },
      {
        "name":"anillos1",
        "price":4500,
        "description":"Juego de anillos "
      },
      {
        "name":"pie",
        "price":5000,
        "description":"Pulsera Pie"
      },
     
    ]  
  }

  showBisuteria(bisuteria: IBisuteria) {
    this.query = bisuteria.name;
    bisuteria.highlight = !bisuteria.highlight;
  }  
}
