# BUILDER - Creational Pattern

Separar a construção de um objeto complexo de modo que o mesmo processo possa criar representações diferentes.

## EXEMPLO

Considere uma empresa que fabrica carros.

Os carros possuem algumas propriedades básicas, como id, marca, modelo, cor, capacidade do motor e peso. Porém, a nível de código, mexer com os carros pode ser trabalhoso, tendo de inicializar seu construtor com as propriedades necessárias na ordem correta e passando-as uma a uma mesmo quando elas não serão usadas.

O padrão Builder resolve esse tipo de problema.

Ao invés de criar o carro diretamente, criamos seu construtor e a partir dele construímos o carro.

## EXPLICAÇÃO DO CÓDIGO

O Carro se torna uma classe com suas propriedades padrão inicializadas pelo construtor. Observer que as propriedades não essenciais são opcionais!

O construtor do carro se torna uma classe com as mesmas propriedades de carro e métodos para definir cada uma de suas propriedades separadamente. Note o método de construção feito para criar o carro.

Para definir alguns templates básicos de carros, criamos a classe diretor com métodos próprios para executar a construção do carro.

Por fim, perceba o esquema de carro e o construtor do esquema de carro que não foram previamente mencionados. Uma vantagem adicional do padrão Builder, especialmente com o diretor criado, é facilitar a criação de objetos similares. Note como carro e esquema de carro possuem basicamente as mesmas propriedades; justamente por conta disso, eles podem compartilhar os métodos de criação do diretor.
