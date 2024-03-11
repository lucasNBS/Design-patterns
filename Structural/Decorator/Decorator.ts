// Classe do banco de dados dos usuários
class Database {

  public getMailFromUsername(username: string) {
    return username + "@email"
  }

  public getFacebookFromUsername(username: string) {
    return username + "@facebook"
  }

  public getWhatsappFromUsername(username: string) {
    return username + "@whatsapp"
  }
}

// Interface base da notificação
interface NotifierInterface {
  send(message: string): void
  getUsername(): string
}

// Classe da notificação
class Notifier implements NotifierInterface {
  private username: string
  private databaseService: Database

  constructor(username: string) {
    this.username = username
    this.databaseService = new Database()
  }

  public send(message: string): void {
    const email = this.databaseService.getMailFromUsername(this.username)
    console.log("Sending " + message + " by mail to " + email)
  }

  public getUsername(): string {
    return this.username
  }
}

// Classe do decorator de notificação base
abstract class BaseNotifierDecorator implements NotifierInterface {
  private wrapped: NotifierInterface
  protected databaseService: Database

  constructor(wrapped: NotifierInterface) {
    this.wrapped = wrapped
    this.databaseService = new Database()
  }

  public send(message: string): void {
    this.wrapped.send(message)
  }

  public getUsername(): string {
    return this.wrapped.getUsername()
  }
}

// Classe do decorator de notificação para o whatsapp
class WhatsappDecorator extends BaseNotifierDecorator {

  constructor(wrapped: NotifierInterface) {
    super(wrapped)
  }

  public send(message: string): void {
    super.send(message)
    const whatsapp = this.databaseService.getWhatsappFromUsername(this.getUsername())
    console.log("Sending " + message + " by Whatsapp on " + whatsapp)
  }
}

// Classe do decorator de notificação para o facebook
class FacebookDecorator extends BaseNotifierDecorator {

  constructor(wrapped: NotifierInterface) {
    super(wrapped)
  }

  public send(message: string): void {
    super.send(message)
    const facebook = this.databaseService.getFacebookFromUsername(this.getUsername())
    console.log("Sending " + message + " on Facebook to " + facebook)
  }
}

// Função padrão do código
function decoratorMain() {
  const notifier1 = new FacebookDecorator(new WhatsappDecorator(new Notifier("JohnDoe")))
  notifier1.send("Study Design Patterns")

  const notifier2 = new FacebookDecorator(new Notifier("JaneDoe"))
  notifier2.send("Doctor appointment was cancelled")

  const notifier3 = new Notifier("JeneDoe")
  notifier3.send("Walk with the dog")
}
decoratorMain()