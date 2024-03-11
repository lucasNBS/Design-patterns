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