// Interface de hambúrguer
interface Burger {
  prepare(): void
}

// Classe do hambúrguer não vegetariano
class BeefBurger implements Burger {
  prepare() {
    console.log("Preparing beef burger")
  }
}

// Classe do hambúrguer vegetariano
class VeggieBurger implements Burger {
  prepare() {
    console.log("Preparing veggie burger")
  }
}

// Classe abstrata do restaurante
abstract class Restaurant {
  public orderBurger(): Burger {
    const burger: Burger = this.createBurger()
    burger.prepare()
    return burger
  }

  public abstract createBurger(): Burger
}

// Classe do restaurante que serve hamburgueres não vegetarianos
class BeffBurgerRestaurant extends Restaurant {
  public createBurger(): Burger {
    return new BeefBurger()
  }
}

// Classe do restaurante que serve hamburgueres vegetarianos
class VeggieBurgerRestaurant extends Restaurant {
  public createBurger(): Burger {
    return new VeggieBurger()
  }
}

// Função padrão do código
function factoryMain() {
  const veggieRestaurant: VeggieBurgerRestaurant = new VeggieBurgerRestaurant()
  const veggieBurger: Burger = veggieRestaurant.orderBurger()

  const beefRestaurant: BeffBurgerRestaurant = new BeffBurgerRestaurant()
  const beefBurger: Burger = beefRestaurant.orderBurger()
}
factoryMain()