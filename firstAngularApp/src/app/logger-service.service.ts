import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'//this means that the service can be assessed by the entire application
})
export class LoggerServiceService {

  constructor() { }

  logOutThisMessage(message: string ){
    console.log('this is the loggerservice working and yiur message is ', message);
  }
  
  alertThisMessage(message: string){
    this.logOutThisMessage("this is the message");
  }
}
