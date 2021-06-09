const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.


// TODO 1 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// TODO 1.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function toggleClassTech(event){
    divUm.classList.remove('tech');
    divDois.classList.remove('tech');
    divTres.classList.remove('tech');
    event.target.classList.toggle('tech');   
}

['mouseenter', 'moumouseleave'].forEach((event) => {
    divUm.addEventListener(event, toggleClassTech);
    divDois.addEventListener(event, toggleClassTech);
    divTres.addEventListener(event, toggleClassTech);
})

// TODO 2 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
function changeTextWithTech(){
    if(divUm.classList.contains('tech')) divUm.innerHTML = input.value;
    if(divDois.classList.contains('tech')) divDois.innerHTML = input.value;
    if(divTres.classList.contains('tech')) divTres.innerHTML = input.value;
}

input.addEventListener('change', changeTextWithTech);

// TODO 3 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
// TODO 3.1. Que tal redirecionar para seu portifólio?
function addLinkToDiv(){
    window.open('https://lcds90.github.io/', '_blank');
}

myWebpage.addEventListener('dblclick', addLinkToDiv);

// TODO 4 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeToRandomColor(event){
    event.target.style.backgroundColor = getRandomColor();
}

myWebpage.addEventListener('mouseover', changeToRandomColor)