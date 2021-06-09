// SECTION Objetos e Funções
// SECTION Conteudo

// NOTE Objetos
console.log("Objetos")
// TODO Crie um objeto player contendo as variáveis listadas abaixo.
var player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
        bronze: 0
    }
}

console.table(player);

// TODO Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`);

// TODO Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

// TODO Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes`);

// TODO Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata e ${player.medals.bronze} de bronze.`);

// NOTE For/In
console.log("\nFor/In")
// ANCHOR Vídeo
let pizzas = {
    // CHAVE : VALOR
    sabor: "Palmito",
    preco: 39.90,
    bordaCatupiry:  true,
}

for(let key in pizzas){
    console.log(key);
}


let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

// !SECTION


// !SECTION
