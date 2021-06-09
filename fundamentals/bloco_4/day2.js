// SECTION 4.2 - Array e Loop For 
/* NOTE IMPORTANTE 
Embora seja um recurso da linguagem, o uso do operador de incremento ( ++ )
não é recomendado. O maior problema é que,
embora seu uso principal esteja na geração de um side effect,
esse operador sempre irá retornar algum valor e, pra piorar,
as expressões ( ++x ) e ( x++ ), embora sejam facilmente confundidas
por usar o mesmo operador e possuir o mesmo side effect, retornam valores diferentes.
+= 1 substitui completamente o ++ */


// SECTION Conteúdo
// NOTE Parte I - Array
// Obtenha o valor "Serviços" do array menu :
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
console.log(menuServices);

// Procure o índice do valor "Portfólio" do array menu :
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

// Adicione o valor "Contato" no final do array menu :
menu.push('Contato');
console.log(menu)

// NOTE PARTE II - For
let cars = ['Saab', 'Volvo', 'BMW'];
console.log("\nLista de carros");
for(let index = 0; index < cars.length; index += 1){
    console.log(cars[index]);
}

// Utilize o for para imprimir os elementos da lista groceryList com o console.log() :
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
console.log("\nLista de compras")
for(let index = 0; index < groceryList.length; index += 1){
    console.log(groceryList[index]);
}

// NOTE PARTE III - For/of
// NOTE Com a chegada do ES6, temos o for/of que cria loops iteráveis
let numbers = [1, 2, 3, 4, 5];
console.log("\n");

for(let number of numbers){
    console.log(number);
}

let word = "Trybe";
console.log("\n");

for(let letter of word){
    console.log(letter);
}

let arrayOfNumbers = [10, 20, 30];
console.log("\n");

for(let sum of arrayOfNumbers){
    sum += 1;
    console.log(sum);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
console.log("\n");
for(let name of names){
    console.log(name);
}

// !SECTION
// SECTION Exercício I
// 
// TODO Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// TODO Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// TODO Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
// TODO Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// TODO Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// TODO Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// TODO Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// TODO Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
// TODO Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
// NOTE Resultado
{
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    console.log("\nExercício 1\n");
    for(let number of numbers){
        console.log(number);
    }

    console.log("\nExercício 2\n");
    // LINK https://stackoverflow.com/questions/3762589/fastest-javascript-summation
    // NOTE Foi declarado duas variaveis, como retorna o tamanho do array apenas uma vez, isso reduz de ficar pegando o valor a cada iteração.
    let soma = 0;
    for(let i = 0, n = numbers.length; i < n; i += 1){
        soma += numbers[i];
    }
    console.log("Total:", soma);

    console.log("\nExercício 3\n");
    let mediaAritmetica = 0;
    for(let i = 0, n = numbers.length; i < n; i += 1){
        mediaAritmetica += numbers[i];
    }
    mediaAritmetica = mediaAritmetica / numbers.length;
    console.log("Média aritmética:", mediaAritmetica);

    console.log("\nExercício 4\n");
    if(mediaAritmetica > 20) console.log("valor maior que 20")
    else console.log("valor menor ou igual a 20")

    console.log("\nExercício 5\n");
    let maior = 0;
    for(let i = 0; i < numbers.length; i += 1){
        if(numbers[i] > maior) maior = numbers[i];
        numbers[i] = maior;
    }
    console.log("O maior número é:", maior);

    console.log("\nExercício 6\n");
    for(let n of numbers){
        if(n )
    }
}


// !SECTION

// !SECTION