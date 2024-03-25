class PersonReadOnly {
  name: string = "TreinaWeb";
  age: number = 12;
  readonly isAlive: boolean = true;
}

let personR = new PersonReadOnly();
console.log(personR.isAlive); //a propriedade estaVivo será exibida com sucesso.
//personR.isAlive = false; //Mas não podemos alterar essa propriedade.
