# STATE - Behavioral Pattern

Permitir que um objeto mude seu comportamento quando seu estado interno mudar.

## EXEMPLO

Considere o funcionamento dos botões de um celular.

Quando o celular está desligado, tanto o botão principal quanto o botão de ligar/desligar o fazem ligar. Neste ponto, o celular está bloqueado e a função dos botões também mudaram: clicar no botão principal faz o celular ser desbloqueado enquanto que clicar no botão de ligar/desligar o faz desligar. E uma vez desbloqueado, os botões mudam novamente. Agora o botão principal leva o usuário para a home do celular e o botão de ligar/desligar o faz desligar. A nível de código, como uma operação como esta pode ser representada?

O padrão State resolve esse tipo de problema.

Neste cenário, criamos uma classe abstrata do estado do celular que é herdada pelas classes de cada um de seus estados, implementando suas respectivas funcionalidades, enquanto que o celular apenas armazena seu estado como propriedade.

## EXPLICAÇÃO DO CÓDIGO

Criamos uma classe para o estado do celular, com os métodos de cada botão a serem implementados por suas classes filhas e uma propriedade instância do celular.

Criamos as classes de cada estado, herdando a classe do estado e implementando cada um dos métodos.

Criamos a classe do celular, com uma instância do estado e seus próprios métodos.

Enfim, podemos instanciar o celular e, através de seu estado, conseguimos fazê-lo funcionar da forma desejada, alterando o próprio estado.