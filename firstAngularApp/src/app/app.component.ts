import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { CardComponent } from './card/card.component';
import { TextComponent } from './text/text.component';
import { FormComponent } from './form/form.component';
import { CalculatorComponent } from "./calculator/calculator.component";

type dummyData = {
  title: string,
  content: string ,
  image:""
}
type Card = {
  title: string ;
  description: string ;
  imgUrl: string; 
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FirstComponentComponent, CardComponent, TextComponent, FormComponent, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstAngularApp';
  dummyData = [
    {
    title: "Card 1",
    content: "This is card 1",
    Image:'https://plus.unsplash.com/premium_photo-1723632256384-60dd4173debf?q=80&w=1470&auto=format&      fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: "Card 2",
      content: "This is card 2",
    },
    {
      title: "Card 3",
      content: "This is card 3"
   },
   {
    title: "Card 4",
    content: "This is card 4"
  }
  // {
  //   title: "Card 5",
  //   content: "This is card 5"
  // },
  // {
  //   title: "Card 1",
  //   content: "This is card 1"
  //   },
  //   {
  //      title: "Card 2",
  //   content: "This is card 2"
  //   },
  //   {
  //     title: "Card 3",
  //  content: "This is card 3"
  //  },
  //  {
  //   title: "Card 4",
  //   content: "This is card 4"
  // },
  // {
  //   title: "Card 5",
  //   content: "This is card 5"
  // }
]
}
