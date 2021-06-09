// SECTION Conteudo

/* NOTE Seguintes propriedades
parentNode : retorna o nó pai.
parentElement : retorna o elemento pai.
childNodes : retorna um HTMLCollection com todos os nós filhos
children : retorna um HTMLCollection com todos os elementos filhos
firstChild : retorna o primeiro nó filho
firstElementChild : retorna o primeiro elemento filho
lastChild : retorna o último nó filho
lastElementChild : retorna o último elemento filho
nextSibling : retorna o próximo nó.
nextElementSibling : retorna o próximo elemento.
previousSibling : retorna o nó anterior.
previousElementSibling : retorna o elemento anterior.

*/ 
// TODO Acesse o elemento elementoOndeVoceEsta.
console.log(document.querySelector('#elementoOndeVoceEsta'));

// TODO Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.querySelector('#elementoOndeVoceEsta').parentElement.style.backgroundColor = 'red';

// TODO Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.querySelector('#elementoOndeVoceEsta').children[0].textContent = 'Primeiro filho do filho usando children de #elementoOndeVoceEsta'

// TODO Acesse o primeiroFilho a partir de pai .
console.log(document.querySelector('#pai').children[0]);

// TODO Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
console.log(document.querySelector('#elementoOndeVoceEsta').children[0]);

// TODO Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
console.log(document.querySelector('#elementoOndeVoceEsta').children[0]);

// TODO Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling.textContent);
// TODO Agora acesse o terceiroFilho a partir de pai .
console.log(document.querySelector('#pai').children[2])

let el = document.createElement('div');
el.innerText = 'Elemento dinamico como irmão';
// TODO Crie um irmão para elementoOndeVoceEsta.
let elOnde = document.querySelector('#elementoOndeVoceEsta');
elOnde.parentNode.insertBefore(el, elOnde.nextSibling);
// TODO Crie um filho para elementoOndeVoceEsta .
let elFilho = document.createElement('div');
elFilho.innerText = 'Elemento dinamico como filho';
elOnde.appendChild(elFilho);

// TODO Crie um filho para primeiroFilhoDoFilho .
document.querySelector('#primeiroFilhoDoFilho').appendChild(elFilho);

// TODO A partir desse filho criado, acesse terceiroFilho .
console.log(elFilho.parentNode.parentNode.parentNode.children[3]);

// TODO Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
var childrensOfpaiDoPai = [
    document.querySelector('#paiDoPai').children[0].children[0],
    document.querySelector('#paiDoPai').children[0].children[2],
    document.querySelector('#paiDoPai').children[0].children[3],
    document.querySelector('#paiDoPai').children[0].children[4],
    document.querySelector('#paiDoPai').children[0].children[1].children[1],
    document.querySelector('#paiDoPai').children[0].childNodes[5]
]


setTimeout(() => {
childrensOfpaiDoPai.forEach(element => {
    element.remove();
})
}, 10000);
// !SECTION
