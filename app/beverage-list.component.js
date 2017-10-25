"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BeverageListComponent = (function () {
    function BeverageListComponent() {
        this.clickSender = new core_1.EventEmitter();
        this.filterByEmpty = "fullBeverages";
    }
    BeverageListComponent.prototype.onChange = function (optionFromMenu) {
        this.filterByEmpty = optionFromMenu;
    };
    BeverageListComponent.prototype.editButtonHasBeenClicked = function (beverageToEdit) {
        this.clickSender.emit(beverageToEdit);
    };
    BeverageListComponent.prototype.priceColor = function (beverage) {
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
    BeverageListComponent.prototype.isSold = function (clickedBeverage) {
        if (clickedBeverage.poursLeft >= 11) {
            alert('One pour recorded.');
            clickedBeverage.poursLeft -= 1;
        }
        else if (clickedBeverage.poursLeft >= 1) {
            alert("This keg is running low.");
            clickedBeverage.poursLeft -= 1;
        }
        else {
            alert('This keg is empty.');
            clickedBeverage.poured = true;
        }
    };
    BeverageListComponent.prototype.toggleDone = function (clickedBeverage, setEmpty) {
        clickedBeverage.poured = setEmpty;
    };
    return BeverageListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], BeverageListComponent.prototype, "childBeverageList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BeverageListComponent.prototype, "clickSender", void 0);
BeverageListComponent = __decorate([
    core_1.Component({
        selector: 'beverage-list',
        template: "\n  <select (change)=\"onChange($event.target.value)\">\n      <option value=\"allBeverages\">All Beverages</option>\n      <option value=\"emptyBeverages\">Empty Beverages</option>\n      <option value=\"fullBeverages\" selected=\"selected\">Full Beverages</option>\n    </select>\n  <ol>\n    <li  *ngFor=\"let currentBeverage of childBeverageList | empty:filterByEmpty\"><span (click)=\"isSold(currentBeverage)\"  [class]=\"priceColor(currentBeverage)\">{{currentBeverage.name}}</span>\n      <input *ngIf=\"currentBeverage.poured === true\" type=\"checkbox\" checked (click)=\"toggleDone(currentBeverage, false)\"/>\n      <input *ngIf=\"currentBeverage.poured === false\" type=\"checkbox\" (click)=\"toggleDone(currentBeverage, true)\"/>\n      <button class=\"btn btn-primary\" (click)=\"editButtonHasBeenClicked(currentBeverage)\">Edit!</button><br>\n      <ul>\n        <li>Price: {{currentBeverage.price}}</li>\n        <li>Brewery: {{currentBeverage.brand}}</li>\n        <li>ABV: {{currentBeverage.alcoholContent}}</li>\n      </ul>\n    </li>\n  </ol>\n  "
    })
], BeverageListComponent);
exports.BeverageListComponent = BeverageListComponent;
//# sourceMappingURL=beverage-list.component.js.map