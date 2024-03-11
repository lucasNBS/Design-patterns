# COMMAND - Behavioral Pattern

Encapsular uma solicitação como um objeto, permitindo parametrizar clientes com diferentes solicitações, enfileirar ou fazer o registro e suportar operações que possam ser desfeitas.

## EXEMPLO

Considere uma aplicação que controla as luzes nos cômodos de uma casa.

Há uma classe abstrata para definir os cômodos, cada cômodo tem sua classe e a classe casa recebe os cômodos como propriedade. Uma das formas de implementar este sistema de controle de luzes é definir que cada quarto terá uma luz como propriedade e um método para poder ligar ou desligá-la. Um problema disso, no entanto, é que os cômodos terão uma funcionalidade adicional além da sua principal, o que viola o princípio da resposabilidade única.

O padrão Command resolve esse tipo de problema.

Ao invés de definir uma propriedade com os métodos para alterá-la, define-se uma propriedade que encapsula os métodos para alterar uma outra propriedade.

## EXPLICAÇÃO DO CÓDIGO

Criamos uma class para a luz, com o método para ligar e desligar

Criamos uma interface para o command com um método para o executar

Criamos uma classe para o comando de ligar/desligar a luz de um cômodo. Perceba como esta classe contem tanto a propriedade luz como os métodos que interagem com ela.

Criamos a classe abstrata para o cômodo, possuindo como propriedade um comando e métodos para o configurar e executar.

Criamos uma classe para cada cômodo.

Finalmente, podemos instanciar um cômodo, uma luz e um comando, ligá-los uns com os outros e fazê-los interagir.