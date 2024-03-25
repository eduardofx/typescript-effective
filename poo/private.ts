class PersonPrivate {
  private name: string = "Eduardo";
  age: number = 12;
  isAlive: boolean = true;
}

let pessoa = new PersonPrivate();
//pessoa.name = "Outro"; //Private não podemos mais acessar desta forma
