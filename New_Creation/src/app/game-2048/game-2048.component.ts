import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-game-2048',
  templateUrl: './game-2048.component.html',
  styleUrl: './game-2048.component.css',
  animations:[
    trigger('numberAnimation',[
      transition(':enter',[
        style({transform:'scale(0.2)'}),
        animate('600ms ease-out', style({transform:'scale(1)'}))
      ]),
      // transition(':leave', [
      //   animate('300ms ease-out', style({ opacity: 0, transform: 'scale(0.5)' }))
      // ])
    ])
  ]
})
export class Game2048Component implements OnInit {
  score: number = 0;
  grid: any[][] = [];
  constructor() {}

  ngOnInit(): void {
    this.initializeBoard();
  }
  // to show grid
  initializeBoard(): void {
    for (let i = 0; i < 4; i++) {
      this.grid[i] = [];
      for (let j = 0; j < 4; j++) {
        this.grid[i][j] = [];
      }
    }
    this.positionOfTwo();
  }
  // to get the two 2's on the screen at random position
  position: number[][] = [];
  positionOfTwo(): void {
    while (this.position.length < 2) {
      let row = Math.floor(Math.random() * 4);
      let column = Math.floor(Math.random() * 4);
      if(!this.position.some(pos=> pos[0] === row && pos[1] === column )){
        this.position.push([row, column]);
      }
    }
    this.position.forEach(pos=> this.grid[pos[0]][pos[1]] = 2)
  }
  
}
