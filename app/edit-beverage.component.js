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
var beverage_model_1 = require("./beverage-model");
var EditBeverageComponent = (function () {
    function EditBeverageComponent() {
        this.doneButtonClickedSender = new core_1.EventEmitter;
    }
    EditBeverageComponent.prototype.doneButtonClicked = function () {
        this.doneButtonClickedSender.emit();
    };
    return EditBeverageComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", beverage_model_1.Beverage)
], EditBeverageComponent.prototype, "childSelectedBeverage", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditBeverageComponent.prototype, "doneButtonClickedSender", void 0);
EditBeverageComponent = __decorate([
    core_1.Component({
        selector: 'edit-beverage',
        template: "\n  <div *ngIf=\"childSelectedBeverage\">\n    <h3>{{childSelectedBeverage.name}}</h3>\n    <p>Beverage Poured? {{childSelectedBeverage.poured}}</p>\n    <h3>Edit Beverage</h3>\n    <label>Enter Beverage Name:</label>\n    <input type=\"text\" [(ngModel)]=\"childSelectedBeverage.name\">\n    <br>\n    <label>Enter Beverage Brewery:</label>\n    <input type=\"text\" [(ngModel)]=\"childSelectedBeverage.brand\">\n    <br>\n    <label>Enter Beverage ABV:</label>\n    <input type=\"text\" [(ngModel)]=\"childSelectedBeverage.alcoholContent\">\n    <br>\n    <label>Enter Beverage Price Bracket (1-3):</label>\n    <br>\n    <input type=\"radio\" [(ngModel)]=\"childSelectedBeverage.price\" [value]=\"3\">3 (Low Cost)<br>\n    <input type=\"radio\" [(ngModel)]=\"childSelectedBeverage.price\" [value]=\"4\">4 (Medium Cost)<br>\n    <input type=\"radio\" [(ngModel)]=\"childSelectedBeverage.price\" [value]=\"5\">5 (Medium Cost)<br>\n    <input type=\"radio\" [(ngModel)]=\"childSelectedBeverage.price\" [value]=\"6\">6 (High Cost)<br>\n    <input type=\"radio\" [(ngModel)]=\"childSelectedBeverage.price\" [value]=\"7\">7 (High Cost)\n    <hr>\n    <button (click)=\"doneButtonClicked()\">Done</button>\n  </div>\n  "
    })
], EditBeverageComponent);
exports.EditBeverageComponent = EditBeverageComponent;
//# sourceMappingURL=edit-beverage.component.js.map