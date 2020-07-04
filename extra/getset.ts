class Pessoa {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
    if (valor >= 0 && valor <= 120) {
      this._idade = valor;
    }
  }
}

const pessoa1 = new Pessoa();
pessoa1.idade = 20;
console.log(pessoa1.idade);

pessoa1.idade = -5; // idade negativa, manteve idade anterior(20)
console.log(pessoa1.idade);
