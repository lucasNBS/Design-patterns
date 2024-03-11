// Interface do visitor
interface Visitor {
  visitBank(bank: Bank): void
  visitCompany(company: Company): void
}

// Classe do visitor de mensagem
class InsuranceMessagingVisitor implements Visitor {

  public sendInsuranceMail(clients: Client[]) {
    for (let client of clients) {
      client.accept(this)
    }
  }

  public visitBank(bank: Bank): void {
    console.log("Sending e-mail about theft insurance to " + bank.getName())
  }

  public visitCompany(company: Company): void {
    console.log("Sending e-mail about employees and equipment insurance to " + company.getName())
  }
}

// Classe abstrata dos clientes
abstract class Client {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  public getName(): string {
    return this.name
  }

  public abstract accept(visitor: Visitor): void
}

// Classe do cliente tipo banco
class Bank extends Client {

  constructor(name: string) {
    super(name)
  }

  public accept(visitor: Visitor): void {
    visitor.visitBank(this)
  }
}

// Classe do cliente tipo companhia
class Company extends Client {

  constructor(name: string) {
    super(name)
  }

  public accept(visitor: Visitor): void {
    visitor.visitCompany(this)
  }
}

// Função padrão do código
function visitorMain() {
  const bank1 = new Bank("Bank 1")
  const company1 = new Company("Company 1")
  const bank2 = new Bank("Bank 2")

  const insuranceMessagingVisitor = new InsuranceMessagingVisitor()
  insuranceMessagingVisitor.sendInsuranceMail([bank1, company1, bank2])
}
visitorMain()