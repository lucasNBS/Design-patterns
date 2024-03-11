# CHAIN OF RESPONSABILITY - Behavioral Pattern

Encadear objetos receptores, passando uma solicitação ao longo de uma cadeia até que algum objeto a trate.

## EXEMPLO

Considere um serviço de autenticação de usuário.

Um usuário se cadastra definindo um nome e uma senha e sempre que precisar realizar o login, ele fornece este mesmo nome e esta mesma senha. A nível de código, porém, esta validação é complexa de se fazer. Primeiro é preciso verificar se o nome do usuário está cadastrado, depois verficar se a senha está correta e depois verificar suas permissões dentro de um sistema; sendo que em cada um destes estágios o usuário deve também receber um feedback a respeito de possíveis erros. Não somente, o ideal é que cada uma destas etapas seja responsável por sua parte somente, de forma que as funções sejam independentes entre si, mas capazes de agir em conjunto, mantendo o código organizado.

O padrão Chain of Responsability resolve esse tipo de problema.

Neste cenário, criamos uma classe asbtrata base para as verificações e uma outra para cada tipo de verificação, posteriormente ligando-as entre si, de forma que uma validação caminhe pela cadeia de verificações até uma delas retornar algum resultado.

## EXPLICAÇÃO DO CÓDIGO

Criamos uma classe abstrata para as verificações, com o método abstrata para verificar algo e os métodos para atrelar uma verificação à outra e para executar a verificação seguinte.

Criamos então uma classe para cada verificação, com cada uma delas realizando sua própria verificação e executando a verificação seguinte.

Criamos a classe do serviço de autenticação, que recebe uma propriedade do tipo verificação e a executa para validar o usuário.

Por fim, podemos instanciar as verificações, ligá-las umas as outras, instanciar o serviço de autenticação e passar a cadeia de verificações a ele, fazendo com que cada uma delas realize sua própria verificação e retore quaisquer respostas necessárias.