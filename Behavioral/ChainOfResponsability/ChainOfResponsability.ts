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