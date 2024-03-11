# MEMENTO - Behavioral Pattern

Capturar e externar o estado interno de um objeto - respeitando o encapsulamento - de forma que o objeto possa ser restaurado a este estado depois

## EXEMPLO

Considere um editor de texto.

O usuário pode digitar e editar o o campo de texto da forma que preferir. Adicionalmente, ele também pode desfazer sua última ação, fazendo com que o texto retorne ao que estava antes da última palavra digitada. Para criar esta funcionalidade, no entanto, uma outra classe pode ter de invadir o estado do editor para armazená-lo e modificá-lo, quebrando o encapsulamento.

O padrão Memento resolve esse tipo de problema.

Ao invés de fazer com que outra classe gerencie a criação de cópias anteriores do texto, o próprio campo de texto se torna o responsável por isso, visto que já possui acesso a suas propriedades.

## EXPLICAÇÃO DO CÓDIGO

Criamos uma classe para o editor de texto, com uma instância do campo de texto e seu histórico de versões como propriedades. Note como o método de escrita sempre executa o método para criar um memento do texto e o adiciona ao histórico de versões, e como o método de desfazer remove a última alteração e a restaura.

Criamos uma classe para o campo de texto, com os métodos para criar um memento seu e outro para restaurar o estado salvo em um memento.

Criamos a classe do memento, com as mesmas propriedades do campo de texto e um método para retornar o texto salvo.

Enfim, instanciamos o editor, escrevemos nele, e, a qualquer momento, podemos desfazer a última alteração.