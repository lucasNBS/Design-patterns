/*
  BRIDGE - Structural Pattern

  Desacoplar uma abstração de sua implementação, de modo que possam variar independentemente.

  EXEMPLO

  Considere uma pizzaria que produz pizzas de tipos variados.

  Conforme essa pizzaria cresce, novos tipos de pizza são adicionadas ao cardápio, bem como modos de preparo diferentes. Um problema que isso pode trazer, porém, é a criação de múltiplas classes para abordar tipos e modos de preparo diferentes para cada pizza.

  O padrão Builder resolve esse tipo de problema.

  Ao invés de criar uma classe para cada combinação, são criadas classes abstratas tanto para o tipo da pizza quanto para o modo de preparo, fazendo com que a adição de um novo tipo ou modo de preparo de pizza resulte na criação de apenas mais uma classe. Assim, a classe de modo de preparo pode possuir pizza como uma de suas propriedades e prepará-la de qualquer modo.

  EXPLICAÇÃO DO CÓDIGO

  A pizza se torna uma classe abstrata com suas propriedades e métodos padrão.

  Cada tipo de pizza se torna uma classe, implementando os métodos da classe abstrata de pizza de acordo com seu próprio tipo.

  A pizzaria se torna uma classe asbtrata com seus próprios métodos. Note como uma das propriedades da classe é uma instância de pizza. Esta é a "ponte" ( Bridge ) que liga as classes abstratas.

  Cada modo de preparo da pizza se torna uma classe, implementando os métodos da classe abstrata de pizzaria de acordo com seu próprio modo de preparo.
*/

// Classe da pizza
abstract class Pizza {
  protected sauce: string
  protected toppings: string
  protected crust: string

  public abstract assemble(): void
  public abstract qualityCheck(): void

  public setSauce(sauce: string) {
    this.sauce = sauce
  }

  public setToppings(toppings: string) {
    this.toppings = toppings
  }

  public setCrust(crust: string) {
    this.crust = crust
  }
}

// Classe da pizza do tipo pepperoni
class PepperoniPizza extends Pizza {
  public assemble(): void {
    console.log("Preparing pepperoni pizza")
  }

  public qualityCheck(): void {
    console.log("Crust is " + this.crust)
  }
}

// Classe da pizza do tipo vegetariana
class VeggiePizza extends Pizza {
  public assemble(): void {
    console.log("Preparing veggie pizza")
  }

  public qualityCheck(): void {
    console.log("Crust is " + this.crust)
  }
}

// Classe do restaurante
abstract class Pizzaria {
  protected pizza: Pizza

  protected constructor(pizza: Pizza) {
    this.pizza = pizza
  }

  abstract addSauce(): void
  abstract addToppings(): void
  abstract makeCrust(): void

  public deliver(): void {
    this.makeCrust()
    this.addSauce()
    this.addToppings()
    this.pizza.assemble()
    this.pizza.qualityCheck()
    console.log("Order in progress")
  }
}

// Classe do restaurante com modo de preparo americano
class AmericanPizzaria extends Pizzaria {

  constructor(pizza: Pizza) {
    super(pizza)
  }

  public addSauce(): void {
    this.pizza.setSauce("American sauce")
  }

  public addToppings(): void {
    this.pizza.setToppings("American Toppings")
  }

  public makeCrust(): void {
    this.pizza.setCrust("American crust")
  }
}

// Classe do restaurante com modo de preparo italiano
class ItalianPizzaria extends Pizzaria {

  constructor(pizza: Pizza) {
    super(pizza)
  }

  public addSauce(): void {
    this.pizza.setSauce("Italian sauce")
  }

  public addToppings(): void {
    this.pizza.setToppings("Italian Toppings")
  }

  public makeCrust(): void {
    this.pizza.setCrust("Italian crust")
  }
}

// Função padrão do código
function bridgeMain() {
  const americanPizzaria1: AmericanPizzaria = new AmericanPizzaria(new PepperoniPizza())
  const americanPizzaria2: AmericanPizzaria = new AmericanPizzaria(new VeggiePizza())

  americanPizzaria1.deliver()
  americanPizzaria2.deliver()

  const italianPizzaria1 = new ItalianPizzaria(new PepperoniPizza())
  const italianPizzaria2 = new ItalianPizzaria(new VeggiePizza())

  italianPizzaria1.deliver()
  italianPizzaria2.deliver()
}
bridgeMain()