// TODO Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//  - document.getElementById()
//  - document.getElementsByClassName()
//  - document.getElementsByTagName()

// TODO 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function changeTextInSelectedElement(element, index, text){
    document.getElementsByTagName(element)[index].innerText = text
}
changeTextInSelectedElement('p', 0, 'quero evoluir muito daqui 2 anos!');

// TODO 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeColorToAnotherColor(div, index ,color){
    document.getElementsByClassName(div)[index].style.backgroundColor = color
}
changeColorToAnotherColor('main-content', 0, 'rgb(76, 164, 109');

// TODO 3. Crie uma função que mude a cor do quadrado vermelho para branco.
changeColorToAnotherColor('center-content', 0, 'white');

// TODO 4. Crie uma função que corrija o texto da tag <h1>.
changeTextInSelectedElement('h1', 0, 'Exercício 5 - Javascript');

// TODO 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function setTextInUppercase(element, index){
    let el = document.getElementsByTagName(element)[index];
    let string = document.getElementsByTagName(element)[index].textContent;
    el.innerHTML = string.toString().toUpperCase();
    console.log(string);
    // document.getElementsByTagName(element)[index].toString().toUpperCase();
}
setTextInUppercase('p', 0);

// TODO 6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function showContent(element){
    let content = document.getElementsByTagName(element);
    for(let index = 0; index < content.length; index += 1){
        console.log(content[index].textContent);
    }
}
showContent('p');