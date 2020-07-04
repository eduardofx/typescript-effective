//As asserções de tipo são uma maneira de dizer ao compilador "confie em mim, eu sei o que estou fazendo".
//Uma asserção de tipo é como uma conversão de tipo em outros

let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

console.log(someValue);
console.log(strLength);
