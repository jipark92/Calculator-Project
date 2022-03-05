const prevDisplay = document.querySelector('.prev-display');
const currDisplay = document.querySelector('.curr-display');
const operands = document.querySelectorAll('.operands');
const operators = document.querySelectorAll('.operators');
const clearBtn = document.querySelector('.clear-sign');
const deleteBtn = document.querySelector('.delete-sign');
const equalBtn = document.querySelector('.equal-sign');

let operandsA = "";
let operatorSign = "";
let operandsB = "";
let totaResult = "";

let show = allButtons;
function allButtons(){
    function submitOperands() {
        operands.forEach((operand) => {
            operand.addEventListener('click', ()=>{
                if (!operatorSign){
                    operandsA += operand.value;
                    prevDisplay.textContent = operandsA;
                    // console.log(operandsA, "op1");  
                } 
                else if (operatorSign === "-"||operatorSign === "+"||operatorSign === "*"||operatorSign === "/"){
                    operandsB += operand.value;
                    currDisplay.textContent = operandsB;
                    // console.log(operandsB, "op2");
                }
            })
        })
    };
    submitOperands();
    function submitOperator() {
        operators.forEach((operator)=> {
            operator.addEventListener('click', ()=>{
                operatorSign = operator.value;
                prevDisplay.textContent += operatorSign;
            })
        })
    };
    submitOperator();
    function eqaulButton(){
        equalBtn.addEventListener('click',()=>{
            if (operatorSign === '+'){
                prevDisplay.textContent = parseInt(operandsA) + parseInt(operandsB) ;
                currDisplay.textContent = ""
                operandsA = prevDisplay.textContent;
                operandsB = "";
                return;
            } else if (operatorSign === '-'){
                prevDisplay.textContent = parseInt(operandsA) - parseInt(operandsB);
                currDisplay.textContent = ""
                operandsA = prevDisplay.textContent;
                operandsB = "";
                return;
            } else if (operatorSign === '*'){
                prevDisplay.textContent = parseInt(operandsA) * parseInt(operandsB);
                currDisplay.textContent = ""
                operandsA = prevDisplay.textContent;
                operandsB = "";
                return;
            } else if (operatorSign === '/'){
                prevDisplay.textContent = parseInt(operandsA) / parseInt(operandsB);
                currDisplay.textContent = ""
                operandsA = prevDisplay.textContent;
                operandsB = "";
                return;
            }
        })
    };
    eqaulButton();
    function clearButton(){
        clearBtn.addEventListener('click',()=>{
            prevDisplay.textContent = "";
            currDisplay.textContent = "";
            operandsA = "";
            operandsB = "";
            operatorSign = "";
            totaResult = "";
        })
    };
    clearButton();
    function deleteButton() {
        deleteBtn.addEventListener('click',()=>{
            prevDisplay.textContent = operandsA.slice(0,-1)
            prevDisplay.textContent.slice(0,-1);
            console.log(operandsA, 'click')
            console.log(prevDisplay.textContent, 'click')
        })
    }
    deleteButton();
}
allButtons();







// if (!operatorSign){
//     prevDisplay.textContent.slice(0,-1);
//     console.log(prevDisplay.textContent, "del");
//     // console.log(operandsA)
//     // console.log(prevDisplay.textContent);
// } else if (operatorSign === "-"||operatorSign === "+"||operatorSign === "*"||operatorSign === "/"){
//     // currDisplay.textContent = operandsB.slice(0,-1);
// }




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