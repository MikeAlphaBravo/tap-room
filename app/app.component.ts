import { Component } from '@angular/core';
import { Beverage } from './beverage-model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room Keg Tracker</h1>
    <beverage-list [childBeverageList]="masterBeverageList" (clickSender)="editBeverage($event)"></beverage-list>
    <hr>
    <edit-beverage [childSelectedBeverage]="selectedBeverage" (doneButtonClickedSender)="finishedEditing()"></edit-beverage>
    <hr>
    <new-beverage (newBeverageSender)="addBeverage($event)"></new-beverage>
  </div>

  `
})

export class AppComponent {
  masterBeverageList: Beverage[] = [
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

  finishedEditing() {
    this.selectedBeverage = null;
  }

  addBeverage(newBeverageFromChild: Beverage) {
    this.masterBeverageList.push(newBeverageFromChild);
  }
}
