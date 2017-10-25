import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beverage } from './beverage-model';

@Component({
  selector: 'beverage-list',
  template: `
  <ol>
    <li *ngFor="let currentBeverage of childBeverageList"><span [class]="priceColor(currentBeverage)" (click)="isSold(currentBeverage)">{{currentBeverage.name}}</span> <button class="btn btn-primary" (click)="editButtonHasBeenClicked(currentBeverage)">Edit!</button><br>
    <ul>
      <li>Price: {{currentBeverage.price}}</li>
      <li>Brewery: {{currentBeverage.brand}}</li>
      <li>ABV: {{currentBeverage.alcoholContent}}</li>
    </ul>
    </li>
  </ol>
  `
})

export class BeverageListComponent {
  @Input() childBeverageList: Beverage[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(beverageToEdit: Beverage) {
    this.clickSender.emit(beverageToEdit);
  }

  priceColor(beverage){
    if (beverage.price === 7){
      return "bg-danger";
    } else if (beverage.price === 6) {
      return  "bg-warning";
    } else if (beverage.price === 5) {
      return  "bg-primary";
    } else if (beverage.price === 4) {
      return  "bg-info";
    } else {
      return "bg-success";
    }
  }

  isSold(clickedBeverage: Beverage) {
    if(clickedBeverage.poured === true) {
      alert("This beverage is poured!");
    } else {
      alert("This beverage is not poured. Better get to tapping!");
    }
  }
}
