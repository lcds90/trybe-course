// LINK https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-eventos/17f2fe86-921e-4e5c-ba08-b6ac47bec409/exercicios/ca13b14b-9eca-4469-b563-dd0d846f075a/calendario-tryber/efa94376-6ec7-43ab-a83b-180060c94ea8?use_case=side_bar

function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// SECTION Exercício 1:
// TODO O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// TODO Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// TODO Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// TODO Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
function createDaysOfDecember() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let ul = document.querySelector('#days');
    for(let day of dezDaysList) {
        let li = document.createElement('li');
        li.innerHTML = day;
        li.classList.add('day')
        if(day === 4 || day === 11 || day === 18 || day === 25) {
            li.classList.add('friday')
        }
        if(day === 24 || day === 25 || day === 31) {
            li.classList.add('holiday')
        }

        ul.appendChild(li);
    }
}
createDaysOfDecember();
// !SECTION

// SECTION Exercício 2:
// TODO Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// TODO Adicione a este botão a ID "btn-holiday" .
// TODO Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function createBtn(id, text){
    let btn = document.createElement('button');
    let div = document.querySelector('.buttons-container');
    btn.setAttribute('id', id);
    btn.innerText = text;
    div.appendChild(btn);
}
createBtn('btn-holiday', 'Feriados');
// !SECTION

// SECTION Exercício 3:
// TODO Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// TODO É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
function changeHolidayDaysColors(){
    let days = document.querySelectorAll('.holiday');
    days.forEach((day) => {
        if(day.style.backgroundColor == 'green'){
            day.style.backgroundColor = 'rgb(238,238,238)';
        } else {
            day.style.backgroundColor = 'green'
        }
    });
}

document.querySelector('#btn-holiday').addEventListener('click', changeHolidayDaysColors);
// !SECTION

// SECTION Exercício 4:
// TODO Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// TODO Adicione a este botão o ID "btn-friday" .
// TODO Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
createBtn('btn-friday', 'Sexta-feira');
// !SECTION

// SECTION Exercício 5:
// TODO Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// TODO É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
function changeFridayDaysColors(){
    let days = document.querySelectorAll('.friday');
    days.forEach((day) => {
        if(day.style.backgroundColor == 'red'){
            day.style.backgroundColor = 'rgb(238,238,238)';
        } else {
            day.style.backgroundColor = 'red'
        }
    });
}
document.querySelector('#btn-friday').addEventListener('click', changeFridayDaysColors);
// !SECTION

// SECTION Exercício 6:
// TODO Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// NOTE Dica - Propriedade: event.target .
function zoomInText(event){
    event.target.style.fontSize = '50px';
}
function zoomOutText(event){
    event.target.style.fontSize = '';
}

document.querySelectorAll('.day').forEach((e) => {
    e.addEventListener('mouseenter', zoomInText);
    e.addEventListener('mouseleave', zoomOutText);
});
// !SECTION
// SECTION Exercício 7 e 8:
// TODO Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// TODO O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

// TODO Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// TODO O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// TODO O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function createTask(text, color){
    let span = document.createElement('span');
    let div = document.createElement('div');
    let divTasks = document.querySelector('.my-tasks')
    span.innerText = text;
    div.appendChild(span);
    div.classList.add('task');
    div.style.backgroundColor = color;
    divTasks.appendChild(span);
    divTasks.appendChild(div);
}
createTask('Projeto', 'green');
// !SECTION

// SECTION Exercício 9:
// TODO Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.

// TODO Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
function setSelectedTask(event){
    console.log(event.target.classList.contains('task'));
}

let getColorAttributeFromTask = document.querySelector('.task').getAttribute('style').split(':')[1].slice(1, -1);
console.log(
    getColorAttributeFromTask
    )
// !SECTION