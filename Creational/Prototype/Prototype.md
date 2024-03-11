# PROTOTYPE - Creational Pattern

Especificar tipos de objetos a serem criados usando a instância de um protótipo e criar novos objetods pela cópia deste.

## EXEMPLO

Considere um sistema para o cadastro da veículos.

Os automóves possuem algumas propriedades básicas, como marca, modelo e cor. Porém, a nível de código, mexer com os veículos pode ser trabalhoso, tendo de inicializar cada veículo separadamente quando, na prática, muitos deles terão propriedades similares.

O padrão Prototype resolve esse tipo de problema.

Ao invés de criar os veículos um a um do zero, um veículo base é criado e utilizado para gerar novos veículos.

## EXPLICAÇÃO DO CÓDIGO

O veículo se torna uma classe abstrata com suas propriedades base e um método abstrato de clonagem.

Classes como carro e ônibus, são filhas de veículo, possuindo suas próprias propriedades e a implementação do método clone, que retorna um novo objeto idêntico ao que o criou.

Finalmente, para criar um clone de um objeto, criamos um protótipo, inicializamos ele e executamos seu método de clonagem.