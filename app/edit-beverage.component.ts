import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beverage } from './beverage-model';

@Component({
  selector: 'edit-beverage',
  template: `
  <div *ngIf="childSelectedBeverage">
    <h3>{{childSelectedBeverage.name}}</h3>
    <p>Beverage Poured? {{childSelectedBeverage.poured}}</p>
    <h3>Edit Beverage</h3>
    <label>Enter Beverage Name:</label>
    <input type="text" [(ngModel)]="childSelectedBeverage.name">
    <label>Enter Beverage Price Bracket (1-3):</label>
    <br>
    <input type="radio" [(ngModel)]="childSelectedBeverage.price" [value]="3">3 (Low Cost)<br>
    <input type="radio" [(ngModel)]="childSelectedBeverage.price" [value]="4">4 (Medium Cost)<br>
    <input type="radio" [(ngModel)]="childSelectedBeverage.price" [value]="5">5 (Medium Cost)<br>
    <input type="radio" [(ngModel)]="childSelectedBeverage.price" [value]="6">6 (High Cost)<br>
    <input type="radio" [(ngModel)]="childSelectedBeverage.price" [value]="7">7 (High Cost)
    <hr>
    <button (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditBeverageComponent {
  @Input() childSelectedBeverage: Beverage;
  @Output() doneButtonClickedSender = new EventEmitter;

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
