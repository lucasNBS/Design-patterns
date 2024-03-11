# ADAPTER - Structural Pattern

Converter a interface de uma classe em uma outra.

## EXEMPLO

Considere uma aplicação que reúne os cardápios de múltiplos restaurantes.

Esta aplicação recebe os dados dos cardápios em XML e, para exibí-los em sua interface, utiliza uma biblioteca de componentes prontos que recebem os dados em JSON. Neste cenário, não há como integrarmos ambas as coisas diretamente, visto que os dados estão em XML e a biblioteca de componentes recebe dados apenas em JSON.

O padrão Adapter resolve esse tipo de problema.

Neste cenário, criamos uma classe que implementa uma das interfaces e possui como propriedade uma instância da classe com a outra interface. Esta classe possui os métodos da interface implementada e um método adicional para converter os tipos de dados entre si.

## EXPLICAÇÃO DO CÓDIGO

A aplicação se torna uma interface com os métodos a serem implementados.

Criamos uma classe para o adaptador, que implementa a interface da aplicação e possui uma instância da biblioteca, define as classes da interface de aplicação e um método privado para converter dados XML em JSON. Note que este método é chamado nos demais para converter os tipos dos dados e executar o método da biblioteca de componentes.

Enfim, podemos instanciar o adaptador e passar os dados em formato XML para seus métodos.