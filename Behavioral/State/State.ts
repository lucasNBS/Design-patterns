// Classe abstrata do estado do celular
abstract class State {
  protected phone: Phone

  constructor(phone: Phone) {
    this.phone = phone
  }

  public abstract onMainButton(): void
  public abstract onTurnOnAndOffButton(): void
}

// Classe do estado desligado celular
class OffState extends State {

  constructor(phone: Phone) {
    super(phone)
  }

  public onMainButton(): void {
    this.phone.setState(new LockedState(this.phone))
    this.phone.turnOn()
  }

  public onTurnOnAndOffButton(): void {
    this.phone.setState(new LockedState(this.phone))
    this.phone.turnOn()
  }
}

// Classe do estado bloqueado celular
class LockedState extends State {

  constructor(phone: Phone) {
    super(phone)
  }

  public onMainButton(): void {
    this.phone.setState(new ReadyState(this.phone))
    this.phone.unlock()
  }

  public onTurnOnAndOffButton(): void {
    this.phone.setState(new OffState(this.phone))
    this.phone.lock()
  }
}

// Classe do estado desbloqueado celular
class ReadyState extends State {

  constructor(phone: Phone) {
    super(phone)
  }

  public onMainButton(): void {
    this.phone.home()
  }

  public onTurnOnAndOffButton(): void {
    this.phone.setState(new OffState(this.phone))
    this.phone.lock()
  }
}

// Classe do celular
class Phone {
  private state: State

  constructor() {
    this.state = new OffState(this)
  }

  public setState(state: State): void {
    this.state = state
  }

  public getState(): State {
    return this.state
  }

  public lock(): void {
    console.log("Locking the phone")
  }

  public home(): void {
    console.log("Going to phone's home")
  }

  public unlock(): void {
    console.log("Unlocking the phone")
  }

  public turnOn(): void {
    console.log("Turning phone on, device still locked")
  }
}

// Função padrão do código
function stateMain() {
  const phone = new Phone()

  phone.getState().onMainButton()
  phone.getState().onMainButton()
  phone.getState().onMainButton()

  phone.getState().onTurnOnAndOffButton()

  phone.getState().onTurnOnAndOffButton()
  phone.getState().onTurnOnAndOffButton()
}
stateMain()