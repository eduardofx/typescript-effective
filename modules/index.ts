import { ZipCodeValidator } from "./zipvalidator";

let myValidator = new ZipCodeValidator();
const ret = myValidator.isAcceptable("12345");
console.log(ret);
