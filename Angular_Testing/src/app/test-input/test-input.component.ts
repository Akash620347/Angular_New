import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrl: './test-input.component.css'
})
export class TestInputComponent {

  constructor(private http: HttpClient){}

  @Input() listOfItems:any;

  @Output() apiResponse = new EventEmitter<any>();

  url:any = 'https://api.thecatapi.com/v1/images/search';

  requestApi(){
    this.http.get(this.url).subscribe((res)=>{
      this.apiResponse.emit(res);
    })
  }
  
} 
