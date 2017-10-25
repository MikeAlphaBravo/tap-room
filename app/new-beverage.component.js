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
var NewBeverageComponent = (function () {
    function NewBeverageComponent() {
        this.newBeverageSender = new core_1.EventEmitter();
    }
    NewBeverageComponent.prototype.submitForm = function (name, brand, price, abv) {
        var newBeverageToAdd = new beverage_model_1.Beverage(name, brand, price, abv);
        this.newBeverageSender.emit(newBeverageToAdd);
    };
    return NewBeverageComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NewBeverageComponent.prototype, "newBeverageSender", void 0);
NewBeverageComponent = __decorate([
    core_1.Component({
        selector: 'new-beverage',
        template: "\n    <h1>New Beverage</h1>\n    <div>\n      <label>Enter Beverage Name:</label>\n      <input #newName>\n    </div>\n    <div>\n      <label>Enter Beverage Brand:</label>\n      <input #newBrand>\n    </div>\n    <div>\n      <label>Enter Beverage ABV:</label>\n      <input #newABV>\n    </div>\n    <div>\n      <label>Beverage Price:</label>\n      <select #newPrice>\n        <option [value]=\"3\"> Low Price </option>\n        <option [value]=\"4\"> Medium Price </option>\n        <option [value]=\"5\"> Medium Price </option>\n        <option [value]=\"6\"> High Price </option>\n        <option [value]=\"7\"> High Price </option>\n      </select>\n      <button (click)=\"submitForm(newName.value, newBrand.value, newPrice.value, newABV.value); newName.value=''; newBrand.value=''; newABV.value=''\">Add</button>\n    </div>\n  "
    })
], NewBeverageComponent);
exports.NewBeverageComponent = NewBeverageComponent;
//# sourceMappingURL=new-beverage.component.js.map