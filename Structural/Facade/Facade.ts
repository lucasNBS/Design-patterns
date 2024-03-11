// Classe de usuário da biblioteca
class User {
  private name: string
  private balance: number

  constructor(name: string, balance: number) {
    this.name = name
    this.balance = balance
  }

  public getName(): string {
    return this.name
  }

  public withdraw(amount: number): void {
    this.balance -= amount
  }

  public deposit(amount: number): void {
    this.balance += amount
  }

  public getBalance(): number {
    return this.balance
  }
}

// Classe para a compra de criptomoedas da biblioteca
class BuyCrypto {
  public buyCurrency(amount: number, currency: string, user: User): void {
    console.log(user.getName() + " bought R$ " + amount + " in " + currency)
  }
}

// Classe facade para interagir com a biblioteca
class BuyCryptoFacade {

  public buyCryptoCurrency(amount: number, currency: string, user: User): void {
    if (user.getBalance() < amount) {
      console.log("Not enough balance")
      return
    }
    const buyCrypto: BuyCrypto = new BuyCrypto()
    user.withdraw(amount)
    buyCrypto.buyCurrency(amount, currency, user)
  }
}

// Função padrão do código
function facadeMain() {
  const user = new User("JohnDoe", 2000)
  const buyCrypto: BuyCryptoFacade = new BuyCryptoFacade()
  buyCrypto.buyCryptoCurrency(1000, 'BTC', user)
}
facadeMain()