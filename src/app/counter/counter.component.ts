import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count = 0;
  numberColor = 'white';
  constructor() { }

  ngOnInit(): void {
  }
  increaseCount(): void {
    this.count++;
    if (this.count > 10) {
      this.numberColor = 'red';
    }
    if (this.count === 0) {
      this.numberColor = 'white';
    }
  }
  decreaseCount(): void {
    this.count--;
    if (this.count < 0) {
      this.numberColor = 'green';
    }
    if (this.count === 10) {
      this.numberColor = 'white';
    }
  }
  resetCount(): void{
    this.count = 0;
    this.numberColor = 'white';
  }
}
