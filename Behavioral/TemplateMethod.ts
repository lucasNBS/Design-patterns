/*
  TEMPLATE METHOD - Behavioral Pattern

  Definir o template de um algoritmo em uma operação, mas deixando que suas subclasses sobrescrevam alguns de seus passos.

  EXEMPLO

  Considere o carregamento de um jogo.

  Para inicializar, cada jogo precisará realizar seus processos específicos, mas ainda assim, seguindo um padrão comum. Digamos que o primeiro passo é carregar os dados locais da máquina, depois criar alguns objetos padrão para a inicialização, fazer o download de arquivos adicionais e então fazer uma limpeza dos arquivos para só então o carregamento do jogo terminar. Quando implementando o carregamento de múltiplos jogos, seria interessante poder seguir este mesmo algoritmo porém seguindo as especificidades de cada jogo. Assim a duplicação de código seria evitada, mantendo o código mais simples.

  O padrão Template Method resolve esse tipo de problema.

  Ao invés de criar do zero uma função padrão para cada etapa da inicialização e depois executá-las em ordem, criamos um template base para o algoritmo aproveitando as etapas que se repetem.

  EXPLICAÇÃO DO CÓDIGO

  Criamos uma classe abstrata do carregamento de um jogo. Perceba o método de carregamento que executa uma mesma sequência de métodos, estes os quais podem ser implementados por cada jogo em específico ou definidos como um padrão.

  Criamos uma classe para o carregamento de cada jogo, sobrescrevendo os métodos necessários e mantendo os comuns.

  Assim, podemos simplesmente instanciar o carregamento do jogo desejado e carregá-lo.
*/

// Classe abstrata do carregamento do jogo
abstract class BaseGameLoader {
  public load() {
    this.loadLocalData()
    this.createObjects()
    this.downloadAdditionalFiles()
    this.cleanTemporaryFiles()
  }

  public abstract loadLocalData(): void
  public abstract createObjects(): void
  public abstract downloadAdditionalFiles(): void

  public cleanTemporaryFiles(): void {
    console.log("Cleaning temporary files")
  }
}

// Classe do carregamento de Overwatch
class OverwatchLoader extends BaseGameLoader {

  public loadLocalData(): void {
    console.log("Loading Overwatch files")
  }

  public createObjects(): void {
    console.log("Creating Overwatch objects")
  }

  public downloadAdditionalFiles(): void {
    console.log("Downloading Overwatch additional files")
  }
}

// Classe do carregamento de PUBG
class PubgLoader extends BaseGameLoader {

  public loadLocalData(): void {
    console.log("Loading PUBG files")
  }

  public createObjects(): void {
    console.log("Creating PUBG objects")
  }

  public downloadAdditionalFiles(): void {
    console.log("Downloading PUBG additional files")
  }
}

// Função padrão do códgio
function templateMethodMain() {
  const overwatchLoader: OverwatchLoader = new OverwatchLoader()
  overwatchLoader.load()

  const pubgLoader: PubgLoader = new PubgLoader()
  pubgLoader.load()
}
templateMethodMain()