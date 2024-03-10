/*
  OBSERVER - Behavioral Pattern

  Definir uma dependência de um para muitos entre objetos de forma que quando um deles mude, os demais também mudem.

  EXEMPLO

  Considere uma loja. Sempre que há uma nova promoção, esta loja notifica seus clientes sobre o novo produto. Esta notificação é enviada apenas aos clientes que escolherem recebê-las e é feita via e-mail.

  Pode ser simples criar este tipo de funcionalidade quando há apenas um meio de envio, mas e se futuramente o usuário puder escolher entre receber a notificação via e-mail ou pelo aplicativo da loja? Como expandir essa lógica de forma simples?

  O padrão Observer resolve esse tipo de problema.

  Neste cenário, criamos uma classe para a loja, uma para a notificação via e-mail, uma outra para a notificação via aplicativo e uma última que gerencia o sistema de notificação. Assim, quando a loja liberar uma nova promoção, todos os usuários inscritos no sistema serão notificados.

  EXPLICAÇÃO DO CÓDIGO

  Criamos uma interface para a notificação, com o método para notificar o usuário.

  Criamos uma classe para cada tipo de notificação, implementando o método de notificar.

  Criamos uma classe para o sistema de notificação, que mantem uma lista dos usuários inscritos e possui os métodos para inscrevê-los, desinscrevê-los e os notificar.

  Criamos a classe da loja, onde instanciamos o sistema de notificação.

  Finalmente, podemos instanciar a loja e as notificações, adicionar as notificações ao serviço e, sempre que uma promoção nova surgir, os usuários serão notificados.
*/

// Interface da notificação
interface EventListener {
  update(): void
}

// Classe da notificação via e-mail
class EmailMsgListener implements EventListener {
  private email: string

  constructor(email: string) {
    this.email = email
  }

  public getEmail(): string {
    return this.email
  }

  public update(): void {
    console.log("Hey " + this.email + ", theres a new promotion!")
  }
}

// Classe da notificação via aplicativo
class MobileAppListener implements EventListener {
  private username: string

  constructor(username: string) {
    this.username = username
  }

  public getUsername(): string {
    return this.username
  }

  public update(): void {
    console.log("Hey " + this.username + ", theres a new promotion!")
  }
}

// Classe do sistema de notificação
class NotificationService {
  private customers: EventListener[] = []

  public subscribe(customer: EventListener): void {
    this.customers.push(customer)
  }

  public unsubscribe(customer: EventListener): void {
    const costumerIndex = this.customers.indexOf(customer)
    this.customers.splice(costumerIndex, 1)
  }

  public notify(): void {
    this.customers.forEach((customer) => customer.update())
  }
}

// Classe da loja
class Store {
  private notificationService: NotificationService

  constructor() {
    this.notificationService = new NotificationService()
  }

  public newItemPromotion(): void {
    this.notificationService.notify()
  }

  public getNotificationService(): NotificationService {
    return this.notificationService
  }
}

// Função padrão do código
function observerMain() {
  const store = new Store()

  const customerEmail1 = new EmailMsgListener("John.doe@email.com")
  const customerEmail2 = new EmailMsgListener("Jane.doe@email.com")
  const customerApp1 = new MobileAppListener("John Doe")

  store.getNotificationService().subscribe(customerEmail1)
  store.getNotificationService().subscribe(customerEmail2)
  store.getNotificationService().subscribe(customerApp1)

  store.newItemPromotion()

  store.getNotificationService().unsubscribe(customerEmail2)

  store.newItemPromotion()
}
observerMain()