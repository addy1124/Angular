import { Component } from '@angular/core';
import { LoggerServiceService } from '../logger-service.service';
import { ArithemeticService } from '../arithemetic.service';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
  hasTheTextShown: boolean = false;
  setTheTextShow(){
    this.hasTheTextShown = true
  }
  hasTheTextGoOff: boolean = false;
  setTheTextToOff(){
    this.hasTheTextGoOff = true;
  }
  constructor( private loggerService: LoggerServiceService, private arithe: ArithemeticService){
    this.loggerService.logOutThisMessage('Hello i called this service from a component');
    this.loggerService.logOutThisMessage("sample");
    this.arithe.addTwoNumbers(3,6);
  }
  
  test(){
    this.loggerService.logOutThisMessage
  }

}
