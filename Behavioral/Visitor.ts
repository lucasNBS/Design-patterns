/*
  VISITOR - Behavioral Pattern

  Separar um algoritmo ou função do objeto que o opera.

  EXEMPLO

  Considere um sistema de seguro que possui vários tipos de clientes, como bancos e companhias.

  Considere agora, que este sistema implementará uma nova funcionalidade para enviar e-mails a todos os clientes, sendo que o conteúdo do e-mail será definido pelo tipo de cliente. Uma forma de implementar isso é criar o método de envio dentro de cada tipo de cliente, porém isso viola o princípio do aberto/fechado, uma vez que modificações no método de uma classe pode ter de afetar as demais.

  O padrão Visitor resolve esse tipo de problema.

  Ao invés de definir o método de envio de e-mail na classe do cliente, uma classe própria para essa funcionalidade é criada e ligada a cada tipo de cliente.

  EXPLICAÇÃO DO CÓDIGO

  Criamos a interface do visitor, com os métodos para enviar o e-mail para cada tipo de cliente.

  Criamos a classe do visitor com a implementação dos métodos de envio de e-mail e um método para enviar e-mail para todos os clientes.

  Criamos a classe abstrata do cliente. Note como um dos métodos padrão que recebe um visitor.

  Criamos a classe de cada tipo de cliente, implementando seus métodos. Perceba como o método que recebe o visitor executa o método para envair o e-mail correto.

  Por fim, podemos instanciar os clientes, passá-los a uma instância do visitor e executar o método de envio de e-mail. Dessa forma, cada cliente receberá o e-mail correto.
*/

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