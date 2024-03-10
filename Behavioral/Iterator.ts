/*
  ITERATOR - Behavioral Pattern

  Fornecer um meio de acessar sequencialmente os elementos de um objeto agregado sem expor a sua representação subjacente.

  EXEMPLO

  Considere um programa que ordena estruturas.

  Este programa recebe uma estrutura qualquer e retorna uma lista de seus elementos de acordo com o método executado. Dado a diversidade que as estruturas de dados podem assumir, este programa implementa diversas classes e métodos com base em qual estrutura será ordenada. Porém, este tipo de implementação faz com que diversas interfaces sejam criadas para cada método, exigindo uma implementação e abordagem diferente para lidar com cada tipo de ordenação.

  O padrão Iterator resolve esse tipo de problema.

  Neste cenário, criamos classes de ordenação que seguem uma mesma interface para ordenar as estruturas sem expor sua implementação.

  EXPLICAÇÃO DO CÓDIGO

  Criamos a interface de Iterator com os métodos para retornar um elemento, passar para o próximo, etc.

  Criamos as classes com cada tipo de algoritmo de ordanação implementando a interface de iterator.

  Por fim, executamos um mesmo padrão de códgio para exibir a ordenação da estrutura.
*/

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