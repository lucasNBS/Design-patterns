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