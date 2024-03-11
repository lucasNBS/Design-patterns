// Classe do banco de dados
class DataBank {
  private static instance: DataBank
  private data: string

  private constructor(data?: string) {
    this.data = data
  }

  public static getInstance(data?: string): DataBank {
    if (!this.instance) {
      this.instance = new DataBank(data)
    }
    return this.instance
  }

  public addData(data: string) {
    this.data = this.data + " " + data
  }
}

// Função padrão do código
function singletonMain() {
  const dataBank1 = DataBank.getInstance("data")

  console.log(dataBank1)

  dataBank1.addData("More data")

  console.log(dataBank1)

  const dataBank2 = DataBank.getInstance()

  console.log(dataBank2)

  dataBank2.addData("Much more data")

  console.log(dataBank1)
  console.log(dataBank2)
}
singletonMain()