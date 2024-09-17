import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithemeticService {

  constructor() { }
  addTwoNumbers(num1: number, num2:number){
    console.log(num1 + num2)
  }
}
