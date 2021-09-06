import { DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



  

interface IBisuteria {
  id:number,
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
  precio: number;
  query: string;
  bisuteria: IBisuteria[];
  constructor() { 

   this.query = 'Anillos';
   this.precio = 1500
    this.bisuteria = [
      {"id":1,
        "name":"anillos",
        "price":1500,
        "description":"Trío de anillos de acero"
        
      },
      {"id":2,
        "name":"aretes",
        "price":2500,
        "description":"Aretes de acero"
      },
      { "id":3,
        "name":"pulsera",
      "price":2500,
      "description":"Pulsera de acero inoxidable"
      },
      {"id":4,
        "name":"aretes1",
        "price":5000,
        "description":"Aretes de acero"
      },
      
      {"id":5,
        "name":"anillos1",
        "price":4500,
        "description":"Juego de anillos "
      },
      {"id":6,
        "name":"pie",
        "price":5000,
        "description":"Pulsera Pie"
      },
     
    ];

  
 
     
   
  }

  showBisuteria(bisuteria: IBisuteria) {
    
     
      this.query = bisuteria.name;
    this.precio = bisuteria.price;
    bisuteria.highlight = !bisuteria.highlight;
    const nombre = document.querySelector('nombre');
    const precio = document.querySelector('precio');
  }
 
}

  
    
  
  
