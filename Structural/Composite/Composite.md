# COMPOSITE - Structural Pattern

Compor objetos em estruturas de árvore e trabalhar com estas estruturas como objetos individuais.

## EXEMPLO

Considere um sistema de entrega de produtos.

Neste sistema, uma caixa pode conter produtos ou outras caixas menores dentro dela, que por sua vez também podem conter outros produtos ou caixas ainda menores. Esse sistema deve possuir um método para calcular o preço de uma entrega, analisando o preço dos produtos e somando-os. Apesar da simplicidade da ideia, a implementação de algo assim é trabalhosa, envolvendo recursividade.

O padrão Composite resolve esse tipo de problema.

Neste cenário, criamos uma classe de composição de caixas que recebe outras caixas ou produtos, os quais possuem um método para retornar seu preço. Assim, esta classe é capaz de percorrer todos os produtos e caixas dentro dela e somar o preço da entrega como um todo.

## EXPLICAÇÃO DO CÓDIGO

A caixa se torna uma interface com o método para calcular o preço.

A classe de composição de caixas implementa a interface caixa e define o método para calcular o preço passando por todos os outros objetos guardados dentro dela e somando seus preços.

Definimos uma classe abstrata para os produtos, com suas propriedades base e o método para retornar seu preço.

Criamos uma classe para cada tipo de produto que herda da classe abstrata produto.

Definimos uma classe para o sistema de entrega, com uma instância de caixa, um método para criar uma nova entrega e um outro para calcular o preço total da entrega.

Finalmente, instanciamos o sistema de entrega, criamos uma nova entrega e colocamos todos os produtos da entrega - podendo estes serem produtos ou outras caixas com produtos. Assim, conseguimos simplesmente executar o método para calcular o valor total da entrega.