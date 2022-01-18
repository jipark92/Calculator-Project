const display = document.querySelector('#display-number');

const equalSign = document.querySelector('#equal-sign');
const plusSign = document.querySelector('#plus-sign');
const minusSign = document.querySelector('#minus-sign');
const multiplySign = document.querySelector('#multiply-sign');
const divideSign = document.querySelector('#divide-sign');

const btnOne = document.querySelector('#btn-one');
const btnTwo = document.querySelector('#btn-two');
const btnThree = document.querySelector('#btn-three');
const btnFour = document.querySelector('#btn-four');
const btnFive = document.querySelector('#btn-five');
const btnSix = document.querySelector('#btn-six');
const btnSeven = document.querySelector('#btn-seven');
const btnEight = document.querySelector('#btn-eight');
const btnNine = document.querySelector('#btn-nine');
const btnZero = document.querySelector('#btn-zero');
const btnClear = document.querySelector('#btn-clear');

 




function operate (){
    plusSign.addEventListener('click', ()=> {
        display.textContent = ' + ' ;
    }),

    minusSign.addEventListener('click', ()=> {
        display.textContent =  '-' ;
    }),

    multiplySign.addEventListener('click', ()=> {
        display.textContent = "x" ;
    }),

    divideSign.addEventListener('click', ()=> {
        display.textContent = "/" ;
    }),

    equalSign.addEventListener('click', ()=> {
        display.textContent = '=';
    })

}

operate();

function clear(){
    btnClear.addEventListener('click', ()=> {
        display.textContent = '';
    })
}
clear();

function numberPads(){
    btnOne.addEventListener('click', ()=> {
        display.textContent = "1";
    }),

    btnTwo.addEventListener('click', ()=> {
        display.textContent = "2";
    }),

    btnThree.addEventListener('click', ()=> {
        display.textContent = "3";
    }),

    btnFour.addEventListener('click', ()=> {
        display.textContent = "4";
    }),

    btnFive.addEventListener('click', ()=> {
        display.textContent = "5";
    }),

    btnSix.addEventListener('click', ()=> {
        display.textContent = "6";
    }),
    btnSeven.addEventListener('click', ()=> {
        display.textContent = "7";
    }),
    btnEight.addEventListener('click', ()=> {
        display.textContent = "8";
    }),

    btnNine.addEventListener('click', ()=> {
        display.textContent = "9";
    }),

    btnZero.addEventListener('click', ()=> {
        display.textContent = "0";
    })
}
numberPads();


let result = "" ;
let number1 = "";
let number2 = "";
let operator = ['+', '-', '*', '/'];
/*


function totalResult(){
    if (operator === '+')
        result = number1 + number2;
    }
    else if (operator =='-'){
        result = number1 - number2;
    }
    else if (operator === 'x'){
        result = number1 * number2;
    }
    else {
        result = number1 / number2;
    }
*/

//writing down the logic
//when a number is pressed, assign it to a variable
//then operator is pressed, assign the operator next to the variable
//then press another number to assign it to second variable
//example: so it shows up as "number1 + number2 = result variable"
//finally, press the equal sign to get total of 2 numbers and display
    //it on the calculator.

