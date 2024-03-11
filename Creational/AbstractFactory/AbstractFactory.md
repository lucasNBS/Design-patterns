# ABSTRACT FACTORY - Creational Pattern

Fornecer uma interface para a criação de famílias de objetos relacionados sem especificar suas classes concretas.

## EXEMPLO

Considere uma empresa que fabrica peças de computador.

Com o padrão Factory, pode ser fácil implementar a lógica para fabricar, por exemplo, um monitor de marcas diferentes; porém, ao tentar adicionar uma placa de vídeo que também possua marcas diferentes, o código pode acabar se tornando complexo demais.

O padrão Abstract Factory é feito para solucionar esse tipo de problema.

Ao invés de tentar generalizar os produtos produzidos, cada produto é separado em sua própria interface, resultando na criação de classes novas que a implementem de acordo com cada tipo do produto e na adição de um método para criar este novo produto.

## EXPLICAÇÃO DO CÓDIGO

O monitor e a placa de vídeo se tornam interfaces com o método de montagem a ser criado pelas classes que os implementarem.

Cada tipo de monitor e placa de vídeo se torna uma classe própria que implementa a interface de monitor ou placa de vídeo e cria seu próprio método de montagem.

A empresa se torna uma classe abstrata com os métodos abstratos para criar um monitor e uma placa de vídeo.

Por fom, para cada tipo de monitor ou placa de vídeo, há um tipo de fabricadora que o produz com a sua própria implementação do método para criar monitor ou placa de vídeo.