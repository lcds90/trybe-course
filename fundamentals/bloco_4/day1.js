// SECTION 4.1 - Javascript - Primeiros Passos

// SECTION Contéudo

// NOTE Parte II

// Crie uma constante chamada name e atribua a ela o seu nome;
const name = "Leonardo";
// Crie uma constante chamada birthCity e atribua a ela a sua cidade natal;
const birthCity = "São Paulo";
// Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu;
var birthYear = 1997
// Utilize o console.log() para imprimir as constantes e variáveis que você criou;
console.info(name, birthCity, birthYear);
// Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
birthYear = 2030;
console.info("Ano de nascimento: ", birthYear);
// Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔
// FIXME birthCity = "São Paulo" // não é válido pois não se muda valores de constantes;
// console.log(birthCity)

// NOTE Parte III

// Crie uma variável chamada base e uma variável chamada altura e atribua os seus respectivos valores: 5 e 8;
var base = 5, altura = 8;
// Crie uma variável chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
var area = base * altura;
console.info("Área: ", area);
// Crie uma variável chamada perimetro e atribua a ela a soma de todos os lados do retângulo;
var perimetro = (base + base) + (altura + altura);
console.info("Perimetro: ", perimetro);

// NOTE Parte IV
// Crie uma variável que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
// Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
// Altere o valor da nota para verificar se as condições que você implementou funcionam;

let nota = 50;

// Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:

// Se a nota for maior ou igual a 80
if (nota >= 80) console.log("Parabéns, você foi aprovada(o)!");

// Se a nota for menor que 80 e maior ou igual a 60
else if (nota < 80 && nota >= 60) console.log("Você está na nossa lista de espera");

// Se a nota for menor que 60
else console.log("Você foi reprovada(o)");

// NOTE Parte V
// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
// let statusSelectiveProcess = 'aprovada';
// let statusSelectiveProcess = 'lista';
let statusSelectiveProcess = 'reprovada';


// Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .
switch (statusSelectiveProcess) {
    case 'aprovada':
        console.log("Parabéns, você foi aprovada(o)!");
        break;

    case 'lista':
        console.log("Você está na nossa lista de espera");
        break;
    
    case 'reprovada':
        console.log("Você foi reprovada(o)");
        break;

    default:
        console.log("Não se aplica");
        break;
}


// !SECTION
// SECTION Exercícios
// Variaveis para o exercicio
let a = 25, b = 15, c = 40, d = -1;

// NOTE I
// "Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:"

// Adição (a + b)
console.log("Adição: ", a + b);

// Subtração (a - b)
console.log("Subtração: ", a - b);

// Multiplicação (a * b)
console.log("Multiplicação: ", a * b);

// Divisão (a / b)
console.log("Divisão: ", a / b);

// Módulo (a % b)
console.log("Módulo: ", a % b);

// NOTE II
// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
if(a > b) console.log("O número maior é a variavel A: ", a);
else console.log("O número maior é a variavel B: ", b)

// NOTE III
// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
if(a > b && a > c) console.log("O número maior é a variavel A: ", a);
else if (b > a && b > c) console.log("O número maior é a variavel B: ", b);
else console.log("O número maior é a variavel C: ", c);

// NOTE IV
// Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
if(d > 0) console.log("positive", d);
else console.log("negative", d);

//NOTE V
// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
let angulo1 = 60, angulo2 = 60, angulo3 = 60, angulo4 = 20, angulo5 = -20, angulo6 = 100
let angulos1 = angulo1 + angulo2 + angulo3
let angulos2 = angulo1 + angulo2 + angulo4
let angulos3 = angulo1 + angulo2 + angulo5


if(angulos1 === 180) console.log(true)
else if(angulo1 < 0 || angulo2 < 0 || angulo3 < 0) console.log("Número inválido")
else console.log(false)

if(angulos2 === 180) console.log(true)
else if(angulo1 < 0 || angulo2 < 0 || angulo4 < 0) console.log("Número inválido")
else console.log(false)

if(angulos3 === 180) console.log(true)
else if(angulo1 < 0 || angulo2 < 0 || angulo5 < 0) console.log("Número inválido")
else console.log(false)

// NOTE VI
/* 
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)
*/
let peca = "bishop"
peca = peca.toLowerCase()
switch (peca) {
    case 'king':
        console.info("Apenas em cruz")
        break;
    case 'queen':
        console.info("Todos os lados");
        break;
    case 'rook':
        console.info("");
        break;
    case 'bishop':
        console.info();
        break;
    case 'knight':
        console.info();
        break;
    case 'pawn':
        console.info()
    default:
        console.error("Peça inválida!")
        break;
}

// !SECTION

// !SECTION