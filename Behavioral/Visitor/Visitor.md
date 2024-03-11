# VISITOR - Behavioral Pattern

Separar um algoritmo ou função do objeto que o opera.

## EXEMPLO

Considere um sistema de seguro que possui vários tipos de clientes, como bancos e companhias.

Considere agora, que este sistema implementará uma nova funcionalidade para enviar e-mails a todos os clientes, sendo que o conteúdo do e-mail será definido pelo tipo de cliente. Uma forma de implementar isso é criar o método de envio dentro de cada tipo de cliente, porém isso viola o princípio do aberto/fechado, uma vez que modificações no método de uma classe pode ter de afetar as demais.

O padrão Visitor resolve esse tipo de problema.

Ao invés de definir o método de envio de e-mail na classe do cliente, uma classe própria para essa funcionalidade é criada e ligada a cada tipo de cliente.

## EXPLICAÇÃO DO CÓDIGO

Criamos a interface do visitor, com os métodos para enviar o e-mail para cada tipo de cliente.

Criamos a classe do visitor com a implementação dos métodos de envio de e-mail e um método para enviar e-mail para todos os clientes.

Criamos a classe abstrata do cliente. Note como um dos métodos padrão que recebe um visitor.

Criamos a classe de cada tipo de cliente, implementando seus métodos. Perceba como o método que recebe o visitor executa o método para enviar o e-mail correto.

Por fim, podemos instanciar os clientes, passá-los a uma instância do visitor e executar o método de envio de e-mail. Dessa forma, cada cliente receberá o e-mail correto.