// Classe de carro
class Car {
  private id: number
  private brand: string
  private model: string
  private color: string
  private weight: number
  private engineCapacity: number

  constructor(
    id: number,
    brand: string,
    model: string,
    color?: string,
    weight?: number,
    engineCapacity?: number
  ) {
    this.id = id
    this.brand = brand
    this.model = model
    this.color = color
    this.weight = weight
    this.engineCapacity = engineCapacity
  }
}

// Classe do esquema de carro
class CarSchema {
  private id: number
  private brand: string
  private model: string
  private color: string
  private weight: number
  private engineCapacity: number

  constructor(
    id: number,
    brand: string,
    model: string,
    color?: string,
    weight?: number,
    engineCapacity?: number
  ) {
    this.id = id
    this.brand = brand
    this.model = model
    this.color = color
    this.weight = weight
    this.engineCapacity = engineCapacity
  }
}

// Interface do construtor
interface Builder {
  setId(id: number): Builder
  setBrand(brand: string): Builder
  setModel(model: string): Builder
  setColor(color: string): Builder
  setWeight(weight: number): Builder
  setEngineCapacity(engineCapacity: number): Builder
  build()
}

// Classe do construtor de carro
class CarBuilder implements Builder {
  private id: number
  private brand: string
  private model: string
  private color: string
  private weight: number
  private engineCapacity: number

  public setId(id: number): Builder {
    this.id = id
    return this
  }

  public setBrand(brand: string): Builder {
    this.brand = brand
    return this
  }

  public setModel(model: string): Builder {
    this.model = model
    return this
  }

  public setColor(color: string): Builder {
    this.color = color
    return this
  }

  public setWeight(weight: number): Builder {
    this.weight = weight
    return this
  }

  public setEngineCapacity(engineCapacity: number): Builder {
    this.engineCapacity = engineCapacity
    return this
  }

  public build(): Car {
    return new Car(this.id, this.brand, this.model, this.color, this.weight, this.engineCapacity)
  }
}

// Classe do construtor do esquema de carro
class CarSchemaBuilder implements Builder {
  private id: number
  private brand: string
  private model: string
  private color: string
  private weight: number
  private engineCapacity: number

  public setId(id: number): Builder {
    this.id = id
    return this
  }

  public setBrand(brand: string): Builder {
    this.brand = brand
    return this
  }

  public setModel(model: string): Builder {
    this.model = model
    return this
  }

  public setColor(color: string): Builder {
    this.color = color
    return this
  }

  public setWeight(weight: number): Builder {
    this.weight = weight
    return this
  }

  public setEngineCapacity(engineCapacity: number): Builder {
    this.engineCapacity = engineCapacity
    return this
  }

  public build(): CarSchema {
    return new CarSchema(
      this.id, this.brand, this.model, this.color, this.weight, this.engineCapacity
    )
  }
}

// Classe do diretor
class Director {
  public buildBugatti(builder: Builder): void {
    builder.setBrand("Bugatti").setEngineCapacity(8).setWeight(400)
  }

  public buildLamborghini(builder: Builder): void {
    builder.setBrand("Lamborghini").setEngineCapacity(12).setWeight(700)
  }
}

// Função padrão do código
function builderMain() {
  const director: Director = new Director()

  const builder1: CarBuilder = new CarBuilder()
  director.buildBugatti(builder1)
  const car1: Car = builder1.setColor("blue").setId(1).build()

  console.log(car1)

  const builder2: CarBuilder = new CarBuilder()
  builder2.setId(2).setBrand("Toyota").setEngineCapacity(10).setWeight(400)
  const car2 = builder2.build()

  console.log(car2)

  const builder3: CarSchemaBuilder = new CarSchemaBuilder()
  director.buildLamborghini(builder3)
  const car3: CarSchema = builder3.build()

  console.log(car3)
}
builderMain()