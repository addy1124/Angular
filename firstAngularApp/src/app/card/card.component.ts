import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type } from 'os';
import { Interface } from 'readline';

interface personStructure{
  name: String ;
  level: number;
  age: number;
  isSerious: boolean;
}

type personStructures = {
  name: String ;
  level: number;
  age: number;
  isSerious: boolean;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() channelName = "Angular";
  @Input() channelContent = "This is a card Component";
  @Input() imageString  = "https://images.unsplash.com/photo-1724268508328-33a9caeba771?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D";
  
  number1!: number;
  number2!: number;
  result! : number;

//forms of typechecking
// 1. Any
// 2.Undefine
// 3.Interfaces
// 4.Null
// ObjectName : Type = {};

arrayOfNumber: (number |string |boolean) [] = ["1","2","3","4"]

Person: personStructure = {
  name: 'sampson',
  age: 12,
  level: 300,
  isSerious: false,
}

Persons: personStructures = {
  name: 'Agyare',
  age: 25,
  level: 300,
  isSerious: true,
}

   constructor(){
    console.log("this is a card component", this.Person.name);

   }

  ageOfStudent : number = 25;
  nameOfStudent : String = "Agare";
  isStudentsActive : boolean = true;
  addTwoNumbers(number1: number,number2: number){
    
    
    this.result = number1 + number2;

  }
}
const anotherAgeOfStudent : number = 25;
  let anotherNameOfStudent : String = "Kofi Atta";
  let isStudentserious : boolean = true;