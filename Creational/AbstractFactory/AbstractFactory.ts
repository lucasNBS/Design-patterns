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