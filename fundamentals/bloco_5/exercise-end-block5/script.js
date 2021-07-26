window.onload = function () {
  let basePyramid = 9;
  let numberOfLines = (basePyramid + 1) / 2; // 5
  let controlLeft = numberOfLines; // 5
  let controlRight = numberOfLines; // 5
  createLines(numberOfLines);
  let lines = document.querySelectorAll(".line");

  updateVisit();

  fillTriangle(lines);
  identifyIfIsEven(lines);

  // Atualiza a quantidade de visitar no site, utilizando o LocalStorage
  function updateVisit() {
    let div = document.getElementById("count");
    if (localStorage === null || typeof (Storage) === 'undefined') {
      document.write("Sem suporte para Web Storage");
    }
    localStorage.count === undefined ? visitCount(div, true) : visitCount(div, false);
  }

  function visitCount(div, isFirstVisit = false){
    let count = parseInt(localStorage.count);
    isFirstVisit === false ? count+= 1 : count = 1
    localStorage.count = count;
    div.innerHTML = count;
  }

  function createLines(numberofLines) {
    for (let index = 0; index < numberofLines; index += 1) {
      let line = document.createElement("div");
      line.className = "line";
      let triangle = document.querySelector(".triangle");
      triangle.appendChild(line);
    }
  }

  // Passa por todos as linhas (div com class line) e preenche o triangulo
  function fillTriangle(lines) {
    for (let index = 0; index < lines.length; index += 1) {
      fillLine(lines[index]);
      controlRight += 1;
      controlLeft -= 1;
    }
  }

  // Cria uma caixa com base nas diferentes classes
  function createBox(className) {
    let box = document.createElement("div");
    box.className = className;
    return box;
  }

  // Preenche uma linha
  function fillLine(divLine) {
    for (let lineColumn = 1; lineColumn <= basePyramid; lineColumn += 1) {
      if (lineColumn >= controlLeft && lineColumn <= controlRight) {
        let box = createBox("box");
        divLine.appendChild(box);
      } else {
        divLine.appendChild(createBox("box-empty"));
      }
    }
  }

  function identifyIfIsEven(divLine) {
    console.log(divLine);
    for (let index = 0; index < divLine.length; index += 1) {
      if (index % 2 === 0) {
        setColorofDiv(divLine[index].children, 'box');
      }
    }
  }

  function setColorofDiv(divs, className) {
    for (let div of divs) {
      if (div.className === className) {
        div.classList.remove(className);
        div.classList.add('line-par');
      }
    }
  }

}
