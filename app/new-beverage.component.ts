import { Component, Output, EventEmitter } from '@angular/core';
import { Beverage } from './beverage-model';

@Component({
  selector: 'new-beverage',
  template: `
    <h1>New Beverage</h1>
    <div>
      <label>Enter Beverage Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Enter Beverage Brand:</label>
      <input #newBrand>
    </div>
    <div>
      <label>Enter Beverage ABV:</label>
      <input #newABV>
    </div>
    <div>
      <label>Beverage Price:</label>
      <select #newPrice>
        <option [value]="3"> Low Price </option>
        <option [value]="4"> Medium Price </option>
        <option [value]="5"> Medium Price </option>
        <option [value]="6"> High Price </option>
        <option [value]="7"> High Price </option>
      </select>
      <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newABV.value); newName.value=''; newBrand.value=''; newABV.value=''">Add</button>
    </div>
  `
})

export class NewBeverageComponent {
  @Output() newBeverageSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, abv: number) {
    var newBeverageToAdd: Beverage = new Beverage(name, brand, price, abv);
    this.newBeverageSender.emit(newBeverageToAdd);
  }
}
