/*
  COMPOSITE - Structural Pattern

  Compor objetos em estruturas de árvore e trabalhar com estas estruturas como objetos individuais.

  EXEMPLO

  Considere um sistema de entrega de produtos.

  Neste sistema, uma caixa pode conter produtos ou outras caixas menores dentro dela, que por sua vez também podem conter outros produtos ou caixas ainda menores. Esse sistema deve possuir um método para calcular o preço de uma entrega, analisando o preço dos produtos e somando-os. Apesar da simplicidade da ideia, a implementação de algo assim é trabalhosa, envolvendo recursividade.

  O padrão Composite resolve esse tipo de problema.

  Neste cenário, criamos uma classe de composição de caixas que recebe outras caixas ou produtos, os quais possuem um método para retornar seu preço. Assim, esta classe é capaz de percorrer todos os produtos e caixas dentro dela e somar o preço da entrega como um todo.

  EXPLICAÇÃO DO CÓDIGO

  A caixa se torna uma interface com o método para calcular o preço.

  A classe de composição de caixas implementa a interface caixa e define o método para calcular o preço passando por todos os outros objetos guardados dentro dela e somando seus preços.

  Definimos uma classe abstrata para os produtos, com suas propriedades base e o método para retornar seu preço.
  
  Criamos uma classe para cada tipo de produto que herda da classe abstrata produto.

  Definimos uma classe para o sistema de entrega, com uma instância de caixa, um método para criar uma nova entrega e um outro para calcular o preço total da entrega.

  Finalmente, instanciamos o sistema de entrega, criamos uma nova entrega e colocamos todos os produtos da entrega - podendo estes serem produtos ou outras caixas com produtos. Assim, conseguimos simplesmente executar o método para calcular o valor total da entrega.
*/

// Interface de caixa
interface Box {
  calculatePrice(): number
}

// Classe de composição de caixa
class CompositeBox implements Box {
  private children: Box[] = []

  constructor(boxes: Box[] | Box) {
    const isArray = boxes instanceof Array

    if (isArray) {
      this.children.push(...boxes)
    } else {
      this.children.push(boxes)
    }
  }

  public calculatePrice(): number {
    const total = this.children.reduce((prev, box) => prev += box.calculatePrice(), 0)
    return total
  }
}

// Classe abstrata de produto
abstract class Product implements Box {
  protected title: string
  protected price: number

  constructor(title: string, price: number) {
    this.title = title
    this.price = price
  }

  public calculatePrice(): number {
    return this.price
  }
}

// Classe do produto livro
class Book extends Product {

  constructor(title: string, price: number) {
    super(title, price)
  }
}

// Classe do produto video game
class VideoGame extends Product {

  constructor(title: string, price: number) {
    super(title, price)
  }
}

// Classe do sistema de entrega
class DeliverySystem {
  private box: Box

  public setupOrder(boxes: Box[]): void {
    this.box = new CompositeBox(boxes)
  }

  public calculateOrderPrice(): number {
    return this.box.calculatePrice()
  }
}

// Função padrão do código
function compositeMain() {
  const deliverySystem: DeliverySystem = new DeliverySystem()

  deliverySystem.setupOrder([
    new CompositeBox(
      new VideoGame("Video Game 1", 100)
    ),
    new CompositeBox([
      new CompositeBox(
        new Book("Book 1", 150)
      ),
      new Book("Book 2", 90),
      new VideoGame("Video Game 2", 300)
    ]
    )
  ]
  )

  const total = deliverySystem.calculateOrderPrice()
  console.log(total)
}
compositeMain()