/*
  ABSTRACT FACTORY - Creational Pattern
  
  Fornecer uma interface para a criação de famílias de objetos relacionados sem especificar suas classes concretas.

  EXEMPLO

  Considere uma empresa que fabrica peças de computador.
  
  Com o padrão Factory, pode ser fácil implementar a lógica para fabricar, por exemplo, um monitor de marcas diferentes; porém, ao tentar adicionar uma placa de vídeo que também possua marcas diferentes, o código pode acabar se tornando complexo demais.

  O padrão Abstract Factory é feito para solucionar esse tipo de problema.

  Ao invés de tentar generalizar os produtos produzidos, cada produto é separado em sua própria interface, resultando na criação de classes novas que a implementem de acordo com cada tipo do produto e na adição de um método para criar este novo produto.

  EXPLICAÇÃO DO CÓDIGO

  O monitor e a placa de vídeo se tornam interfaces com o método de montagem a ser criado pelas classes que os implementarem.

  Cada tipo de monitor e placa de vídeo se torna uma classe própria que implementa a interface de monitor ou placa de vídeo e cria seu próprio método de montagem.

  A empresa se torna uma classe abstrata com os métodos abstratos para criar um monitor e uma placa de vídeo.

  Por fom, para cada tipo de monitor ou placa de vídeo, há um tipo de fabricadora que o produz com a sua própria implementação do método para criar monitor ou placa de vídeo.
*/

// Interface de monitor
interface Monitor {
  assemble(): void
}

// Interface de placa de vídeo
interface Gpu {
  assemble(): void
}

// Classe para montar um monitor da Msi
class MsiMonitor implements Monitor {
  public assemble(): void {
    console.log("Assembling Msi Monitor")
  }
}

// Classe para montar um monitor da Asus
class AsusMonitor implements Monitor {
  public assemble(): void {
    console.log("Assembling Asus Monitor")
  }
}

// Classe para montar uma placa de vídeo da Msi
class MsiGpu implements Gpu {
  public assemble(): void {
    console.log("Assembling Msi Gpu")
  }
}

// Classe para montar uma placa de vídeo da Asus
class AsusGpu implements Gpu {
  public assemble(): void {
    console.log("Assembling Asus Gpu")
  }
}

// Classe abstrata da empresa
abstract class Company {
  public abstract createGpu(): Gpu
  public abstract createMonitor(): Monitor
}

// Classe da fabricadora Msi
class MsiManufacturer extends Company {
  public createGpu(): MsiGpu {
    return new MsiGpu()
  }

  public createMonitor(): MsiMonitor {
    return new MsiMonitor()
  }
}

// Classe da fabricadora Asus
class AsusManufacturer extends Company {
  public createGpu(): AsusGpu {
    return new AsusGpu()
  }

  public createMonitor(): AsusMonitor {
    return new AsusMonitor()
  }
}

// Função padrão do código
function abstractFactoryMain() {
  const asusManufacturer: AsusManufacturer = new AsusManufacturer()
  const asusGpu: AsusGpu = asusManufacturer.createGpu()
  const asusMonitor: AsusMonitor = asusManufacturer.createMonitor()
  asusGpu.assemble()
  asusMonitor.assemble()

  const msiManufacturer: MsiManufacturer = new MsiManufacturer()
  const msiGpu: MsiGpu = msiManufacturer.createGpu()
  const msiMonitor: MsiMonitor = msiManufacturer.createMonitor()
  msiGpu.assemble()
  msiMonitor.assemble()
}
abstractFactoryMain()