/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

// Some samples to try
let strings = ["Hello", "87020200", "101"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator } = {};
validators["ZipCode"] = new Validation.ZipCodeValidator();
validators["Apenas Letras"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
  for (let name in validators) {
    console.log(
      `"${s}" - ${
        validators[name].isAcceptable(s) ? "Combinou" : "Não combinou"
      } - ${name}`
    );
  }
}
