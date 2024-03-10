/*
  MEDIATOR - Behavioral Pattern

  Definir um objeto que encapsula a forma como um conjunto de objetos interage.

  EXEMPLO

  Considere uma aplicação no qual o usuário possa fazer login.

  Há um modal com um campo para o nome do usuário, um campo para a senha e o botão para logar. Porém, é preciso implementar algumas funcionalidades novas: quando o usuário digitar nos campos, a interface precisa ser atualizada e, quando clicar no botão de login, os campos precisam ser limpos. Porém, esta comunicação entre os componentes precisa ser implementada de forma a deixar os componentes reutilizáveis em outras partes do código além de respeitar o princípio da responsabilidade única.

  O padrão Mediator resolve esse tipo de problema.

  Ao invés de encher o modal de login de métodos para lidar com a interação entre os componentes, criamos a interface de um mediador implementada por eles que os faz se comunicar entre si.

  EXPLICAÇÃO DO CÓDIGO

  Criamos uma interface para o mediador.

  Criamos uma classe abstrata que possui um mediador como propriedade para os componentes.

  Criamos uma classe para cada componente com seus métodos e a chamada do respectivo método do mediador.

  Criamos a classe do modal de login, que inicializa o mediador dos componentes, e através de seus métodos coordena a interação entre eles.

  Assim, podemos instanciar os campos de texto, o botão de login e o modal, e sempre que houver alguma interação com algum deles, o mediador será avisado e manipulara os demais componentes.
*/

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