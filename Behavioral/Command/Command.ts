// Classe da casa
class House {
  private rooms: Room[] = []

  public addRoom(room: Room): void {
    this.rooms.push(room)
  }
}

// Classe de luz
class Light {
  private isOn: Boolean = false

  public switch(): void {
    this.isOn = !this.isOn
    console.log("Light is " + (this.isOn ? "On" : "Off"))
  }
}

// Interface de command com seu método de execução
interface Command {
  execute(): void
}

// Classe do comando de ligar/desligar luzes
class SwitchLightsCommand implements Command {
  private light: Light

  constructor(light: Light) {
    this.light = light
  }

  public execute(): void {
    this.light.switch()
  }
}

// Classe abstrata de cômodo
abstract class Room {
  private command: Command

  public setCommand(command: Command): void {
    this.command = command
  }

  public executeCommand() {
    this.command.execute()
  }
}

// Classe da sala
class LivingRoom extends Room { }

// Classe do quarto
class Bedroom extends Room { }

// Classe da cozinha
class Kitchen extends Room { }

// Classe do banheiro
class Bathroom extends Room { }

// Função padrão do código
function commandMain() {
  const house: House = new House()

  const livingRoom = new LivingRoom()
  // const bedroom = new Bedroom()
  // const bathroom = new Bathroom()
  // const kitchen = new Kitchen()

  house.addRoom(livingRoom)
  // house.addRoom(bedroom)
  // house.addRoom(bathroom)
  // house.addRoom(kitchen)

  livingRoom.setCommand(new SwitchLightsCommand(new Light()))
  livingRoom.executeCommand()
  livingRoom.executeCommand()
}
commandMain()