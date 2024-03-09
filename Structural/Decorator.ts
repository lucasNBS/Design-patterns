/*
  DECORATOR - Structural Pattern

  Agregar responsabilidades a um objeto dinamicamente.

  EXEMPLO

  Considere uma aplicação que envia notificações aos seus usuários.

  Inicialmente, esta aplicação envia um e-mail aos usuários. Em uma atualização, ela passa a poder enviar também uma mensagem no Facebook. Em uma outra, para o Whatsapp, e assim por diante. Porém, caso em algum momento seja decidido que esta aplicação deva conseguir enviar essas notificações em vários locais ao mesmo tempo, como ficaria esta implementação. Em um equema comum baseado em herança, classes diferentes seriam criadas para cada tipo de envio, fazendo com que para cada combinação, uma nova classe tenha de ser criada também.

  O padrão Decorator resolve esse tipo de problema.

  Ao invés de criar uma classe para cada envio e suas combinações, uma classe abstrata base e uma classe para cada envio são criadas, permitindo que elas sejam compostas umas nas outras sem ter de criar classe próprias para combiná-las.

  EXPLICAÇÃO DO CÓDIGO

  Criamos uma interface base para a notificação com seus métodos.

  Criamos uma classe para a notificação padrão enviada por e-mail, com os métodos da interface de notificação implementados.

  Criamos uma classe abstrata para o decorator de notificação, também implementando a interface de notificação. Note a propriedade wrapped e como os seus métodos são executados dentro dos métodos da classe.

  Criamos as classes de decorator do Facebook e Whatsapp, herdando a classe abstrata do decorator de notificação. Note como os métodos destas classes executam sempre o respectivo método da classe mãe.

  Por fim, conseguimos criar uma instância de notificação e, opcionalmente, envolvê-la em instâncias do decorator do Facebook ou Whatsapp, fazendo com que a notificação seja enviado em todos aqueles chamados.
*/

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