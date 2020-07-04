import multiplyDefault from "./multiplyDefault"; // não tem chaves default
import { ZipCodeValidator } from "./ZipValidator"; // com chaves

let myValidator = new ZipCodeValidator();
const ret = myValidator.isAcceptable("12345");
console.log(ret);

const multiply = multiplyDefault(2, 4);
console.log(multiply);
