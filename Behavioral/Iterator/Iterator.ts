// Interface do iterator
interface Iterator {
  isValid(): boolean
  getNext(): void
  getCurrentItem(): string
}

// Classe do iterador em ordem direta
class StraightOrderIterator implements Iterator {
  private collection: string[]
  private currentIndex = 0

  constructor(collection: string[]) {
    this.collection = collection
  }

  public isValid(): boolean {
    return this.currentIndex < this.collection.length
  }

  public getNext(): void {
    this.currentIndex += 1
  }

  public getCurrentItem(): string {
    return this.collection[this.currentIndex]
  }
}

// Classe do iterador em ordem reversa
class ReverseOrderIterator implements Iterator {
  private collection: string[]
  private currentIndex: number

  constructor(collection: string[]) {
    this.collection = collection
    this.currentIndex = collection.length - 1
  }

  public isValid(): boolean {
    return this.currentIndex >= 0
  }

  public getNext(): void {
    this.currentIndex -= 1
  }

  public getCurrentItem(): string {
    return this.collection[this.currentIndex]
  }
}

// Função padrão do código
function iteratorMain() {
  const wordsList = ["First", "Second", "Third", "Fourth", "Fifth"]

  const straightIterator = new StraightOrderIterator(wordsList)

  console.log("Straight order:")
  while (straightIterator.isValid()) {
    console.log(straightIterator.getCurrentItem())
    straightIterator.getNext()
  }

  const reverseIterator = new ReverseOrderIterator(wordsList)

  console.log("\nReverse order:")
  while (reverseIterator.isValid()) {
    console.log(reverseIterator.getCurrentItem())
    reverseIterator.getNext()
  }
}
iteratorMain()