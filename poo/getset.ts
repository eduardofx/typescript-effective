class PersonAge {
  private _age: number = 0;

  get age(): number {
    return this._age;
  }

  set age(valor: number) {
    if (valor >= 0 && valor <= 120) {
      this._age = valor;
    }
  }
}

const person = new PersonAge();
person.age = 20; //set
console.log(person.age);

person.age = -5; // idade negativa, manteve idade anterior(20)
console.log(person.age);
