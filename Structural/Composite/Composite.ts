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