// Classe de veículo
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

// Classe de carro
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

// Classe de ônibus
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

// Função padrão do código
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