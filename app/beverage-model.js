"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Beverage = (function () {
    function Beverage(name, brand, price, alcoholContent) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.alcoholContent = alcoholContent;
        this.poured = false;
        this.poursLeft = 20;
    }
    return Beverage;
}());
exports.Beverage = Beverage;
//# sourceMappingURL=beverage-model.js.map