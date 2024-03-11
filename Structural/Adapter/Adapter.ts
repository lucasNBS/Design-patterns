// Definição do tipo de dados em JSON
type JSONData = "JSON data"

// Definição do tipo de dados em XML
type XMLData = "XML data"

// Classe da biblioteca de componentes prontos
class FancyUILib {
  public displayMenu(JSONData: JSONData): void {
    console.log(JSONData)
  }

  public displayRecommendations(JSONData: JSONData): void {
    console.log(JSONData)
  }
}

// Interface da aplicação
interface AppInterface {
  displayMenu(XMLData: XMLData): void
  displayRecommendations(XMLData: XMLData): void
}

// Classe do adaptador
class FancyUILibAdapter implements AppInterface {
  private fancyUILib: FancyUILib

  constructor() {
    this.fancyUILib = new FancyUILib()
  }

  private convertXMLToJSON(XMLData: XMLData): JSONData {
    const dataSecondPart = XMLData.split(" ")[1]
    const jsonData = "JSON " + dataSecondPart as JSONData
    return jsonData
  }

  public displayMenu(XMLData: XMLData): void {
    const JSONData: JSONData = this.convertXMLToJSON(XMLData)
    this.fancyUILib.displayMenu(JSONData)
  }

  public displayRecommendations(XMLData: XMLData): void {
    const JSONData: JSONData = this.convertXMLToJSON(XMLData)
    this.fancyUILib.displayRecommendations(JSONData)
  }
}

// Função padrão do código
function adapterMain() {
  const adapter: FancyUILibAdapter = new FancyUILibAdapter()
  adapter.displayMenu("XML data")
  adapter.displayRecommendations("XML data")
}
adapterMain()