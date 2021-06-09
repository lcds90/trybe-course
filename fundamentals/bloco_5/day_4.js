window.onload = function () {
    let main = document.getElementById('main');
    let btnChangeBackgroundColor = document.querySelector('#changeBackground');
    let btnChangeTextColor = document.querySelector('#changeTextColor');
    let btnChangeFontFamily = document.querySelector('#changeFontFamily');
    let btnFontSizePlus = document.querySelector("#fontSizePlus");
    let btnFontSizeMinus = document.querySelector("#fontSizeMinus");
    let btnLineHeightPlus = document.querySelector("#lineHeightPlus");
    let btnLineHeightMinus = document.querySelector("#lineHeightMinus");

    btnChangeBackgroundColor.onclick = function () {
        changeBackground('#pickColor', main);
    }

    btnChangeTextColor.onclick = function () {
        changeTextcolor('#pickColor', main);
    }

    btnChangeFontFamily.onclick = function() {
        changeFontFamily('#fontFamilys', main);
    }


    btnFontSizePlus.onclick = function() {
        changeFontSize('plus', main);
    }

    btnFontSizeMinus.onclick = function() {
        changeFontSize('minus', main);
    }

    btnLineHeightPlus.onclick = function() {
        changeLineHeight('plus', main);
    }


    btnLineHeightMinus.onclick = function() {
        changeLineHeight('minus', main);
    }
}

function changeBackground(inputColor, div) {
    let input = document.querySelector(inputColor);
    div.style.backgroundColor = input.value;
}

function changeTextcolor(inputColor, div){
    let input = document.querySelector(inputColor);
    div.style.color = input.value;
}

function changeFontFamily(inputFontFamily, div){
    let input = document.querySelector(inputFontFamily);
    div.style.fontFamily = input.value;
}

function changeFontSize(operator, div){
    if(operator == "plus"){
        let fontSize = Number(window.getComputedStyle(div).fontSize.split('px')[0]);
        div.style.fontSize = `${fontSize += 1}px`;
    }

    if(operator == "minus"){
        let fontSize = Number(window.getComputedStyle(div).fontSize.split('px')[0]);
        div.style.fontSize = `${fontSize -= 1}px`;
    }
}


function changeLineHeight(operator, div){
    if(operator == "plus"){
        let lineHeight = window.getComputedStyle(div).lineHeight === "normal" ? 16 : Number(window.getComputedStyle(div).lineHeight.split('px')[0]);
        console.log(lineHeight);
        div.style.lineHeight = `${lineHeight += 1}px`;
        // console.log(div.style.lineHeight);
    }

    if(operator == "minus"){
        let lineHeight = window.getComputedStyle(div).lineHeight === "normal" ? 16 : Number(window.getComputedStyle(div).lineHeight.split('px')[0]);
        console.log(lineHeight);
        div.style.lineHeight = `${lineHeight -= 1}px`;
        // console.log(div.style.lineHeight);
    }
}
