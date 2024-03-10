/*
  COMMAND - Behavioral Pattern

  Encapsular uma solicitação como um objeto, permitindo parametrizar clientes com diferentes solicitações, enfileirar ou fazer o registro e suportar operações que possam ser desfeitas.

  EXEMPLO

  Considere uma aplicação que controla as luzes nos cômodos de uma casa.

  Há uma classe abstrata para definir os cômodos, cada cômodo tem sua classe e a classe casa recebe os cômodos como propriedade. Uma das formas de implementar este sistema de controle de luzes é definir que cada quarto terá uma luz como propriedade e um método para poder ligar ou desligá-la. Um problema disso, no entanto, é que os cômodos terão uma funcionalidade adicional além da sua principal, o que viola o princípio da resposabilidade única.

  O padrão Command resolve esse tipo de problema.

  Ao invés de definir uma propriedade com os métodos para alterá-la, define-se uma propriedade que encapsula os métodos para alterar uma outra propriedade.

  EXPLICAÇÃO DO CÓDIGO

  Criamos uma class para a luz, com o método para ligar e desligar

  Criamos uma interface para o comand com um método para o executar

  Criamos uma classe para o comando de ligar/desligar a luz de um cômodo. Perceba como esta classe contem tanto a propriedade luz como os métodos que interagem com ela.

  Criamos a classe abstrata para o cômodo, possuindo como propriedade um comando e métodos para o configurar e executar.

  Criamos uma classe para cada cômodo.

  Finalmente, podemos instanciar um cômodo, uma luz e um comando, ligá-los uns com os outros e fazê-los interagir.
*/

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