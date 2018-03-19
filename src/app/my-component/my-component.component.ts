import { Component, OnInit } from '@angular/core';

// This is the interface used to store our sample data to demostrate use of ngIf else
interface Participants {
  name: string;
  age: number;
}

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})

export class MyComponent implements OnInit {

  contestants: Participants[];
  constructor() { }

  ngOnInit() {
    // Sample data
    this.contestants = [
      { name: `Ram`, age: 21 },
      { name: `Shyam`, age: 16 },
      { name: `Anil`, age: 14 },
      { name: `Sunil`, age: 22 },
      { name: `Rahul`, age: 13 },
      { name: `Rohit`, age: 10 }
    ]
  }

}
