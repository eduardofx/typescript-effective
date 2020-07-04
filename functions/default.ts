const z = 100;

function addToZ(x: number, y: number) {
  return x + y + z;
}

//typed function
let myAdd: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

console.log(addToZ(1, 2));
console.log(myAdd(1, 2));
