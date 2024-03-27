// 1. Declarar uma variável com o seu nome
var nome1 = "Lucas";
// 2. Declarar uma variável com o seu sobrenome 
var nome2 = "Milchert";
// 3. Declarar uma variável nomeCompleto atribuindo os valores das variaveis nome e sobrenome 
var nomecompleto = nome1+nome2;
// 4. Declarar uma variável com a sua idade 
let idade = 17;
// 5. Declarar uma variável com a sua comida favorita e não atribuir valor
var Pizza = null;
// 6. Atribuir valor a sua comida favorita 
var pizza = 2;
// 7. Verifique o erro na variavel criada abaixo que utiliza Template String:
const frase = `Olá, eu sou ${nomecompleto} e tenho ${idade} anos`;
console.log(frase);

// 8. Verifique o tipo da variável que contém o seu nome. Dica: console.log(typeof nomeDaVariavel)
console.log(typeof nome1)
//e variavel String

// Dica saber mais sobre operadores: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators
// 9. Qual o resultado da seguinte expressão?
const total = 10 + 5 * 2 / 2 + 20;
console.log(total);


// 10. Somar a string '200' com o número 50 e retornar 250
const soma = +"200" + 50
const convert1 = Number("250");
const convert2 = parseInt("250");

console.log(soma, convert1, convert2);
// 11. Incremente o número 5 e retorne o seu valor incrementado
let x = 5;
let incremento = x +=1
console.log(incremento);
{
// 12. Verifique se a sua idade é maior do que a de algum parente, dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let idade = 17;
if (idade >= 35) {
    console.log("você é Maior")
}
else [
    console.log("Você é menor")
]
}

// 13. Qual valor é retornado na seguinte expressão?
const expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)
//ele está retornando o valor 3 por que ele está calculando 5-2 = 3

// 14. O que irá aparecer no console?

if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
//irar aparecer falso

// 15. O que irá aparecer no console?

if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
//irar aparecer cao

// 16. Crie uma função que receba como parametro o peso e a altura, e retorne o imc. Dica: calculo para imc: peso / (altura ** 2);
{
let altura = 1.60;
let peso = 85;
let imc = peso / (altura **2)
console.log("seu imc é" , imc);
}
// 17. Crie uma função que verifica se um número é par, e retorne uma mensagem contendo o numero escolhido e se é ou nao par.
function parouimpar(num) {
    if (num % 2 === 0) {
        return "o numero "+ num + "é par"
    } else {
        return "O numero "+ num + "Não é PAR"
    }
}
let resultado = parouimpar(25);
console.log(resultado);






// 18. Crie uma função que retorne o tipo de dado do argumento passado nela. Dica use o typeof para verificar o tipo
function returnType(argument) {
    return typeof argument;
  }
  
  console.log(returnType(42)); // retorna "number"
  console.log(returnType("hello")); // retorna "string"
  console.log(returnType(true)); // retorna "boolean"
  console.log(returnType({})); // retorna "object"

// Dica: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// 19. Crie uma função que receba um nome e retorne uma mensagem de saudação para o usuario (bom dia/boa tarde/boa noite fulano!) de acordo com o horario
function saudacao(nome) {
    const agora = new Date();
    const hora = agora.getHours();
  
    if (hora >= 5 && hora < 12) {
      return "Bom dia, " + nome + "!";
    } else if (hora >= 12 && hora < 18) {
      return "Boa tarde, " + nome + "!";
    } else {
      return "Boa noite, " + nome + "!";
    }
  }
  
  const nomeUsuario = "Fulano";
  console.log(saudacao(nomeUsuario));
  
// 20. Crie uma função que me informe a data de hoje quando chamada
function getDataDeHoje() {
    const hoje = new Date();
    return hoje.toDateString();
  }
  
  console.log(getDataDeHoje());