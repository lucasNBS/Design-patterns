# DECORATOR - Structural Pattern

Agregar responsabilidades a um objeto dinamicamente.

## EXEMPLO

Considere uma aplicação que envia notificações aos seus usuários.

Inicialmente, esta aplicação envia um e-mail aos usuários. Em uma atualização, ela passa a poder enviar também uma mensagem no Facebook. Em uma outra, para o Whatsapp, e assim por diante. Porém, caso em algum momento seja decidido que esta aplicação deva conseguir enviar essas notificações em vários locais ao mesmo tempo, como ficaria esta implementação? Em um equema comum baseado em herança, classes diferentes seriam criadas para cada tipo de envio, fazendo com que para cada combinação, uma nova classe tenha de ser criada também.

O padrão Decorator resolve esse tipo de problema.

Ao invés de criar uma classe para cada envio e suas combinações, uma classe abstrata base e uma classe para cada envio são criadas, permitindo que elas sejam compostas umas nas outras sem ter de criar classe próprias para combiná-las.

## EXPLICAÇÃO DO CÓDIGO

Criamos uma interface base para a notificação com seus métodos.

Criamos uma classe para a notificação padrão enviada por e-mail, com os métodos da interface de notificação implementados.

Criamos uma classe abstrata para o decorator de notificação, também implementando a interface de notificação. Note a propriedade wrapped e como os seus métodos são executados dentro dos métodos da classe.

Criamos as classes de decorator do Facebook e Whatsapp, herdando a classe abstrata do decorator de notificação. Note como os métodos destas classes executam sempre o respectivo método da classe mãe.

Por fim, conseguimos criar uma instância de notificação e, opcionalmente, envolvê-la em instâncias do decorator do Facebook ou Whatsapp, fazendo com que a notificação seja enviado em todos aqueles chamados.