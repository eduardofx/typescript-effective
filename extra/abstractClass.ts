// Classe abstrata
// Classe inacabadas
abstract class Calculate {
  protected resultado: number = 0;

  abstract executeCalc(...numeros: number[]): void;

  getResultado(): number {
    return this.resultado;
  }
}

class Sum extends Calculate {
  executeCalc(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t + a);
  }
}
const c: Calculate = new Sum();
c.executeCalc(1, 2);
// espera que o getResultado esteja em Calculo, não funciona dentro do sum
console.log(c.getResultado());

const cd = new Sum();
cd.executeCalc(1, 2);
console.log(cd.getResultado());
