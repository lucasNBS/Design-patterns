# OBSERVER - Behavioral Pattern

Definir uma dependência de um para muitos entre objetos de forma que quando um deles mude, os demais também mudem.

## EXEMPLO

Considere uma loja. Sempre que há uma nova promoção, esta loja notifica seus clientes sobre o novo produto. Esta notificação é enviada apenas aos clientes que escolherem recebê-las e é feita via e-mail.

Pode ser simples criar este tipo de funcionalidade quando há apenas um meio de envio, mas e se futuramente o usuário puder escolher entre receber a notificação via e-mail ou pelo aplicativo da loja? Como expandir essa lógica de forma simples?

O padrão Observer resolve esse tipo de problema.

Neste cenário, criamos uma classe para a loja, uma para a notificação via e-mail, uma outra para a notificação via aplicativo e uma última que gerencia o sistema de notificação. Assim, quando a loja liberar uma nova promoção, todos os usuários inscritos no sistema serão notificados.

## EXPLICAÇÃO DO CÓDIGO

Criamos uma interface para a notificação, com o método para notificar o usuário.

Criamos uma classe para cada tipo de notificação, implementando o método de notificar.

Criamos uma classe para o sistema de notificação, que mantem uma lista dos usuários inscritos e possui os métodos para inscrevê-los, desinscrevê-los e os notificar.

Criamos a classe da loja, onde instanciamos o sistema de notificação.

Finalmente, podemos instanciar a loja e as notificações, adicionar as notificações ao serviço e, sempre que uma promoção nova surgir, os usuários serão notificados.