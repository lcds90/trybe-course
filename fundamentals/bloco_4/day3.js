// SECTION 4.3 - Lógica de Programação 

let valor = 5, text = "";
// TODO Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .
// NOTE Minha soluções
 
console.log("Exercício 1")
if (valor > 1) {
    for (let i = 0; i < valor; i += 1) {
        text += "*";
        if(text.length != valor){
        }
    }
    for(tet)
    console.log("")
    let triangle = []
    // TODO Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
    text = "";
    for (let i = 0; i < valor; i += 1) {
        text += "*";
        triangle.push(text);
    }
    console.log("Exercício 2")
    for (let t of triangle) {
        console.log(t);
    }
    console.log("")

    // TODO Agora inverta o lado do triângulo. Por exemplo:
    let reverse = triangle;
    console.log("Exercício 3")

    for (let t of reverse) {
        if (t.length != valor) {
            t = t.split("")
            while (t.length < valor) {
                t.unshift(" ")
            }
            t = t.join("")
        }
        console.log(t)
    }

}


// NOTE Gabarito do curso
let n = 5;

// !SECTION