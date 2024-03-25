class PersonPublic {
  name: string = "TreinaWeb";
  age: number = 12;
  isAlive: boolean = true;
}

let personPublic = new PersonPublic();
personPublic.name = "Eduardo"; //com o modificador public podemos acessar e alterar o valor da
//propriedade name fora da classe
