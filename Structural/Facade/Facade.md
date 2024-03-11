# FACADE - Structural Pattern

Fornecer uma interface unificada para um conjunto de interfaces em um subsistema.

## EXEMPLO

Considere uma aplicação na qual é possível comprar e vender criptomoedas.

Esta aplicação utiliza uma biblioteca base com uma infinidade de métodos prontos para gerenciar a conta do usuário e a compra e venda das criptomoedas. Entretanto, esta biblioteca é verbosa e para uma simples operação é necessário executar uma série de métodos da biblioteca, o que acaba tornando o código mais complexo.

O padrão Facade resolve esse tipo de problema.

Ao invés de realizar uma série de interações com um conjunto de métodos, classes e objetos diretamente no código, uma classe própria para isso é criada com cada um destes métodos, de modo que esta classe possa oferecer uma interface mais simples de se usar.

## EXPLICAÇÃO DO CÓDIGO

Criamos a classe para a compra de criptomoedas como um facade e os métodos necessários para realizar as devidas operações. Note como os métodos desta classe interagem com os métodos da biblioteca.

Dessa forma, podemos simplesmente instanciar o facade criado e executar o método necessário para realizar uma devida operação.