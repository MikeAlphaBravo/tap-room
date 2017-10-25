import {Pipe, PipeTransform} from '@angular/core';
import {Beverage} from './beverage-model';


@Pipe({
  name: "empty",
  pure: false
})


export class EmptyPipe implements PipeTransform {
  transform(input: Beverage[], desiredEmpty) {
    var output: Beverage[] = [];
    if(desiredEmpty === "emptyBeverages") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].poured === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredEmpty === "fullBeverages") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].poured === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredEmpty === "underTenBeverages") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].poursLeft <= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredEmpty === "abvBeverages") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].poured === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
