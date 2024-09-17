import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type userForm ={
  name : string,
  email: string,
  password : string,
  confirmpassword: string,
  phoneNumber: string,
  age: number,
  maleOrfemale: string,
  dateOfBirth: Date,
  reasonForRegistering:string
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  userRegistrationForm :userForm = {
    name:'',
    email:'',
    password:'',
    confirmpassword:'',
    phoneNumber: '',
    age: 0,
    maleOrfemale: '',
    dateOfBirth: new Date(),
    reasonForRegistering:''
  }
  submitForm(){
    console.log('this is what the user typed',this.userRegistrationForm)
  }
}
