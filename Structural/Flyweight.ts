/*
  FLYWEIGHT - Structural Pattern

  Compartilhar propriedades comuns entre objetos para suportar eficientemente o carregamento de grandes quantidades de objetos.

  EXEMPLO

  Considere uma aplicação que gerencia um estoque de livros.

  Esta aplicação armazena uma grande quantidade de livros, o que ocupa grande parte da memória do sistema. Mais que isso, a maior parte destes livros possuem diversas propriedades em comum, como a editora, o autor e o tipo. Assim, uma parte considerável da memória do sistema é usada para guardar dados que se repetem muitas e muitas vezes.

  O padrão Flyweight resolve esse tipo de problema.

  Ao invés de criar todos os livros do zero, as propriedades em comum dos livros são armazenadas em um outro objeto referenciado por uma outra propriedade do próprio livro, de forma que este único objeto possa ser usado por vários livros diferentes, economizando a memória usada.

  EXPLICAÇÃO DO CÓDIGO

  Criamos uma classe para livro com suas propriedades. Perceba que propriedades cujos valores variam mais são mantidas no livro, enquanto aquelas que se repetem são levadas como propriedades de tipo do livro.

  Criamos uma classe do tipo do livro, que armazena as propriedades que mais se repetem em livros.

  Criamos uma classe da fábrica de livros, que possui um método para buscar um tipo de livro específico, criando-o caso não exista e trazendo o já existente caso haja o encontre.

  Criamos a classe da loja, que possui um método para cadastrar livros. Note como este método primeiramente consulta os tipos de livros já existentes na fábrica de livros e depois cria o livro.

  Finalmente, podemos cadastrar os diversos livros da aplicação, sendo que aqueles que possuírem as propriedades tipo, autor e editora referenciarão um único objeto.
*/

// Função padrão para gerar títulos aleatórios
function getRandomTitle() {
  const titles = ["Title 1", "Title 2", "Title 3", "Title 4", "Title 5"]
  const randomNumber = Math.floor(Math.random() * 5)

  return titles[randomNumber]
}

// Função padrão para gerar preços aleatórios
function getRandomPrice() {
  const prices = [100, 250, 170, 80, 130]
  const randomNumber = Math.floor(Math.random() * 5)

  return prices[randomNumber]
}

// Classe de livro
class Book {
  private title: string
  private price: number
  private type: BookType

  constructor(title: string, price: number, type: BookType) {
    this.title = title
    this.price = price
    this.type = type
  }
}

// Classe do tipo do livro
class BookType {
  private type: string
  private distributor: string
  private author: string

  constructor(type, distributor, author) {
    this.type = type
    this.distributor = distributor
    this.author = author
  }
}

// Classe da fábrica de livros
class BookFactory {
  private static bookTypes: Map<string, BookType> = new Map<string, BookType>()

  public static getBookType(type: string, distributor: string, author: string): BookType {
    if (!this.bookTypes.get(type)) {
      this.bookTypes.set(type, new BookType(type, distributor, author))
    }
    return this.bookTypes.get(type)
  }

  public static getBooksType(): IterableIterator<BookType> {
    return this.bookTypes.values()
  }
}

// Classe de loja
class Store {
  private books: Book[] = []

  public storeBook(
    title: string,
    price: number,
    type: string,
    distributor: string,
    author: string
  ): void {
    const bookType = BookFactory.getBookType(type, distributor, author)
    this.books.push(new Book(title, price, bookType))
  }

  public getBooks(): Book[] {
    return this.books
  }
}

// Função padrão do código
function flyweightMain() {
  const store: Store = new Store()

  for (let i = 0; i < 10; i++) {
    store.storeBook(getRandomTitle(), getRandomPrice(), "Action", "Follet", "John Doe")
    store.storeBook(getRandomTitle(), getRandomPrice(), "Fantasy", "Ingram", "Jane Doe")
  }

  console.log(store.getBooks())
  console.log(BookFactory.getBooksType())
}
flyweightMain()