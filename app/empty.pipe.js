"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmptyPipe = (function () {
    function EmptyPipe() {
    }
    EmptyPipe.prototype.transform = function (input, desiredEmpty) {
        var output = [];
        if (desiredEmpty === "emptyBeverages") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].poured === true) {
                    output.push(input[i]);
                }
            }
            return output;
        }
        else if (desiredEmpty === "fullBeverages") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].poured === false) {
                    output.push(input[i]);
                }
            }
            return output;
        }
        else if (desiredEmpty === "underTenBeverages") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].poursLeft <= 10) {
                    output.push(input[i]);
                }
            }
            return output;
        }
        else if (desiredEmpty === "abvBeverages") {
            output = input.sort(function (a, b) {
                return b.alcoholContent - a.alcoholContent;
            });
            return output;
        }
        else {
            return input;
        }
    };
    return EmptyPipe;
}());
EmptyPipe = __decorate([
    core_1.Pipe({
        name: "empty",
        pure: false
    })
], EmptyPipe);
exports.EmptyPipe = EmptyPipe;
//# sourceMappingURL=empty.pipe.js.map