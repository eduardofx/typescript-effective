class Wallet {
  constructor(private currentBalance: number) {}
  // protected - acessível apenas dentro da classe Carros
  protected executeTransaction(delta: number): number {
    const calc = this.currentBalance + delta;
    if (calc < 0) {
      return this.currentBalance;
    }
    this.currentBalance = calc;
    return this.currentBalance;
  }
  public deposit(val: number): number {
    return this.executeTransaction(val);
  }
  public withdraw(val: number): number {
    const format = val < 0 ? val : val * -1;
    return this.executeTransaction(format);
  }
}
const transaction = new Wallet(40);
transaction.deposit(20);
transaction.withdraw(50);
console.log(transaction);
