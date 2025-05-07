import Car from './car.js';

class CarFlys extends Car {
  constructor(model, year) {
    super(model, year);
    this.canFly = true;
  }

  toString() {
    return `${super.toString()} I can Fly`;
  }
}

export default CarFlys;
