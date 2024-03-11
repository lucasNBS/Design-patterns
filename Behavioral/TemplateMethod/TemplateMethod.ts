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