/*
  BUILDER - Creational Pattern

  Separar a construção de um objeto complexo de modo que o mesmo processo possa criar representações diferentes.

  EXEMPLO

  Considere uma empresa que fabrica carros.

  Os carros possuem algumas propriedades básicas, como id, marca, modelo, cor, capacidade do motor e peso. Porém, a nível de código, mexer com os carros pode ser trabalhoso, tendo de inicializar seu construtor com as propriedades necessárias na ordem correta e passando-as uma a uma mesmo quando elas não serão usadas.

  O padrão Builder resolve esse tipo de problema.

  Ao invés de criar o carro diretamente, criamos seu construtor e a partir dele construímos o carro.

  EXPLICAÇÃO DO CÓDIGO

  O Carro se torna uma classe com suas propriedades padrão inicializadas pelo construtor. Observer que as propriedades não essenciais são opcionais!

  O construtor do carro se torna uma classe com as mesmas propriedades de carro e métodos para definir cada uma de suas propriedades separadamente. Note o método de construção feito para criar o carro.

  Para definir alguns templates básicos de carros, criamos a classe diretor com métodos próprios para executar a construção do carro.

  Por fim, perceba o esquema de carro e o construtor do esquema de carro que não foram previamente mencionados. Uma vantagem adicional do padrão Builder, especialmente com o diretor criado, é facilitar a criação de objetos similares. Note como carro e esquema de carro possuem basicamente as mesmas propriedades; justamente por conta disso, eles podem compartilhar os métodos de criação do diretor.
*/

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