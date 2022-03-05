const prevDisplay = document.querySelector('.prev-display');
const currDisplay = document.querySelector('.curr-display');
const operands = document.querySelectorAll('.operands');
const operators = document.querySelectorAll('.operators');
const clearBtn = document.querySelector('.clear-sign');
const deleteBtn = document.querySelector('.delete-sign');
const equalBtn = document.querySelector('.equal-sign');
//variables 
let operandsA = "";
let operatorSign = "";
let operandsB = "";
let totaResult = "";
//make operands work
function submitOperands() {
    //make operands work
    operands.forEach((operand) => {
        operand.addEventListener('click', ()=>{
            if (!operatorSign){
                operandsA += operand.value;
                prevDisplay.textContent = operandsA;
                console.log(operandsA, "op1")
                
            } 
            else if (operatorSign === "-"||operatorSign === "+"||operatorSign === "*"||operatorSign === "/"){
                operandsB += operand.value;
                currDisplay.textContent = operandsB;
                console.log(operandsB, "op2");
            }
        })
    })
};
submitOperands();
//make operators work
function submitOperator() {
    operators.forEach((operator)=> {
        operator.addEventListener('click', ()=>{
            operatorSign = operator.value;
            prevDisplay.textContent += operatorSign;
            console.log(operatorSign);
        })
    })
};
submitOperator();
//make equal button work
function totalResults(){
    equalBtn.addEventListener('click',()=>{
        if (operatorSign === '+'){
            console.log('+ clicked');
            prevDisplay.textContent = parseInt(operandsA) + parseInt(operandsB) ;
        } else if (operatorSign === '-'){
            console.log('- clicked');
            prevDisplay.textContent = parseInt(operandsA) - parseInt(operandsB);
        } else if (operatorSign === '*'){
            console.log('* clicked');
            prevDisplay.textContent = parseInt(operandsA) * parseInt(operandsB);
        } else if (operatorSign === '/'){
            console.log('/ clicked');
            prevDisplay.textContent = parseInt(operandsA) / parseInt(operandsB);
        }
        
    })
}
totalResults()
















// function totalResult() {
//     equalBtn.addEventListener('click', ()=>{
//         if (currDisplay.textContent.includes('+')) {
//             return operandsA + operandsB;
//         } else if (currDisplay.textContent.includes('-')){
//             return operandsA - operandsB;
//         } else if (currDisplay.textContent.includes('*')){
//             return operandsA * operandsB;
//         } else if (currDisplay.textContent.includes('/')){
//             return operandsA / operandsB;
//         }
//         console.log(operatoSign)
//     })
// }
// totalResult();