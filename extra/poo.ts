class Car {
  private currentSpeed: number = 0;

  constructor(
    public brand: string,
    public model: string,
    private MaximumSpeed: number = 200
  ) {}

  // protected - acessível apenas dentro da classe Carros
  protected changeSpeed(delta: number): number {
    //desafio
    const newSpeed = this.currentSpeed + delta;

    if (newSpeed >= 0 && newSpeed <= this.MaximumSpeed) {
      this.currentSpeed = newSpeed;
    } else {
      this.currentSpeed = delta > 0 ? this.MaximumSpeed : 0;
    }

    return this.currentSpeed;
  }

  public accelerate(): number {
    return this.changeSpeed(5);
  }

  public brake(): number {
    return this.changeSpeed(-5);
  }
}

const myObjCar = new Car("Hyundai", "HB20", 100);
myObjCar.accelerate();
myObjCar.accelerate();
myObjCar.accelerate();
myObjCar.brake();
console.log(myObjCar);
