import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent {
  @Input() score:number = 0;
}
