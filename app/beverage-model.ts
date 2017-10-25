export class Beverage {
  public poured: boolean = false;
  public poursLeft: number = 20;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number) { }
}
