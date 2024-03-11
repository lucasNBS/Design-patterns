# BRIDGE - Structural Pattern

Desacoplar uma abstração de sua implementação, de modo que possam variar independentemente.

## EXEMPLO

Considere uma pizzaria que produz pizzas de tipos variados.

Conforme essa pizzaria cresce, novos tipos de pizza são adicionadas ao cardápio, bem como modos de preparo diferentes. Um problema que isso pode trazer, porém, é a criação de múltiplas classes para abordar tipos e modos de preparo diferentes para cada pizza.

O padrão Builder resolve esse tipo de problema.

Ao invés de criar uma classe para cada combinação, são criadas classes abstratas tanto para o tipo da pizza quanto para o modo de preparo, fazendo com que a adição de um novo tipo ou modo de preparo de pizza resulte na criação de apenas mais uma classe. Assim, a classe de modo de preparo pode possuir pizza como uma de suas propriedades e prepará-la de qualquer modo.

## EXPLICAÇÃO DO CÓDIGO

A pizza se torna uma classe abstrata com suas propriedades e métodos padrão.

Cada tipo de pizza se torna uma classe, implementando os métodos da classe abstrata de pizza de acordo com seu próprio tipo.

A pizzaria se torna uma classe asbtrata com seus próprios métodos. Note como uma das propriedades da classe é uma instância de pizza. Esta é a "ponte" ( Bridge ) que liga as classes abstratas.

Cada modo de preparo da pizza se torna uma classe, implementando os métodos da classe abstrata de pizzaria de acordo com seu próprio modo de preparo.