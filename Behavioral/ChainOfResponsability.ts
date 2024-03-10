/*
  CHAIN OF RESPONSABILITY - Behavioral Pattern

  Encadear objetos receptores, passando uma solicitação ao longo de uma cadeia até que algum objeto a trate.

  EXEMPLO

  Considere um serviço de autenticação de usuário.

  Um usuário se cadastra definindo um nome e uma senha e sempre que precisar realizar o login, ele fornece este mesmo nome e esta mesma senha. A nível de código, porém, esta validação é complexa de se fazer. Primeiro é preciso verificar se o nome do usuário está cadastrado, depois verficar se a senha está correta e depois verificar suas permissões dentro de um sistema; sendo que em cada um destes estágios o usuário deve também receber um feedback a respeito de possíveis erros. Não somente, o ideal é que cada uma destas etapas seja responsável por sua parte somente, de forma que as funções sejam independentes entre si, mas capazes de agir em conjunto, mantendo o código organizado.

  O padrão Chain of Responsability resolve esse tipo de problema.

  Neste cenário, criamos uma classe asbtrata base para as verificações e uma outra para cada tipo de verificação, posteriormente ligando-as entre si, de forma que uma validação caminhe pela cadeia de verificações até uma delas retornar algum resultado.

  EXPLICAÇÃO DO CÓDIGO

  Criamos uma classe abstrata para as verificações, com o método abstrata para verificar algo e os métodos para atrelar uma verificação à outra e para executar a verificação seguinte.

  Criamos então uma classe para cada verificação, com cada uma delas realizando sua própria verificação e executando a verificação seguinte.

  Criamos a classe do serviço de autenticação, que recebe uma propriedade do tipo verificação e a executa para validar o usuário.

  Por fim, podemos instanciar as verificações, ligá-las umas as outras, instanciar o serviço de autenticação e passar a cadeia de verificações a ele, fazendo com que cada uma delas realize sua própria verificação e retore quaisquer respostas necessárias.
*/

// Classe do banco de dados
class DataBase {
  private users: Map<string, string>

  constructor() {
    this.users = new Map<string, string>()

    this.users.set("adminUsername", "adminPassword")
    this.users.set("notAdminUsername", "notAdminPassword")
  }

  public isValidUser(username: string): boolean {
    return this.users.has(username)
  }

  public isValidPassword(username: string, password: string): boolean {
    return this.users.get(username) === password
  }
}

// Classe abstrata da verificação
abstract class Handler {
  private next: Handler

  public setNextHandler(next: Handler): Handler {
    this.next = next
    return next
  }

  public abstract handle(username: string, password: string): boolean

  protected handleNext(username: string, password: string): boolean {
    if (this.next == null) {
      return true
    }
    return this.next.handle(username, password)
  }
}

// Classe da verificação do nome de usuário
class UserExistHandler extends Handler {
  private dataBase: DataBase

  constructor(dataBase: DataBase) {
    super()
    this.dataBase = dataBase
  }

  public handle(username: string, password: string): boolean {
    if (!this.dataBase.isValidUser(username)) {
      console.log("Username is not registered")
      return false
    }
    console.log("Username is registered")
    return this.handleNext(username, password)
  }
}

// Classe da validação da senha do usuário
class ValidPasswordHandler extends Handler {
  private dataBase: DataBase

  constructor(dataBase: DataBase) {
    super()
    this.dataBase = dataBase
  }

  public handle(username: string, password: string): boolean {
    if (!this.dataBase.isValidPassword(username, password)) {
      console.log("Incorrect password")
      return false
    }
    console.log("Password is correct")
    return this.handleNext(username, password)
  }
}

// Classe da validação das permissões do usuário
class AdminCheckHandler extends Handler {

  public handle(username: string, password: string): boolean {
    if ("adminUsername" === username) {
      console.log("Loading admin page")
      return true
    }
    console.log("Loading non admin page")
    return this.handleNext(username, password)
  }
}

// Classe do serviço de autenticação de usuário
class AuthService {
  private handler: Handler

  constructor(handler: Handler) {
    this.handler = handler
  }

  public logIn(usename: string, password: string): boolean {
    if (this.handler.handle(usename, password)) {
      console.log("Successful authorization")
      return true
    }
    return false
  }
}

// Função padrão do código
function chainOfResponsabilityMain() {
  const dataBase: DataBase = new DataBase()

  const handler: Handler = new UserExistHandler(dataBase)
  handler.setNextHandler(new ValidPasswordHandler(dataBase)).setNextHandler(new AdminCheckHandler())

  const authService: AuthService = new AuthService(handler)

  authService.logIn("adminUsername", "adminPassword")
}
chainOfResponsabilityMain()