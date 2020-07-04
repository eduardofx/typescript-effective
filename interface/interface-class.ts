interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  constructor(h: number, m: number) {
    console.log(this.currentTime);
    console.log(h, m);
  }
}
const clasas = new Clock(3, 2);
console.log(clasas);
