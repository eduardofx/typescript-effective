import { StringValidatorInterface } from "./StringValidatorInterface";

export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidatorInterface {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
