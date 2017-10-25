import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beverage } from './beverage-model';

@Component({
  selector: 'beverage-list',
  template: `
  <select (change)="onChange($event.target.value)">
      <option value="allBeverages">All Beverages</option>
      <option value="emptyBeverages">Empty Beverages</option>
      <option value="fullBeverages" selected="selected">Full Beverages</option>
    </select>
  <ol>
    <li  *ngFor="let currentBeverage of childBeverageList | empty:filterByEmpty"><span (click)="isSold(currentBeverage)"  [class]="priceColor(currentBeverage)">{{currentBeverage.name}}</span>
      <input *ngIf="currentBeverage.poured === true" type="checkbox" checked (click)="toggleDone(currentBeverage, false)"/>
      <input *ngIf="currentBeverage.poured === false" type="checkbox" (click)="toggleDone(currentBeverage, true)"/>
      <button class="btn btn-primary" (click)="editButtonHasBeenClicked(currentBeverage)">Edit!</button><br>
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
  filterByEmpty: string = "fullBeverages";

  onChange(optionFromMenu) {
    this.filterByEmpty = optionFromMenu;
  }

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
    if(clickedBeverage.poursLeft >= 11) {
      alert('One pour recorded.')
      clickedBeverage.poursLeft -= 1;
    } else if(clickedBeverage.poursLeft >= 1) {
      alert("This keg is running low.");
      clickedBeverage.poursLeft -= 1;
    } else {
      alert('This keg is empty.');
      clickedBeverage.poured = true;
    }
  }

  toggleDone(clickedBeverage: Beverage, setEmpty: boolean) {
   clickedBeverage.poured = setEmpty;
 }
}
