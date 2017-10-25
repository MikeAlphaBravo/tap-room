"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var beverage_model_1 = require("./beverage-model");
var AppComponent = (function () {
    function AppComponent() {
        this.masterBeverageList = [
            new beverage_model_1.Beverage('Drop Top Ale', 'Bend Beverages', 5, 3.5),
            new beverage_model_1.Beverage('Sunny Shine Shillings', 'Oregon or Egon', 4, 3.0),
            new beverage_model_1.Beverage('Real Hard Stuff', 'Hammer Ales', 6, 5.0),
            new beverage_model_1.Beverage('Citrus Cilliness', 'Light Beer Inc.', 4, 2.5),
            new beverage_model_1.Beverage('Hold Onto Your Hats', 'Get it Co.', 7, 8.3),
            new beverage_model_1.Beverage('Urine Town', 'Water Beer', 3, 1.8)
        ];
        this.selectedBeverage = null;
    }
    AppComponent.prototype.editBeverage = function (clickedBeverage) {
        this.selectedBeverage = clickedBeverage;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedBeverage = null;
    };
    AppComponent.prototype.addBeverage = function (newBeverageFromChild) {
        this.masterBeverageList.push(newBeverageFromChild);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n  <div class=\"container\">\n    <h1>Tap Room Keg Tracker</h1>\n    <beverage-list [childBeverageList]=\"masterBeverageList\" (clickSender)=\"editBeverage($event)\"></beverage-list>\n    <hr>\n    <edit-beverage [childSelectedBeverage]=\"selectedBeverage\" (doneButtonClickedSender)=\"finishedEditing()\"></edit-beverage>\n    <hr>\n    <new-beverage (newBeverageSender)=\"addBeverage($event)\"></new-beverage>\n  </div>\n\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map