const prevDisplay = document.querySelector('.prev-display');
const currDisplay = document.querySelector('.curr-display');
const operands = document.querySelectorAll('.operands');
const operators = document.querySelector('.operators');
const clearBtn = document.querySelector('.clear-sign');
const deleteBtn = document.querySelector('.delete-sign');
const equalBtn = document.querySelector('.equal-sign');


//variables 
let operandsA = 0;
let operandsB = 0;
let operatorSign = null;

let currNumber = currDisplay;




//make operands work

function submitOperands() {
    operands.forEach((operand) => {
        operand.addEventListener('click', ()=>{
            // console.log(operand.textContent);
            currDisplay.textContent += operand.textContent;
            console.log(currNumber);
        })
    })
}
submitOperands();