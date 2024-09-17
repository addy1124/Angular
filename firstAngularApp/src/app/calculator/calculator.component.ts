import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  constructor(private Calc: CalculatorService){
  //   this.Calc.add(1,5);
  //   this.Calc.subtract(5,2)

  }

  getWhatIsClick(value:number|string){
    //console.log(value)
    const display = document.getElementById("disp");
    if(display){
      display.innerHTML =   display.innerHTML + value.toString();
    }

    if(value == '='){
      let value = display?.innerHTML;
      console.log(value);
      let array = value?.split("+");
      console.log(array);
    }
    
  }

}
