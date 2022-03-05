const prevDisplay = document.querySelector('.prev-display');
const currDisplay = document.querySelector('.curr-display');
const operands = document.querySelectorAll('.operands');
const operators = document.querySelectorAll('.operators');
const clearBtn = document.querySelector('.clear-sign');
const deleteBtn = document.querySelector('.delete-sign');
const equalBtn = document.querySelector('.equal-sign');
const operatorDisplay = document.querySelector('.operator-display');


//variables 
let operandsA = "";
let operatorSign = "";
let operandsB = "";
// let operatoSign = submitOperator(); 





//make operands work
function submitOperandsA() {
    operands.forEach((operand) => {
        operand.addEventListener('click', ()=>{
            if (!prevDisplay.textContent.includes('+', '-', '/', '*')){
                operandsA += operand.value;
                prevDisplay.textContent = operandsA
                console.log(operandsA, "op1")
            }



            
            else if (prevDisplay.textContent.includes('+', '-', '/', '*')){
                operandsB += operand.value;
                prevDisplay.textContent += operandsB
                console.log(operandsB, "op2")
            }
        })
    })
};
submitOperandsA();

// function submitOperandsB() {
//     operands.forEach((operand) => {
//         operand.addEventListener('click', ()=>{
//             currDisplay.textContent += operand.textContent;
//             // console.log(currDisplay.textContent)
//             operandsB = currDisplay.textContent;
//             console.log(operandsB)
//         })
//     })
// };





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



// if (currDisplay.textContent.includes('+', '-', '/', '*')){
                
// }

function submitOperator() {
    operators.forEach((operator)=> {
        operator.addEventListener('click', ()=>{
            operatorSign = operator.value;
            prevDisplay.textContent += operator.value;
            console.log(operatorSign)
            // console.log(operatorSign);
            // if (currDisplay.textContent.includes('+')){
            //     console.log(currDisplay.textContent)
            //     return  "+";
               
            // } else if (currDisplay.textContent.includes('-')){
            //     return  "-";
                
            // } else if (currDisplay.textContent.includes('*')){
            //     return  "*";
                
            // } else if (currDisplay.textContent.includes('/')){
            //     return  "/";
            // }
        })
        
    })

};
submitOperator();
