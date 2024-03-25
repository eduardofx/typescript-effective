class PersonProtected {
  name: string;
  age: number;
  protected isAlive: boolean;

  constructor(name: string, age: number, isAlive: boolean) {
    this.name = name;
    this.age = age;
    this.isAlive = isAlive;
  }
}

class PersonPJ extends PersonProtected {
  cnpj: number;

  constructor(name: string, age: number, isAlive: boolean, cnpj: number) {
    super(name, age, isAlive); //ao utilizar protected, podemos acessar por classes
    this.cnpj = cnpj; //filhas e pela própria classe;
  }
}
