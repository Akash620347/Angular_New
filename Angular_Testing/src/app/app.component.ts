import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular_Learning';
  rNumber:Number = 0;
  onClick(){
    this.rNumber = Math.floor(Math.random() * 10);
    console.log("Random number is: ", this.rNumber)
  }

  responseCard:any;

  receiveResponse(data:any){
    this.responseCard = data;
    console.log("API response", this.responseCard);
  }
  
}
