import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room Keg Tracker</h1>
    <ol>
      <li *ngFor="let beverage of beverages"><span [class]="priceColor(beverage)" (click)="isSold(beverage)">{{beverage.name}}</span> <button class="btn btn-primary" (click)="editBeverage(beverage)">Edit!</button><br>
      <ul>
        <li>Price: {{beverage.price}}</li>
        <li>Brewery: {{beverage.brand}}</li>
        <li>ABV: {{beverage.alcoholContent}}</li>
      </ul>
      </li>
    </ol>
    <hr>
    <div *ngIf="selectedBeverage">
      <h3>{{selectedBeverage.name}}</h3>
      <p>Beverage Poured? {{selectedBeverage.poured}}</p>
      <h3>Edit Beverage</h3>
      <label>Enter Beverage Name:</label>
      <input type="text" [(ngModel)]="selectedBeverage.name">
      <label>Enter Beverage Price Bracket (1-3):</label>
      <br>
      <input type="radio" [(ngModel)]="selectedBeverage.price" [value]="3">3 (Low Cost)<br>
      <input type="radio" [(ngModel)]="selectedBeverage.price" [value]="4">4 (Medium Cost)<br>
      <input type="radio" [(ngModel)]="selectedBeverage.price" [value]="5">5 (Medium Cost)<br>
      <input type="radio" [(ngModel)]="selectedBeverage.price" [value]="6">6 (High Cost)<br>
      <input type="radio" [(ngModel)]="selectedBeverage.price" [value]="7">7 (High Cost)
      <hr>
      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>

  `
})

export class AppComponent {
  beverages: Beverage[] = [
    new Beverage('Drop Top Ale', 'Bend Beverages', 5, 3.5),
    new Beverage('Sunny Shine Shillings', 'Oregon or Egon', 4, 3.0),
    new Beverage('Real Hard Stuff', 'Hammer Ales', 6, 5.0),
    new Beverage('Citrus Cilliness', 'Light Beer Inc.', 4, 2.5),
    new Beverage('Hold Onto Your Hats', 'Get it Co.', 7, 8.3),
    new Beverage('Urine Town', 'Water Beer', 3, 1.8)
  ];

  selectedBeverage: Beverage = null;

  editBeverage(clickedBeverage) {
    this.selectedBeverage = clickedBeverage;
  }

  isSold(clickedBeverage: Beverage) {
    if(clickedBeverage.poured === true) {
      alert("This beverage is poured!");
    } else {
      alert("This beverage is not poured. Better get to tapping!");
    }
  }

  priceColor(beverage){
   if (beverage.price === 7){
     return "bg-danger";
   } else if (beverage.price === 6) {
     return  "bg-danger";
   } else if (beverage.price === 5) {
     return  "bg-warning";
   } else if (beverage.price === 4) {
     return  "bg-warning";
   } else {
     return "bg-info";
   }
 }

 finishedEditing() {
    this.selectedBeverage = null;
  }
}
export class Beverage {
  public poured: boolean = false;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number) { }
}
