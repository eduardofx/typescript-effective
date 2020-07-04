interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

const myStr: string = myArray[0];
console.log(myStr);
