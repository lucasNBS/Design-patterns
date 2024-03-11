# SINGLETON - Creational Pattern

Garantir que uma classe possua apenas uma instância e fornecer um ponto global de acesso a esta.

## EXEMPLO

Considere a instanciação de um banco de dados.

O banco de dados é definido em uma classe e pode ser instanciado no código para ser usado. Porém há um problema, idealmente o banco de dados usado em todos os pontos do código deve ser o mesmo, de forma que todos os dados fiquem salvos em apenas um lugar.

O padrão Singleton resolve esse tipo de problema.

Ao invés de criar uma instância do banco sempre que for utilizá-lo, criamos ele apenas uma vez e referenciamos este mesmo objeto em todos os pontos que o usamos.

## EXPLICAÇÃO DO CÓDIGO

O banco de dados se torna uma classe com suas propriedades padrão e uma outra que guarda sua instância. Essa classe possui um método para pegar essa instância, criando-a caso não exista e retornando-a caso exista. Note que o construtor da classe é privado, ou seja, não é possível instanciar o banco de dados diretamente, apenas com o método para buscar sua instância.

Assim, pode instanciar o banco de dados na primeira vez que o consultamos e buscar este mesmo objeto sempre que o utilizamos.