/*
  PROTOTYPE - Creational Pattern

  Especificar tipos de objetos a serem criados usando a instância de um protótipo e criar novos objetods pela cópia deste.

  EXEMPLO

  Considere um sistema para o cadastro da automóveis.

  Os automóves possuem algumas propriedades básicas, como marca, modelo e cor. Porém, a nível de código, mexer com os automóveis pode ser trabalhoso, tendo de inicializar cada automóvel separadamente quando, na prática, muitos deles terão propriedades similares.

  O padrão Prototype resolve esse tipo de problema.

  Ao invés de criar os automóveis um a um do zero, um automóvel base é criado e utilizado para gerar novos automóveis.

  EXPLICAÇÃO DO CÓDIGO

  O automóvel se torna uma classe abstrata com suas propriedades base.
*/

abstract class Vehicle {
  public brand: string
  public model: string
  public color: string

  constructor(vehicle?: Vehicle) {
    this.brand = vehicle?.brand
    this.model = vehicle?.model
    this.color = vehicle?.color
  }

  public abstract clone(): Vehicle
}

class Car extends Vehicle {
  private topSpeed: number

  constructor(car?: Car) {
    super(car)
    this.topSpeed = car?.topSpeed
  }

  public clone(): Car {
    return new Car(this)
  }
}

class Bus extends Vehicle {
  private length: number

  constructor(bus?: Bus) {
    super(bus)
    this.length = bus?.length
  }

  public clone(): Bus {
    return new Bus(this)
  }
}


function prototypeMain() {
  const car1 = new Car()
  car1.brand = "Bugatti"
  car1.model = "Chiron"
  car1.color = "Red"

  console.log(car1)

  const car2 = car1.clone()

  console.log(car2)

  car2.color = "Blue"

  console.log(car1)
  console.log(car2)

  const bus1 = new Bus()
  bus1.brand = "Lamborghini"
  bus1.model = "Chiron"
  bus1.color = "Yellow"

  console.log(bus1)

  const bus2 = bus1.clone()

  console.log(bus2)

  bus2.brand = "Buggati"

  console.log(bus1)
  console.log(bus2)
}
prototypeMain()