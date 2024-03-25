import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-2048',
  templateUrl: './game-2048.component.html',
  styleUrl: './game-2048.component.css'
})
export class Game2048Component implements OnInit {
  score: number = 0;
  grid: number[][] = [];
  constructor() { };

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
  }
}
