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