# FACTORY - Creational Pattern

Definir uma interface para criar um objeto, mas deixar que as subclasses decidam qual classe instanciar.

## EXEMPLO

Considere um restaurante que prepara haburgueres.

Pode ser fácil implementar o código para gerar alguns poucos tipos diferentes de hamburgueres de acordo com o que foi pedido; porém, conforme a aplicação escala, esse código se torna mais complexo e menos flexível, de forma que é necessário alterar a função que verifica o tipo de hambúrguer pedido sempre que um novo tipo for adicionado ao menu.

O padrão Factory é feito para solucionar esse tipo de problema.

Ao invés de criar um código dentro de uma mesma classe ou função, tanto o restaurante como o hambúrguer são separados em estruturas diferentes, servindo como moldes para as classes que serão usadas.

## EXPLICAÇÃO DO CÓDIGO

O hambúrguer se torna uma interface com o método de preparo a ser criado pelas classes que o implementarem.

Cada tipo de hambúrguer se torna uma classe própria que implementa a interface de hambúrguer e cria seu próprio método de preparo.

O restaurante se torna uma classe abstrata com um método padrão de pedir um hambúrguer e um método abstrato para criá-lo.

E por fim, para pedir um tipo de hambúrguer, precisamos da classe filha de restaurante correspondente. Ou seja, para cada tipo de hambúrguer, há um tipo de restaurante que o serve com a sua própria implementação do método para criar hambúrguer.