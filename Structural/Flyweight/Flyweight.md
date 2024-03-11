# FLYWEIGHT - Structural Pattern

Compartilhar propriedades comuns entre objetos para suportar eficientemente o carregamento de grandes quantidades de objetos.

## EXEMPLO

Considere uma aplicação que gerencia um estoque de livros.

Esta aplicação armazena uma grande quantidade de livros, o que ocupa grande parte da memória do sistema. Mais que isso, a maior parte destes livros possuem diversas propriedades em comum, como a editora, o autor e o tipo. Assim, uma parte considerável da memória do sistema é usada para guardar dados que se repetem muitas e muitas vezes.

O padrão Flyweight resolve esse tipo de problema.

Ao invés de criar todos os livros do zero, as propriedades em comum dos livros são armazenadas em um outro objeto referenciado por uma outra propriedade do próprio livro, de forma que este único objeto possa ser usado por vários livros diferentes, economizando a memória usada.

## EXPLICAÇÃO DO CÓDIGO

Criamos uma classe para livro com suas propriedades. Perceba que propriedades cujos valores variam mais são mantidas no livro, enquanto aquelas que se repetem são levadas como propriedades de tipo do livro.

Criamos uma classe do tipo do livro, que armazena as propriedades que mais se repetem em livros.

Criamos uma classe da fábrica de livros, que possui um método para buscar um tipo de livro específico, criando-o caso não exista e trazendo o já existente caso haja.

Criamos a classe da loja, que possui um método para cadastrar livros. Note como este método primeiramente consulta os tipos de livros já existentes na fábrica de livros e depois cria o livro.

Finalmente, podemos cadastrar os diversos livros da aplicação, sendo que aqueles que possuírem as propriedades tipo, autor e editora referenciarão um único objeto.