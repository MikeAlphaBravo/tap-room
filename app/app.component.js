"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.beverages = [
            new Beverage('Drop Top Ale', 'Bend Beverages', 5, 3.5),
            new Beverage('Sunny Shine Shillings', 'Oregon or Egon', 4, 3.0),
            new Beverage('Real Hard Stuff', 'Hammer Ales', 6, 5.0),
            new Beverage('Citrus Cilliness', 'Light Beer Inc.', 4, 2.5),
            new Beverage('Hold Onto Your Hats', 'Get it Co.', 7, 8.3),
            new Beverage('Urine Town', 'Water Beer', 3, 1.8)
        ];
        this.selectedBeverage = null;
    }
    AppComponent.prototype.editBeverage = function (clickedBeverage) {
        this.selectedBeverage = clickedBeverage;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedBeverage = null;
    };
    AppComponent.prototype.isSold = function (clickedBeverage) {
        if (clickedBeverage.poured === true) {
            alert("This beverage is poured!");
        }
        else {
            alert("This beverage is not poured. Better get to tapping!");
        }
    };
    AppComponent.prototype.priceColor = function (beverage) {
        if (beverage.price === 7) {
            return "bg-danger";
        }
        else if (beverage.price === 6) {
            return "bg-warning";
        }
        else if (beverage.price === 5) {
            return "bg-primary";
        }
        else if (beverage.price === 4) {
            return "bg-info";
        }
        else {
            return "bg-success";
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n  <div class=\"container\">\n    <h1>Tap Room Keg Tracker</h1>\n    <ol>\n      <li *ngFor=\"let beverage of beverages\"><span [class]=\"priceColor(beverage)\" (click)=\"isSold(beverage)\">{{beverage.name}}</span> <button class=\"btn btn-primary\" (click)=\"editBeverage(beverage)\">Edit!</button><br>\n      <ul>\n        <li>Price: {{beverage.price}}</li>\n        <li>Brewery: {{beverage.brand}}</li>\n        <li>ABV: {{beverage.alcoholContent}}</li>\n      </ul>\n      </li>\n    </ol>\n    <hr>\n    <div *ngIf=\"selectedBeverage\">\n      <h3>{{selectedBeverage.name}}</h3>\n      <p>Beverage Poured? {{selectedBeverage.poured}}</p>\n      <h3>Edit Beverage</h3>\n      <label>Enter Beverage Name:</label>\n      <input type=\"text\" [(ngModel)]=\"selectedBeverage.name\">\n      <label>Enter Beverage Price Bracket (1-3):</label>\n      <br>\n      <input type=\"radio\" [(ngModel)]=\"selectedBeverage.price\" [value]=\"3\">3 (Low Cost)<br>\n      <input type=\"radio\" [(ngModel)]=\"selectedBeverage.price\" [value]=\"4\">4 (Medium Cost)<br>\n      <input type=\"radio\" [(ngModel)]=\"selectedBeverage.price\" [value]=\"5\">5 (Medium Cost)<br>\n      <input type=\"radio\" [(ngModel)]=\"selectedBeverage.price\" [value]=\"6\">6 (High Cost)<br>\n      <input type=\"radio\" [(ngModel)]=\"selectedBeverage.price\" [value]=\"7\">7 (High Cost)\n      <hr>\n      <button (click)=\"finishedEditing()\">Done</button>\n    </div>\n  </div>\n\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
var Beverage = (function () {
    function Beverage(name, brand, price, alcoholContent) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.alcoholContent = alcoholContent;
        this.poured = false;
    }
    return Beverage;
}());
exports.Beverage = Beverage;
//# sourceMappingURL=app.component.js.map