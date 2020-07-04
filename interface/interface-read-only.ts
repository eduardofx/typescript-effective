interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
//let p1 = <Point>{ x: 10, y: 20 };

//p1.x = 5; // error!
console.log(p1);
