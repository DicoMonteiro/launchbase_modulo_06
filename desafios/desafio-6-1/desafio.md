## Desafio 6-1: Mini desafios
    “Sua única limitação é você mesmo!”
    Made by Rocketseat License


🚀 Sobre o desafio
Essa é uma sequência de mini desafios para que você fortaleça conceitos importantes do Módulo 6:

[] DBML;
[] Footer;
[] Funções Assíncronas;
[] Máscaras de Input.

## DBML

Crie no site dbdiagram.io a modelagem de um banco de dados que represente um sistema de locação de carros. Respeite as seguintes regras:

[x] O BD deve possuir no mínimo 6 tabelas:
    [x] customers - clientes que alugam os carros;
    [x] agencies - agências que locam os carros;
    [x] addresses - endereço da agência (rua, bairro, etc);
    [x] cars - informações específicas do carro (cor, placa, etc);
    [x] models - informações gerais do carro (marca, modelo, etc);
    [x] orders - pedidos de locação.
[x] Todos as tabelas devem possuir uma primary key;
[x] Todas as tabelas precisam possuir, no mínimo, 5 campos (exceto a tabela resultante do relacionamento n:m);
[x] O relacionamento entre agência e endereço deve ser 1:1;
[x] O relacionamento entre modelo e carro deve ser 1:n;
[x] O relacionamento entre cliente e pedido deve ser 1:n;
[x] O relacionamento entre agência e pedido deve ser 1:n;
[x] O relacionamento entre carro e pedido deve ser n:m (um mesmo pedido pode abranger múltiplos carros e o mesmo carro pode ter sido locado mais de uma vez);

Dica: caso esteja com dúvidas sobre como funciona cada tipo de relacionamento, dê uma olhada aqui

## Footer

Implemente um footer no resultado final do desafio do módulo 3. Esse elemento deve conter as seguintes informações:
<!-- Não foi implementado conforme o desafio do módulo 3, porque não foi encontrado o mesmo para footer -->
[x] Endereço da empresa (Residencial Acalanto - R. Guilherme Gemballa, 260 - Sala 3 - Jardim América, Rio do Sul - SC, 89160-188);
[x] Direitos autorais (Rocketseat © 2020 - Todos os direitos reservados).

## Funções assíncronas

[x] Implemente uma função que receba como parâmetro um número e, após x milissegundos (dentre um intervalo de 1 a 100 ms. Utilize o setTimeout e as funções floor e random da biblioteca Math), mostre no console o dobro do parâmetro recebido. Em seguida, chame essa função 5 vezes. Ex.:

function printDouble(number){
  setTimeout(
    () => {
      console.log(number * 2)
    }, 
    Math.floor(Math.random() * 100) + 1
  )
}

function printAll(){
  printDouble(5)
  printDouble(10)
  printDouble(22)
  printDouble(1)
  printDouble(89)
}

printAll()

[x] Sem realizar nenhum tratamento, é fácil perceber que a ordem dos valores mostrados no console ao chamar a função printAll() é aleatória e não respeita a ordem de chamada das funções. Portanto, para resolver esse problema, trate o assincronismo do setTimeout utilizando callback, Promise e async/await.

(Dica: no tratamento com Promise, faça o retorno de uma nova Promise e utilize o parâmetro resolve).

[x] Agora, altere um pouco sua função. Serão passados dois parâmetros, o primeiro será o valor a ser dobrado e o segundo o valor a ser somado ao dobro do primeiro. Além disso, em vez de mostrar o resultado no console, retorne-o e o repasse na chamada da função seguinte, por exemplo:

let result;

result = funcao(5, 0); // retorna 10
result = funcao(12, result); // retorna 34
result = funcao(2, result); // retorna 38

[x] Por fim, faça novamente o tratamento desse assincronismo utilizando utilizando callback, Promise e async/await.

## Máscaras de input

[x] Implementar duas máscaras de input:

[x] Número percentual com no mínimo duas casas após a vírgula e no máximo 4 (Utilize o NumberFormat da biblioteca Intl);
[x] CPF (xxx.xxx.xxx-xx).

## Estilização

[x] Você tem liberdade para escolher a estilização que preferir para esse desafio.