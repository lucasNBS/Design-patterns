/*
  STRATEGY - Behavioral Pattern

  Definir uma família de algoritmos, separá-las em classes diferentes e tornar suas instâncias intercambiáveis.

  EXEMPLO

  Considere um sistema de pagamento. Neste sistema, o usuário insere os dados de seu cartão de crédito e realiza o pagamento de algum serviço.

  Pode ser fácil implementar a lógica para um único método de pagamento, porém caso futuramente o pagamento com o PayPal também seja adicionado? A função de pagamento se tornará muito complexa com verificações pelo tipo de pagamento e as validações padrão do processo de pagar. E mais, desse modo, estará violando tanto o princípo da responsabilidade única como o do aberto/fechado.

  O padrão Strategy resolve esse tipo de problema.

  Ao invés de deixar todo o algoritmo do pagamento em uma função, criamos uma interface comum aos métodos de pagamento, que por sua vez são separados em classes diferentes.

  EXPLICAÇÃO DO CÓDIGO

  Criamos a interface da estratégia de pagamento com seus métodos padrão.

  Criamos as classes de cada estratégia de pagamento, implementando os métodos da interface de pagamento.

  Criamos a classe do sistema de pagamento, com uma de suas propriedades sendo uma instância da estratégia de pagamento.

  Finalmente, podemos instânciar o sistema de pagamento, definindo também a estratégia de pagamento, e executando-a.
*/

// Interface da estratégia de pagamento
interface PaymentStrategy {
  collectPaymentDetails(): void
  validatePaymentDetails(): boolean
  pay(amount: number): void
}

// Classe da estratégia de pagamento com cartão
class PaymentByCreditCard implements PaymentStrategy {

  public collectPaymentDetails(): void {
    console.log("Collecting credit card details")
  }

  public validatePaymentDetails(): boolean {
    console.log("Validating payment details")
    return true
  }

  public pay(amount: number): void {
    console.log("Paying " + amount + " with credit card")
  }
}

// Classe da estratégia de pagamento com PayPal
class PaymentByPayPal implements PaymentStrategy {

  public collectPaymentDetails(): void {
    console.log("Collecting PayPal account details")
  }

  public validatePaymentDetails(): boolean {
    console.log("Validating payment details")
    return true
  }

  public pay(amount: number): void {
    console.log("Paying " + amount + " with PayPal")
  }
}

// Classe do sistema de pagamento
class PaymentService {
  private total: number
  private strategy: PaymentStrategy

  constructor(total: number, strategy: PaymentStrategy) {
    this.total = total
    this.strategy = strategy
  }

  public processOrder() {
    this.strategy.collectPaymentDetails()
    if (this.strategy.validatePaymentDetails()) {
      this.strategy.pay(this.total)
    }
  }
}

// Função padrão do código
function strategyMain() {
  const paymentService1: PaymentService = new PaymentService(300, new PaymentByCreditCard())
  paymentService1.processOrder()

  const paymentService2: PaymentService = new PaymentService(300, new PaymentByPayPal())
  paymentService2.processOrder()
}
strategyMain()