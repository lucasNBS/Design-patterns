// Interface do mediador
interface Mediator {
  login(): void
  updateUi(): void
}

// Classe abstrata do componente
abstract class Component {
  protected mediator: Mediator

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator
  }
}

// Classe do botão
class LoginButton extends Component {

  public click() {
    this.mediator.login()
  }
}

// Classe do campo de texto
class TextBox extends Component {
  private text: string

  public getText(): string {
    return this.text
  }

  public setText(text: string) {
    this.text = text
    this.mediator?.updateUi()
  }
}

// Classe do modal de login
class LoginModal implements Mediator {
  private usernameField: TextBox
  private passwordField: TextBox
  private loginButton: LoginButton

  constructor(usernameField: TextBox, passwordField: TextBox, loginButton: LoginButton) {
    this.usernameField = usernameField
    this.passwordField = passwordField
    this.loginButton = loginButton

    this.usernameField.setMediator(this)
    this.passwordField.setMediator(this)
    this.loginButton.setMediator(this)
  }

  public updateUi() {
    console.log("UI updated")
  }

  public login(): void {
    const username: string = this.usernameField.getText()
    const password: string = this.passwordField.getText()

    console.log("Logging " + username + " with password " + password)

    console.log("Reseting username and password fields")
    this.usernameField.setText("")
    this.passwordField.setText("")
  }
}

// Função padrão do código
function mediatorMain() {
  const usernameField = new TextBox()
  const passwordField = new TextBox()
  const loginButton = new LoginButton()

  const dialog = new LoginModal(usernameField, passwordField, loginButton)

  usernameField.setText("John Doe")
  passwordField.setText("12345")
  loginButton.click()
}
mediatorMain()